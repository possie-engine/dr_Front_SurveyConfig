/**
 * @file Node Class File
 * @date 2020-11-10
 * @author Frank
 * @lastModify Frank 2020-11-10
 */
import {
  BlockContent,
  ConditionContent,
  ExecutionContent,
  LoopContent,
  MarkContent,
  QuestionContent,
  QuotaContent,
  TextContent,
} from "../Content/ContentClass";
import { Ele } from "../EleClass";
import { HtmlItem } from "../Item/ItemClass";

/* <------------------------------------ **** Node Top Level Class START **** ------------------------------------ */
/**
 * Node top level class Node extend from node Ele
 * @param {string} id the id of the node
 * @param {'Node' | string} kind the node kind is type of 'Node'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class Node extends Ele {
  public structure: {
    code: string;
    content: unknown;
    condition: {
      true: ConditionContent | boolean | null;
      false: ConditionContent | boolean | null;
    };
    [key: string]: unknown;
  };
  constructor(
    id: string,
    kind: string | "Node",
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: unknown;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor);
    this.structure = structure;
  }
  public validateStructure(): void {
    return null;
  }
  public validateStructureCode(): void {
    return null;
  }
}
/* <------------------------------------ **** Node Top Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Node Second Level Class START **** ------------------------------------ */
/**
 * Node second level class QuestionNode extend from Node
 * @param {string} id the id of the node
 * @param {'QuestionNode'} kind the node kind is type of 'QuestionNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class QuestionNode extends Node {
  constructor(
    id: string,
    kind: "QuestionNode",
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: QuestionContent;
      text: TextContent | null;
      instruction: TextContent | null;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
  public validateStructureText(): void {
    return null;
  }
  public validateStructureInstruction(): void {
    return null;
  }
  public validateStructureContent(): void {
    return null;
  }
  public validateStructureCondition(): void {
    return null;
  }
}
/**
 * Node second level class BlockNode extend from Node
 * @param {string} id the id of the node
 * @param {'BlockNode'} kind the node kind is type of 'BlockNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class BlockNode extends Node {
  constructor(
    id: string,
    kind: "BlockNode" | string,
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: BlockContent;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
  public validateStructureContent(): void {
    return null;
  }
  public validateStructureCondition(): void {
    return null;
  }
}

/**
 * Node second level class ExecutionNode extend from Node
 * @param {string} id the id of the node
 * @param {'ExecutionNode'} kind the node kind is type of 'ExecutionNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class ExecutionNode extends Node {
  constructor(
    id: string,
    kind: "ExecutionNode",
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: ExecutionContent;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
  public validateStructureContent(): void {
    return null;
  }
  public validateStructureCondition(): void {
    return null;
  }
}

/**
 * Node second level class MarkNode extend from Node
 * @param {string} id the id of the node
 * @param {'MarkNode'} kind the node kind is type of 'MarkNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class MarkNode extends Node {
  constructor(
    id: string,
    kind: "MarkNode" | string,
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: MarkContent;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
  public validateStructureContent(): void {
    return null;
  }
  public validateStructureCondition(): void {
    return null;
  }
}
/* <------------------------------------ **** Node Second Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Node Third Level Class START **** ------------------------------------ */
/**
 * Node second level class LoopNode extend from Node
 * @param {string} id the id of the node
 * @param {'LoopNode'} kind the node kind is type of 'LoopNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class LoopNode extends BlockNode {
  constructor(
    id: string,
    kind: "LoopNode",
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: LoopContent;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
}
/**
 * Node second level class QuotaNode extend from Node
 * @param {string} id the id of the node
 * @param {'QuotaNode'} kind the node kind is type of 'QuotaNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class QuotaNode extends MarkNode {
  constructor(
    id: string,
    kind: "QuotaNode",
    meta: Record<string, unknown> | null,
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      content: QuotaContent;
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
  }
}
/* <------------------------------------ **** Node Third Level Class END **** ------------------------------------ */

export {
  Node,
  QuestionNode,
  BlockNode,
  ExecutionNode,
  MarkNode,
  LoopNode,
  QuotaNode,
};
