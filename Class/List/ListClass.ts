/**
 * @file List Class file
 * @date 2020-11-09
 * @author Frank
 * @lastModify Frank 2020-11-09
 */

import { ConditionContent, ScriptContent } from "../Content/ContentClass";
import { Ele } from "../EleClass";
import { HtmlItem, OptionItem, ScriptItem } from "../Item/ItemClass";
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
  public editor: { comment: string; task: string };
  constructor(
    id: string,
    kind: string | "List",
    meta: Record<string, unknown> | null,
    editor: { comment: string; task: string },
    list: unknown[]
  ) {
    super(id, kind, meta, editor);
    this.list = list;
    this.editor = editor;
  }
  public validateList() {
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
class Questionnaire extends List {
  public editor: { comment: string; task: string };
  public list: Array<Node>;
  public meta: {
    lan: Array<string>;
    defaultLan: string;
    scripts: {
      [key: string]: { name: string; data: ScriptItem };
    };
    builtin_scripts: {
      [key: string]: {
        name: string;
        data: string;
      };
    };
    optionLists: {
      [key: string]: { name: string; data: OptionList };
    };
  };
  public survey_name: string;
  public survey_note: string;
  constructor(
    id: string,
    kind: "QuestionnaireList",
    survey_name: string,
    survey_note: string,
    meta: {
      lan: Array<string>;
      defaultLan: string;
      scripts: {
        [key: string]: { name: string; data: ScriptItem };
      };
      builtin_scripts: {
        [key: string]: {
          name: string;
          data: string;
        };
      };
      optionLists: {
        [key: string]: { name: string; data: OptionList };
      };
    },
    editor: { comment: string; task: string },
    list: Array<Node>
  ) {
    super(id, kind, meta, editor, list);
    this.editor = editor;
    this.list = list;
    this.meta = meta;
    this.survey_name = survey_name;
    this.survey_note = survey_note;
  }
  public validateListNodes() {
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
  public editor: { comment: string; task: string };
  public list: Array<HtmlItem | ScriptContent>;
  constructor(
    id: string,
    kind: "TextList",
    meta: Record<string, unknown> | null,
    editor: { comment: string; task: string },
    list: Array<HtmlItem | ScriptContent>
  ) {
    super(id, kind, meta, editor, list);
    this.editor = editor;
    this.list = list;
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
  public editor: { comment: string; task: string };
  public list: Array<ConditionContent | ScriptContent | boolean>;
  constructor(
    id: string,
    kind: "ConditionList",
    meta: Record<string, unknown> | null,
    editor: { comment: string; task: string },
    list: Array<ConditionContent | ScriptContent | boolean>
  ) {
    super(id, kind, meta, editor, list);
    this.editor = editor;
    this.list = list;
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
  public editor: { comment: string; task: string };
  public list: Array<OptionItem>;
  public meta: {
    name: string | null;
    link: {
      key: string;
    } | null;
  } | null;
  constructor(
    id: string,
    kind: "OptionList",
    meta: {
      name: string | null;
      link: {
        key: string;
      } | null;
    } | null,
    editor: { comment: string; task: string },
    list: Array<OptionItem>
  ) {
    super(id, kind, meta, editor, list);
    this.editor = editor;
    this.list = list;
    this.meta = meta;
  }
}
/* <------------------------------------ **** List Second Level Class END **** ------------------------------------ */

export { List, Questionnaire, TextList, ConditionList, OptionList };
