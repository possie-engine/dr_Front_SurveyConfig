/**
 * @file Item Class file
 * @date 2020-11-09
 * @author Frank
 * @lastModify Frank 2020-11-09
 */

import { Ele } from "../EleClass";
import { TextContent } from "../Content/ContentClass";

/* <------------------------------------ **** Item Top Level Class START **** ------------------------------------ */

/**
 * Item top level Class extend from Ele
 * @param {string} id the id of the Item
 * @param {'Item'} kind the Item kind is type of 'Item'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class Item extends Ele {
  public data: Record<string, unknown>;
  constructor(
    id: string,
    kind: string | "Item",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    data: Record<string, unknown>
  ) {
    super(id, kind, meta, editor);
    this.data = data;
  }
  validateData(): void {
    return null;
  }
}
/* <------------------------------------ **** Item Top Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Item Second Level Class START **** ------------------------------------ */

/**
 * Item Second level ScriptItem Class extend from Item
 * @param {string} id the id of the Item
 * @param {'ScriptItem' | string} kind the Item kind is type of 'ScriptItem' or String
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class ScriptItem extends Item {
  constructor(
    id: string,
    kind: string | "ScriptItem",
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
  public validateDataFunction(): void {
    return null;
  }
}

/**
 * Item Second level OptionItem Class extend from Item
 * @param {string} id the id of the Item
 * @param {'OptionItem'} kind the Item kind is type of 'OptionItem'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class OptionItem extends Item {
  constructor(
    id: string,
    kind: "OptionItem",
    meta: Record<string, unknown> | null,
    editor: {
      comment: string;
      instruction: HtmlItem;
    },
    data: {
      code: string;
      text: TextContent;
    }
  ) {
    super(id, kind, meta, editor, data);
  }
  public validateDataCode(): void {
    return null;
  }
  public validateDataText(): void {
    return null;
  }
}
/**
 * Item Second level HtmlItem Class extend from Item
 * @param {string} id the id of the Item
 * @param {'HtmlItem'} kind the Item kind is type of 'HtmlItem'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class HtmlItem extends Item {
  constructor(
    id: string,
    kind: "HtmlItem",
    meta: Record<string, unknown> | null,
    editor: { comment: string },
    data: { html: string }
  ) {
    super(id, kind, meta, editor, data);
  }
  public validateHtml(): void {
    return null;
  }
}
/* <------------------------------------ **** Item Second Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Item Third Level Class START **** ------------------------------------ */
/**
 * Item Third level TextScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'TextScriptItem' | string} kind the Item kind is type of 'TextScriptItem' or string
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class TextScriptItem extends ScriptItem {
  constructor(
    id: string,
    kind: "TextScriptItem" | string,
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}

/**
 * Item Third level ExcutionScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'ExcutionScriptItem' | string} kind the Item kind is type of 'ExcutionScriptItem' or string
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class ExcutionScriptItem extends ScriptItem {
  constructor(
    id: string,
    kind: "ExcutionScriptItem" | string,
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}

/**
 * Item Third level ConditionScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'ConditionScriptItem' | string} kind the Item kind is type of 'ConditionScriptItem' or string
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class ConditionScriptItem extends ScriptItem {
  constructor(
    id: string,
    kind: "ExcutionScriptItem" | string,
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}
/* <------------------------------------ **** Item Third Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Item Fourth Level Class START **** ------------------------------------ */
/**
 * Item Fourth level BuiltinTextScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'BuiltinTextScriptItem'} kind the Item kind is type of 'BuiltinTextScriptItem'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class BuiltinTextScriptItem extends TextScriptItem {
  constructor(
    id: string,
    kind: "BuiltinTextScriptItem",
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}

/**
 * Item Fourth level BuiltinExcutionScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'BuiltinExcutionScriptItem'} kind the Item kind is type of 'BuiltinExcutionScriptItem'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class BuiltinExcutionScriptItem extends ExcutionScriptItem {
  constructor(
    id: string,
    kind: "BuiltinExcutionScriptItem",
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}

/**
 * Item Fourth level BuiltinConditionScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'BuiltinConditionScriptItem'} kind the Item kind is type of 'BuiltinConditionScriptItem'
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class BuiltinConditionScriptItem extends ConditionScriptItem {
  constructor(
    id: string,
    kind: "BuiltinConditionScriptItem",
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: { function: string }
  ) {
    super(id, kind, meta, editor, data);
  }
}
/* <------------------------------------ **** Item Fourth Level Class END **** ------------------------------------ */

export {
  Item,
  ScriptItem,
  OptionItem,
  HtmlItem,
  TextScriptItem,
  ExcutionScriptItem,
  ConditionScriptItem,
  BuiltinTextScriptItem,
  BuiltinExcutionScriptItem,
  BuiltinConditionScriptItem,
};
