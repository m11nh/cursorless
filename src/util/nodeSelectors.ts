import { SyntaxNode, Point } from "web-tree-sitter";
import { Position, Range, Selection, TextEditor } from "vscode";
import { SelectionWithContext, SelectionExtractor } from "../typings/Types";
import { identity } from "lodash";

export function makeRangeFromPositions(
  startPosition: Point,
  endPosition: Point
) {
  return new Range(
    startPosition.row,
    startPosition.column,
    endPosition.row,
    endPosition.column
  );
}

export function positionFromPoint(point: Point): Position {
  return new Position(point.row, point.column);
}

export function getNodeRange(node: SyntaxNode) {
  return new Range(
    node.startPosition.row,
    node.startPosition.column,
    node.endPosition.row,
    node.endPosition.column
  );
}

/**
 * Returns node range excluding the first and last child
 * @param node The note for which to get the internal range
 * @returns The internal range of the given node
 */
export function getNodeInternalRange(node: SyntaxNode) {
  const children = node.children;

  return makeRangeFromPositions(
    children[0].endPosition,
    children[children.length - 1].startPosition
  );
}

export function simpleSelectionExtractor(
  editor: TextEditor,
  node: SyntaxNode
): SelectionWithContext {
  return {
    selection: new Selection(
      new Position(node.startPosition.row, node.startPosition.column),
      new Position(node.endPosition.row, node.endPosition.column)
    ),
    context: {},
  };
}

/**
 * Extracts a selection from the first node to the second node.
 * Both nodes are included in the selected nodes
*/
export function pairSelectionExtractor(
  editor: TextEditor,
  node1: SyntaxNode,
  node2: SyntaxNode
): SelectionWithContext {
  const isForward = node1.startIndex < node2.startIndex;
  const start = isForward ? node1 : node2;
  const end = isForward ? node2 : node1;
  return {
    selection: new Selection(
      new Position(start.startPosition.row, start.startPosition.column),
      new Position(end.endPosition.row, end.endPosition.column)
    ),
    context: {},
  };
}

export function argumentSelectionExtractor(): SelectionExtractor {
  return delimitedSelector(
    (node) =>
      node.type === "," ||
      node.type === "(" ||
      node.type === ")" ||
      node.type === "[" ||
      node.type === "]" ||
      node.type === "}" ||
      node.type === "{",
    ", "
  );
}

export function unwrapSelectionExtractor(
  editor: TextEditor,
  node: SyntaxNode
): SelectionWithContext {
  let startIndex = node.startIndex;
  let endIndex = node.endIndex;
  if (node.text.startsWith("(") && node.text.endsWith(")")) {
    startIndex += 1;
    endIndex -= 1;
  } else if (node.text.endsWith(";")) {
    endIndex -= 1;
  }
  return {
    selection: new Selection(
      editor.document.positionAt(startIndex),
      editor.document.positionAt(endIndex)
    ),
    context: {},
  };
}

export function selectWithLeadingDelimiter(...delimiters: string[]) {
  return function (editor: TextEditor, node: SyntaxNode): SelectionWithContext {
    const firstSibling = node.previousSibling;
    const secondSibling = firstSibling?.previousSibling;
    let leadingDelimiterRange;
    if (firstSibling) {
      if (delimiters.includes(firstSibling.type)) {
        // Second sibling exists. Terminate before it.
        if (secondSibling) {
          leadingDelimiterRange = makeRangeFromPositions(
            secondSibling.endPosition,
            node.startPosition
          );
        }
        // First delimiter sibling exists. Terminate after it.
        else {
          leadingDelimiterRange = makeRangeFromPositions(
            firstSibling.startPosition,
            node.startPosition
          );
        }
      }
      // First sibling exists but is not the delimiter we are looking for. Terminate before it.
      else {
        leadingDelimiterRange = makeRangeFromPositions(
          firstSibling.endPosition,
          node.startPosition
        );
      }
    }
    return {
      ...simpleSelectionExtractor(editor, node),
      context: {
        leadingDelimiterRange,
      },
    };
  };
}

export function selectWithTrailingDelimiter(...delimiters: string[]) {
  return function (editor: TextEditor, node: SyntaxNode): SelectionWithContext {
    const firstSibling = node.nextSibling;
    const secondSibling = firstSibling?.nextSibling;
    let trailingDelimiterRange;
    if (firstSibling) {
      if (delimiters.includes(firstSibling.type)) {
        if (secondSibling) {
          trailingDelimiterRange = makeRangeFromPositions(
            node.endPosition,
            secondSibling.startPosition
          );
        } else {
          trailingDelimiterRange = makeRangeFromPositions(
            node.endPosition,
            firstSibling.endPosition
          );
        }
      } else {
        trailingDelimiterRange = makeRangeFromPositions(
          node.endPosition,
          firstSibling.startPosition
        );
      }
    }
    return {
      ...simpleSelectionExtractor(editor, node),
      context: {
        trailingDelimiterRange,
      },
    };
  };
}

function getNextNonDelimiterNode(
  startNode: SyntaxNode,
  isDelimiterNode: (node: SyntaxNode) => boolean
): SyntaxNode | null {
  let node = startNode.nextSibling;

  while (node != null) {
    if (!isDelimiterNode(node)) {
      return node;
    }

    node = node.nextSibling;
  }

  return node;
}

function getPreviousNonDelimiterNode(
  startNode: SyntaxNode,
  isDelimiterNode: (node: SyntaxNode) => boolean
): SyntaxNode | null {
  let node = startNode.previousSibling;

  while (node != null) {
    if (!isDelimiterNode(node)) {
      return node;
    }

    node = node.previousSibling;
  }

  return node;
}

export function delimitersSelector(...delimiters: string[]) {
  return delimitedSelector((node) => delimiters.includes(node.type), ", ");
}

/**
 * Creates a selector which can be used to automatically clean up after elements
 * in a list by removing leading or trailing delimiters
 * @param isDelimiterNode A function used to determine whether a given node is a
 * delimiter node
 * @param defaultDelimiter The default list separator to use if we can't
 * determine it by looking before or after the given node
 * @param getStartNode A function to be applied to the node to determine which
 * node is the start node if we really want to expand to a sequence of nodes
 * @param getEndNode A function to be applied to the node to determine which
 * node is the end node if we really want to expand to a sequence of nodes
 * @returns A selection extractor
 */
export function delimitedSelector(
  isDelimiterNode: (node: SyntaxNode) => boolean,
  defaultDelimiter: string,
  getStartNode: (node: SyntaxNode) => SyntaxNode = identity,
  getEndNode: (node: SyntaxNode) => SyntaxNode = identity
): SelectionExtractor {
  return (editor: TextEditor, node: SyntaxNode) => {
    let containingListDelimiter: string | null = null;
    let leadingDelimiterRange: Range | null = null;
    let trailingDelimiterRange: Range | null = null;
    const startNode = getStartNode(node);
    const endNode = getEndNode(node);

    const nextNonDelimiterNode = getNextNonDelimiterNode(
      endNode,
      isDelimiterNode
    );
    const previousNonDelimiterNode = getPreviousNonDelimiterNode(
      startNode,
      isDelimiterNode
    );

    if (nextNonDelimiterNode != null) {
      trailingDelimiterRange = makeRangeFromPositions(
        endNode.endPosition,
        nextNonDelimiterNode.startPosition
      );

      containingListDelimiter = editor.document.getText(trailingDelimiterRange);
    }

    if (previousNonDelimiterNode != null) {
      leadingDelimiterRange = makeRangeFromPositions(
        previousNonDelimiterNode.endPosition,
        startNode.startPosition
      );

      if (containingListDelimiter == null) {
        containingListDelimiter = editor.document.getText(
          leadingDelimiterRange
        );
      }
    }

    if (containingListDelimiter == null) {
      containingListDelimiter = defaultDelimiter;
    }

    return {
      selection: new Selection(
        new Position(
          startNode.startPosition.row,
          startNode.startPosition.column
        ),
        new Position(endNode.endPosition.row, endNode.endPosition.column)
      ),
      context: {
        isInDelimitedList: true,
        containingListDelimiter,
        leadingDelimiterRange,
        trailingDelimiterRange,
      },
    };
  };
}