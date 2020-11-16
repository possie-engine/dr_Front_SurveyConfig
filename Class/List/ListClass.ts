/**
 * @file List Class file
 * @date 2020-11-09
 * @author Frank
 * @lastModify Frank 2020-11-09
 */

import { ConditionContent, ScriptContent } from "../Content/ContentClass";
import { Ele } from "../EleClass";
import { HtmlItem, OptionItem } from "../Item/ItemClass";
import { Node } from "../Node/NodeClass";

/* <------------------------------------ **** List Top Level Class START **** ------------------------------------ */
/**
 * list top level Class extend from Ele
 * @param {string} id the id of the list
 * @param {'List'} kind the list kind is type of 'List'
 * @param {object | null} meta the meta data of the list
 * @param {object | null} editor the editor of the list
 */
class List extends Ele {
  public list: unknown[];
  constructor(
    id: string,
    kind: string | "List",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    list: unknown[]
  ) {
    super(id, kind, meta, editor);
    this.list = list;
  }
  public validateList(): void {
    return null;
  }
}

/* <------------------------------------ **** List Top Level Class END **** ------------------------------------ */

/* <------------------------------------ **** List Second Level Class START **** ------------------------------------ */

/**
 * list second level class QuestionnaireList extend from list Class
 * @param {string} id the id of the list
 * @param {'QuestionnaireList'} kind the list kind is type of 'QuestionnaireList'
 * @param {object | null} meta the meta data of the list
 * @param {object} editor the editor of the list
 * @param {object} list the list type is the node type
 */
class QuestionnaireList extends List {
  constructor(
    id: string,
    kind: "QuestionnaireList",
    meta: Record<string, unknown> | null,
    editor: { comment: string },
    list: Array<Node>
  ) {
    super(id, kind, meta, editor, list);
  }
  public validateListNodes(): void {
    return null;
  }
}

/**
 * list second level class TextList extend from list Class
 * @param {string} id the id of the list
 * @param {'TextList'} kind the list kind is type of 'TextList'
 * @param {object | null} meta the meta data of the list
 * @param {object} editor the editor of the list
 * @param {object} list the list type is the node type
 */
class TextList extends List {
  constructor(
    id: string,
    kind: "TextList",
    meta: Record<string, unknown> | null,
    editor: { comment: string },
    list: Array<HtmlItem | ScriptContent>
  ) {
    super(id, kind, meta, editor, list);
  }
}

/**
 * list second level class ConditionList extend from list Class
 * @param {string} id the id of the list
 * @param {'ConditionList'} kind the list kind is type of 'ConditionList'
 * @param {object | null} meta the meta data of the list
 * @param {object} editor the editor of the list
 * @param {object} list the list type is the node type
 */
class ConditionList extends List {
  constructor(
    id: string,
    kind: "ConditionList",
    meta: Record<string, unknown> | null,
    editor: { comment: string },
    list: Array<ConditionContent | ScriptContent | boolean>
  ) {
    super(id, kind, meta, editor, list);
  }
}

/**
 * list second level class OptionList extend from list Class
 * @param {string} id the id of the list
 * @param {'OptionList'} kind the list kind is type of 'OptionList'
 * @param {object | null} meta the meta data of the list
 * @param {object} editor the editor of the list
 * @param {object} list the list type is the node type
 */
class OptionList extends List {
  constructor(
    id: string,
    kind: "OptionList",
    meta: Record<string, unknown> | null,
    editor: {
      comment: string;
      link: { dictionary: string; name: string } | null;
    },
    list: Array<OptionItem>
  ) {
    super(id, kind, meta, editor, list);
  }
}
/* <------------------------------------ **** List Second Level Class END **** ------------------------------------ */

export { List, QuestionnaireList, TextList, ConditionList, OptionList };
