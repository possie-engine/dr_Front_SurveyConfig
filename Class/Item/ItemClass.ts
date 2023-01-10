/**
 * @file Item Class file
 * @date 2020-11-09
 * @author Frank
 * @lastModify Frank 2020-11-09
 */

import { Ele } from '../EleClass';
import { TextContent } from '../Content/ContentClass';

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
    kind: string | 'Item',
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null,
    data: Record<string, unknown>
  ) {
    super(id, kind, meta, editor);
    this.data = data;
  }
  validateData() {
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
  public data: {
    function: string | null;
    arguments: Array<{
      name: string;
      type: string;
      instruction: string;
    }> | null;
    information: string | null;
    return: { type: string; instruction: string } | null;
  };
  constructor(
    id: string,
    kind: string | 'ScriptItem',
    meta: {
      name: string;
    },
    editor: Record<string, unknown> | null,
    data: {
      function: string | null;
      arguments: Array<{
        name: string;
        type: string;
        instruction: string;
      }> | null;
      information: string | null;
      return: { type: string; instruction: string } | null;
    }
  ) {
    super(id, kind, meta, editor, data);
    this.data = data;
  }
  public validateDataFunction() {
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
  public editor: {
    comment: string;
    instruction: HtmlItem;
    task: string;
  };
  public data: {
    code: string;
    text: { [key: string]: TextContent };
  };
  constructor(
    id: string,
    kind: 'OptionItem',
    meta: Record<string, unknown> | null,
    editor: {
      comment: string;
      instruction: HtmlItem;
      task: string;
    },
    data: {
      code: string;
      text: { [key: string]: TextContent };
    }
  ) {
    super(id, kind, meta, editor, data);
    this.editor = editor;
    this.data = data;
  }
  public validateDataCode() {
    return null;
  }
  public validateDataText() {
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
  public meta: Record<string, unknown> | null;
  public data: { html: string };
  constructor(
    id: string,
    kind: 'HtmlItem',
    meta: Record<string, unknown> | null,
    editor: { comment: string; task: string },
    data: { html: string }
  ) {
    super(id, kind, meta, editor, data);
    this.data = data;
    this.meta = meta;
  }
  public validateHtml() {
    return null;
  }
}
/* <------------------------------------ **** Item Second Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Item Third Level Class START **** ------------------------------------ */
/**
 * Item Third level CustomisedScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'CustomisedScriptItem' | string} kind the Item kind is type of 'CustomisedScriptItem' or string
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class CustomisedScriptItem extends ScriptItem {
  public meta: { name: string };
  public data: {
    function: string;
    arguments: Array<{
      name: string;
      type: string;
      instruction: string;
    }> | null;
    information: string | null;
    return: { type: string; instruction: string } | null;
    status: 'draft' | 'verified';
  };
  constructor(
    id: string,
    kind: 'CustomisedScriptItem' | string,
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: {
      function: string;
      arguments: Array<{
        name: string;
        type: string;
        instruction: string;
      }> | null;
      information: string | null;
      return: { type: string; instruction: string } | null;
      status: 'draft' | 'verified';
    }
  ) {
    super(id, kind, meta, editor, data);
    this.meta = meta;
    this.data = data;
  }
}

/**
 * Item Third level BuiltinScriptItem Class extend from ScriptItem
 * @param {string} id the id of the Item
 * @param {'BuiltinScriptItem' | string} kind the Item kind is type of 'BuiltinScriptItem' or string
 * @param {object | null} meta the meta data of the Item
 * @param {object | null} editor the editor of the Item
 * @param {object} data the data of the Item
 */
class BuiltinScriptItem extends ScriptItem {
  public meta: { name: string };
  public data: {
    function: string;
    arguments: Array<{
      name: string;
      type: string;
      instruction: string;
    }> | null;
    information: string | null;
    return: { type: string; instruction: string } | null;
    link: string;
  };
  constructor(
    id: string,
    kind: 'BuiltinScriptItem' | string,
    meta: { name: string },
    editor: Record<string, unknown> | null,
    data: {
      function: string;
      arguments: Array<{
        name: string;
        type: string;
        instruction: string;
      }> | null;
      information: string | null;
      return: { type: string; instruction: string } | null;
      link: string;
    }
  ) {
    super(id, kind, meta, editor, data);
    this.meta = meta;
    this.data = data;
  }
}

/* <------------------------------------ **** Item Third Level Class END **** ------------------------------------ */

/* <------------------------------------ **** Item Fourth Level Class START **** ------------------------------------ */

/* <------------------------------------ **** Item Fourth Level Class END **** ------------------------------------ */

export {
  Item,
  ScriptItem,
  OptionItem,
  HtmlItem,
  CustomisedScriptItem,
  BuiltinScriptItem,
};
