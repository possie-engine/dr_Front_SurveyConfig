/**
 * @file Item Class file
 * @date 2020-11-10
 * @author Frank
 * @lastModify Frank 2020-11-10
 */

import { Ele } from "../EleClass";
import { ExcutionScriptItem, HtmlItem, ScriptItem } from "../Item/ItemClass";
import { ConditionList, OptionList, TextList } from "../List/ListClass";
import { Node } from "../Node/NodeClass";

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
    kind: string | "Content",
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
  public validateContent(): void {
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
class QuestionContent extends Content {
  constructor(
    id: string,
    kind: "QuestionContent",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      options: Array<Array<OptionList>>;
      optionsDisplay: Array<
        Array<{
          true: ConditionContent | boolean | null;
          false: ConditionContent | boolean | null;
        }>
      >;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentOptions(): void {
    return null;
  }
  public validateContentOptionsDisplay(): void {
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
  constructor(
    id: string,
    kind: "ConditionContent",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      condition: Array<boolean | ConditionList>;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentConditions(): void {
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
  constructor(
    id: string,
    kind: "TextContent",
    meta: Record<string, unknown> | null,
    editor: { comment: string },
    content: {
      type: string;
      list: TextList;
      lan: string;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentList(): void {
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
  constructor(
    id: string,
    kind: "BlockContent" | string,
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      list: Array<Node>;
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentList(): void {
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
  constructor(
    id: string,
    kind: "MarkContent" | string,
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      markers: Array<string>;
      logics: Array<ConditionContent>;
      [key: string]: unknown;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentMarkers(): void {
    return null;
  }
  public validateContentLogics(): void {
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
  constructor(
    id: string,
    kind: "ExecutionContent",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      excution: ExcutionScriptItem;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentExcution(): void {
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
  constructor(
    id: string,
    kind: "ScriptContent",
    meta: Record<string, unknown> | null,
    editor: {
      comment: string;
      instruction: HtmlItem;
    },
    content: {
      type: string;
      script: ScriptItem | null | string;
      arguments: Array<string>;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentType(): void {
    return null;
  }
  public validateContentScript(): void {
    return null;
  }
  public validateContentArguments(): void {
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
  constructor(
    id: string,
    kind: "LoopContent",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      options: OptionList;
      logics: Array<ConditionContent>;
      list: Array<Node>;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentOptions(): void {
    return null;
  }
  public validateContentLogics(): void {
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
  constructor(
    id: string,
    kind: "QuotaContent",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    content: {
      type: string;
      markers: Array<string>;
      logics: Array<ConditionContent>;
      quotas: Array<number>;
    }
  ) {
    super(id, kind, meta, editor, content);
  }
  public validateContentQuotas(): void {
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
