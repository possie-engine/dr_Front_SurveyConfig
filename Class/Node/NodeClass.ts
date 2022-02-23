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
} from '../Content/ContentClass';
import { Ele } from '../EleClass';
import { HtmlItem } from '../Item/ItemClass';

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
  public editor: {
    comment: string;
    instruction: HtmlItem;
  };
  public structure: {
    code: string;
    condition: Record<string, unknown>;
    [key: string]: unknown;
  };
  constructor(
    id: string,
    kind: string | 'Node',
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem },
    structure: {
      code: string;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor);
    this.editor = editor;
    this.structure = structure;
  }
  public validateStructure() {
    return null;
  }
  public validateStructureCode() {
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
  public structure: {
    code: string;
    content: QuestionContent;
    text: { default: TextContent; [key: string]: TextContent };
    instruction: { default: TextContent; [key: string]: TextContent };
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
    appearance: {
      plugin: {
        [key: string]: {
          name: string;
          settings: {
            type: 'map' | 'array' | 'boolean' | 'string' | 'number';
            description: string;
            hint: string;
            value:
              | object
              | Array<number | boolean | string>
              | string
              | boolean
              | number;
          } | null;
        };
      };
    };
  };
  constructor(
    id: string,
    kind: 'QuestionNode',
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: QuestionContent;
      text: { default: TextContent; [key: string]: TextContent };
      instruction: { default: TextContent; [key: string]: TextContent };
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
      appearance: {
        plugin: {
          [key: string]: {
            name: string;
            settings: {
              type: 'map' | 'array' | 'boolean' | 'string' | 'number';
              description: string;
              hint: string;
              value:
                | object
                | Array<number | boolean | string>
                | string
                | boolean
                | number;
            } | null;
          };
        };
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureText() {
    return null;
  }
  public validateStructureInstruction() {
    return null;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
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
  public structure: {
    code: string;
    content: BlockContent;
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'BlockNode' | string,
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: BlockContent;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
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
  public structure: {
    code: string;
    content: ExecutionContent;
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'ExecutionNode',
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: ExecutionContent;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
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
  public structure: {
    code: string;
    content: MarkContent;
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'MarkNode' | string,
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: MarkContent;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
    return null;
  }
}

/**
 * Node second level class Display extend from Node
 * @param {string} id the id of the node
 * @param {'Display'} kind the node kind is type of 'MarkNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class DisplayNode extends Node {
  public structure: {
    code: string;
    text: {
      [key: string]: TextContent;
    };
    condition: {
      true: ConditionContent | boolean | null;
      false: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'DisplayNode' | string,
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      text: {
        [key: string]: TextContent;
      };
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
    return null;
  }
}

/**
 * Node second level class Display extend from Node
 * @param {string} id the id of the node
 * @param {'ExitNode'} kind the node kind is type of 'MarkNode'
 * @param {object | null} meta the meta data of the node
 * @param {object} editor the editor of the node
 * @param {object} structure the node structure data is an object
 */
class ExitNode extends Node {
  public structure: {
    code: string;
    text: {
      [key: string]: TextContent;
    };
    condition: {
      true: ConditionContent | boolean | null;
      false: ConditionContent | boolean | null;
    };
    setStatus: string;
  };
  constructor(
    id: string,
    kind: 'DisplayNode' | string,
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      text: {
        [key: string]: TextContent;
      };
      condition: {
        true: ConditionContent | boolean | null;
        false: ConditionContent | boolean | null;
      };
      setStatus: string;
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
  public validateStructureContent() {
    return null;
  }
  public validateStructureCondition() {
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
  public structure: {
    code: string;
    content: LoopContent;
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'LoopNode',
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: LoopContent;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
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
  public structure: {
    code: string;
    content: QuotaContent;
    condition: {
      [key: string]: ConditionContent | boolean | null;
    };
  };
  constructor(
    id: string,
    kind: 'QuotaNode',
    meta: {
      node_label: string;
    },
    editor: { comment: string; instruction: HtmlItem; task: string },
    structure: {
      code: string;
      content: QuotaContent;
      condition: {
        [key: string]: ConditionContent | boolean | null;
      };
    }
  ) {
    super(id, kind, meta, editor, structure);
    this.structure = structure;
  }
}
/* <------------------------------------ **** Node Third Level Class END **** ------------------------------------ */

export {
  Node,
  QuestionNode,
  BlockNode,
  ExecutionNode,
  MarkNode,
  ExitNode,
  DisplayNode,
  LoopNode,
  QuotaNode,
};
