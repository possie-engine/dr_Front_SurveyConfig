/**
 * @file Item Class file
 * @date 2020-11-10
 * @author Frank
 * @lastModify Frank 2020-11-10
 */

import { Ele } from '../EleClass';
import { HtmlItem, OptionItem } from '../Item/ItemClass';
import { OptionList, TextList } from '../List/ListClass';
import { Node } from '../Node/NodeClass';

/* <------------------------------------ **** Content Top Level START **** ------------------------------------ */
/**
 * Content top level Class extend from Ele
 * @param {string} id the id of the Content
 * @param {'Content' | string} kind the Content kind is type of 'Content'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class Content extends Ele {
  public content: {
    type: string;
    [key: string]: unknown;
  };
  constructor(
    id: string,
    kind: string | 'Content',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor);
    this.content = content;
  }
  public validateContent() {
    return null;
  }
}
/* <------------------------------------ **** Content Top Level END **** ------------------------------------ */

/* <------------------------------------ **** Content Second Level Class START **** ------------------------------------ */
/**
 * Content second level Class QuestionContent extend from Content
 * @param {string} id the id of the Content
 * @param {'QuestionContent' | string} kind the Content kind is type of 'QuestionContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */

type QuestionContentContentType = {
  type: 'Single' | 'Multi' | 'OpenEnd' | 'Numeric';
  options: Array<Array<OptionList | OptionItem>>;
  optionsDisplay: {
    [key: string]: { [key: string]: ConditionContent | boolean | null };
  };
};
type QuestionContentMetaType = {
  dropDown: Array<{ active: boolean }>;
  randomized: Array<{
    active: boolean;
    type: 'auto' | 'script';
    options: {
      [key: string]: {
        code: string;
      };
    };
    fixedPositionFor: {
      [key: string]: {
        position: number;
      };
    };
    order: {
      recordedFormat: string;
      script: string | null;
      predefined: Array<string>;
    };
  }>;
  grouped: Array<{
    active: boolean;
    members: {
      [key: string]: {
        id: string;
        code: string;
        options: {
          [key: string]: {
            code: string;
          };
        };
        title: {
          text: string;
          script: null | string;
        };
        groupColor: string;
        order: {
          recordedFormat: string;
          script: string | null;
          predefined: Array<string>;
        };
      };
    };
    randomized: {
      active: boolean;
      type: 'auto' | 'script';
      options: {
        [key: string]: {
          code: string;
        };
      };
      fixedPositionFor: {
        [key: string]: {
          position: number;
        };
      };
      order: {
        recordedFormat: string;
        script: string | null;
        predefined: Array<string>;
      };
    };
  }>;
  extraData: {
    oe: {
      [key: string]: {
        placeHolder: string;
        code: string;
      };
    };
  };
};
class QuestionContent extends Content {
  public content: QuestionContentContentType;
  public meta: QuestionContentMetaType;

  constructor(
    id: string,
    kind: 'QuestionContent',
    meta: QuestionContentMetaType,
    editor: Record<string, unknown> | null,
    content: QuestionContentContentType
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
    this.meta = meta;
  }
  public validateContentType() {
    return null;
  }
  public validateContentOptions() {
    return null;
  }
  public validateContentOptionsDisplay() {
    return null;
  }
}
/**
 * Content second level Class ConditionContent extend from Content
 * @param {string} id the id of the Content
 * @param {'ConditionContent' | string} kind the Content kind is type of 'ConditionContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class ConditionContent extends Content {
  public content: {
    type: 'AND' | 'OR' | 'RAND' | 'ROR' | 'IS' | 'IS NOT';
    condition: Array<ConditionContent> | ScriptContent | boolean;
  };
  constructor(
    id: string,
    kind: 'ConditionContent',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'AND' | 'OR' | 'RAND' | 'ROR' | 'IS' | 'IS NOT';
      condition: Array<ConditionContent> | ScriptContent | boolean;
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
  }
  public validateContentType() {
    return null;
  }
  public validateContentConditions() {
    return null;
  }
}
/**
 * Content second level Class TextContent extend from Content
 * @param {string} id the id of the Content
 * @param {'TextContent' | string} kind the Content kind is type of 'TextContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class TextContent extends Content {
  public editor: Record<string, unknown> | null;
  public content: {
    type: string;
    list: TextList;
    lan: string;
  };
  constructor(
    id: string,
    kind: 'TextContent',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      list: TextList;
      lan: string;
    }
  ) {
    super(id, kind, meta, editor, content);
    this.editor = editor;
    this.content = content;
  }
  public validateContentType() {
    return null;
  }
  public validateContentList() {
    return null;
  }
}
/**
 * Content second level Class BlockContent extend from Content
 * @param {string} id the id of the Content
 * @param {'BlockContent' | string} kind the Content kind is type of 'BlockContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class BlockContent extends Content {
  public content: {
    type: 'Block' | string;
    list: Array<Node>;
    [key: string]: unknown;
  };
  constructor(
    id: string,
    kind: 'BlockContent' | string,
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'Block' | string;
      list: Array<Node>;
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = { ...content, type: 'Block' };
  }
  public validateContentType() {
    return null;
  }
  public validateContentList() {
    return null;
  }
}
/**
 * Content second level Class MarkContent extend from Content
 * @param {string} id the id of the Content
 * @param {'MarkContent' | string} kind the Content kind is type of 'MarkContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class MarkContent extends Content {
  public content: {
    type: 'Mark' | string;
    markers: Array<{
      id: string;
      name: string;
    }>;
    logics: Array<ConditionContent>;
    [key: string]: unknown;
  };
  constructor(
    id: string,
    kind: 'MarkContent' | string,
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'Mark' | string;
      markers: Array<{
        id: string;
        name: string;
      }>;
      logics: Array<ConditionContent>;
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
  }
  public validateContentType() {
    return null;
  }
  public validateContentMarkers() {
    return null;
  }
  public validateContentLogics() {
    return null;
  }
}
/**
 * Content second level Class ExecutionContent extend from Content
 * @param {string} id the id of the Content
 * @param {'ExecutionContent'} kind the Content kind is type of 'ExecutionContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class ExecutionContent extends Content {
  public content: {
    type: 'Execution';
    executions: Array<{
      id: string;
      arguments: Array<{
        type: string;
        value: string;
      }>;
    }>;
  };
  constructor(
    id: string,
    kind: 'ExecutionContent',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'Execution';
      executions: Array<{
        id: string;
        arguments: Array<{
          type: string;
          value: string;
        }>;
      }>;
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
  }
  public validateContentType() {
    return null;
  }
  public validateContentExcution() {
    return null;
  }
}
/**
 * Content second level Class ScriptContent extend from Content
 * @param {string} id the id of the Content
 * @param {'ScriptContent'} kind the Content kind is type of 'ScriptContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class ScriptContent extends Content {
  public editor: {
    instruction: HtmlItem;
  };
  public content: {
    type: 'Text' | 'Condition';
    execution: {
      id: string;
      arguments: {
        [key: string]: {
          value:
            | string
            | boolean
            | number
            | bigint
            | null
            | undefined
            | Array<any>
            | symbol
            | object;
        };
      };
      return: {
        value:
          | string
          | boolean
          | number
          | bigint
          | null
          | undefined
          | Array<any>
          | symbol
          | object;
      };
    };
  };
  constructor(
    id: string,
    kind: 'ScriptContent',
    meta: Record<string, unknown> | null,
    editor: {
      instruction: HtmlItem;
    },
    content: {
      type: 'Text' | 'Condition';
      execution: {
        id: string;
        arguments: {
          [key: string]: {
            value:
              | string
              | boolean
              | number
              | bigint
              | null
              | undefined
              | Array<any>
              | symbol
              | object;
          };
        };
        return: {
          value:
            | string
            | boolean
            | number
            | bigint
            | null
            | undefined
            | Array<any>
            | symbol
            | object;
        };
      };
    }
  ) {
    super(id, kind, meta, editor, content);
    this.editor = editor;
    this.content = content;
  }
  public validateContentType() {
    return null;
  }
  public validateContentScript() {
    return null;
  }
  public validateContentArguments() {
    return null;
  }
}
/* <------------------------------------ **** Content Second Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Content Thrid Level Class START **** ------------------------------------ */
/**
 * Content second level Class LoopContent extend from BlockContent
 * @param {string} id the id of the Content
 * @param {'LoopContent'} kind the Content kind is type of 'LoopContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class LoopContent extends BlockContent {
  public content: {
    type: 'Loop';
    options: OptionList;
    logics: Array<ConditionContent>;
    list: Array<Node>;
    loopItemDisplay: {
      [key: string]: { [key: string]: ConditionContent | boolean | null };
    };
  };
  constructor(
    id: string,
    kind: 'LoopContent',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'Loop';
      options: OptionList;
      logics: Array<ConditionContent>;
      list: Array<Node>;
      loopItemDisplay: {
        [key: string]: { [key: string]: ConditionContent | boolean | null };
      };
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
  }
  public validateContentOptions() {
    return null;
  }
  public validateContentLogics() {
    return null;
  }
}
/**
 * Content second level Class QuotaContent extend from BlockContent
 * @param {string} id the id of the Content
 * @param {'QuotaContent'} kind the Content kind is type of 'QuotaContent'
 * @param {object | null} meta the meta data of the Content
 * @param {object | null} editor the editor of the Content
 * @param {object} Content the content of the Content
 */
class QuotaContent extends MarkContent {
  public content: {
    type: 'Quota';
    markers: Array<{
      id: string;
      name: string;
      go_to_node: string | null;
    }>;
    logics: Array<ConditionContent>;
    quotas: {
      [key: string]: {
        number: number;
      };
    };
  };
  constructor(
    id: string,
    kind: 'QuotaContent',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: 'Quota';
      markers: Array<{
        id: string;
        name: string;
        go_to_node: string | null;
      }>;
      logics: Array<ConditionContent>;
      quotas: {
        [key: string]: {
          number: number;
        };
      };
    }
  ) {
    super(id, kind, meta, editor, content);
    this.content = content;
  }
  public validateContentQuotas() {
    return null;
  }
}
/* <------------------------------------ **** Content Thrid Level Class END **** ------------------------------------ */

export {
  Content,
  QuestionContent,
  ConditionContent,
  TextContent,
  BlockContent,
  MarkContent,
  ExecutionContent,
  ScriptContent,
  LoopContent,
  QuotaContent,
};
