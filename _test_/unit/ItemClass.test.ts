/**
 * @file item class test file
 * @date 2020-11-13
 * @author Frank
 * @lastModify Frank 2020-11-13
 */
import { TextContent } from '../../Class/Content/ContentClass';
import {
  BuiltinConditionScriptItem,
  BuiltinExecutionScriptItem,
  BuiltinTextScriptItem,
  ConditionScriptItem,
  ExecutionScriptItem,
  HtmlItem,
  Item,
  OptionItem,
  ScriptItem,
  TextScriptItem,
} from '../../Class/Item/ItemClass';
import {
  NewItem,
  NewItemType2,
  NewHtmlItem,
  NewHtmlItemType2,
  NewScriptItem,
  NewScriptItemType2,
  NewOptionItem,
  NewTextScriptItem,
  NewTextScriptItemType2,
  NewExecutionScriptItem,
  NewExecutionScriptItemType2,
  NewConditionScriptItem,
  NewConditionScriptItemType2,
  NewBuiltinConditionScriptItem,
  NewBuiltinConditionScriptItemType2,
  NewBuiltinExecutionScriptItem,
  NewBuiltinExecutionScriptItemType2,
  NewBuiltinTextScriptItem,
  NewBuiltinTextScriptItemType2,
} from './classInstance';
/* <------------------------------------ **** Item Class Test START **** ------------------------------------ */

describe('Item class test', () => {
  it('NewItem is the instance of Item', () => {
    expect(NewItem).toBeInstanceOf(Item);
  });
  describe('NewItem Id Test', () => {
    it('NewItem id euqal to itemId', () => {
      expect(NewItem.id).toEqual('itemId');
    });
    it('NewItem id type is string', () => {
      expect(typeof NewItem.id).toEqual('string');
    });
  });
  describe('NewItem Kind Test', () => {
    it('NewItem Kind euqal to Item', () => {
      expect(NewItem.kind).toEqual('Item');
    });
    it('NewItem Kind type is string', () => {
      expect(typeof NewItem.kind).toEqual('string');
    });
  });
  describe('NewItem meta Test', () => {
    it('NewItem meta euqal to null', () => {
      expect(NewItem.meta).toEqual(null);
    });
    it('NewItemType2 meta type is object', () => {
      expect(typeof NewItemType2.meta).toEqual('object');
    });
  });
  describe('NewItem editor Test', () => {
    it('NewItem editor euqal to null', () => {
      expect(NewItem.editor).toEqual(null);
    });
    it('NewItemType2 editor type is object', () => {
      expect(typeof NewItemType2.editor).toEqual('object');
    });
  });
  describe('NewItem data Test', () => {
    it('NewItem data euqal to null', () => {
      expect(NewItem.data).toEqual(null);
    });
    it('NewItemType2 data type is object', () => {
      expect(typeof NewItemType2.data).toEqual('object');
    });
  });
  describe('NewItem function test', () => {
    it('NewItem have validate function', () => {
      expect(NewItem.validate()).toEqual(null);
    });
    it('NewItem have validate function', () => {
      expect(NewItem.validateData()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item Class Test END **** ------------------------------------ */

/* <------------------------------------ **** Item ScriptItem Test START **** ------------------------------------ */

describe('scriptItem class test', () => {
  it('NewScriptItem is the instance of ScriptItem', () => {
    expect(NewScriptItem).toBeInstanceOf(ScriptItem);
  });
  describe('NewscriptItem id Test', () => {
    it('NewscriptItem id equal to scriptItemId', () => {
      expect(NewScriptItem.id).toEqual('scriptItemId');
    });
    it('NewscriptItem id type is string', () => {
      expect(typeof NewScriptItem.id).toEqual('string');
    });
  });
  describe('NewscriptItem Kind Test', () => {
    it('NewscriptItem kind equal to ScriptItem', () => {
      expect(NewScriptItem.kind).toEqual('ScriptItem');
    });
    it('NewscriptItem kind type is string', () => {
      expect(typeof NewScriptItem.id).toEqual('string');
    });
  });
  describe('NewscriptItem editor Test', () => {
    it('NewscriptItem editor equal to ScriptItem', () => {
      expect(NewScriptItem.editor).toBeNull();
    });
    it('NewscriptItemType2 editortype is object', () => {
      expect(typeof NewScriptItemType2.editor).toEqual('object');
    });
  });
  describe('NewscriptItem data Test', () => {
    it('NewscriptItem data equal to {function:string}', () => {
      expect(NewScriptItem.data).toEqual({ function: 'function' });
    });
  });
  describe('NewscriptItem function Test', () => {
    it('NewscriptItem have validate function ', () => {
      expect(NewScriptItem.validate()).toEqual(null);
    });
    it('NewscriptItem have validateData function ', () => {
      expect(NewScriptItem.validateData()).toEqual(null);
    });
    it('NewscriptItem have validateDataFunction function ', () => {
      expect(NewScriptItem.validateDataFunction()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item ScriptItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item OptionItem Test START **** ------------------------------------ */
describe('OptionItem Class Test', () => {
  it('NewOptionItem is the instance of OptionItem', () => {
    expect(NewOptionItem).toBeInstanceOf(OptionItem);
  });
  describe('NewOptionItem id Test', () => {
    it('NewOptionItem id is OptionItemId', () => {
      expect(NewOptionItem.id).toEqual('OptionItemId');
    });
    it('NewOptionItemId type is string', () => {
      expect(typeof NewOptionItem.id).toEqual('string');
    });
  });
  describe('NewOptionItem kind Test', () => {
    it('NewOptionItem kind is OptionItemId', () => {
      expect(NewOptionItem.kind).toEqual('OptionItem');
    });
    it('NewOptionItemId kind is string', () => {
      expect(typeof NewOptionItem.kind).toEqual('string');
    });
  });
  describe('NewOptionItem meta Test', () => {
    it('NewOptionItem meta is null', () => {
      expect(NewOptionItem.meta).toBeNull();
    });
  });
  describe('NewOptionItem editor Test', () => {
    it('NewOptionItem editor.comment is comment', () => {
      expect(NewOptionItem.editor.comment).toEqual('comment');
    });
    it('NewOptionItem editor.comment is string', () => {
      expect(typeof NewOptionItem.editor.comment).toEqual('string');
    });
    it('NewOptionItem editor.instruction is instance of HtmlItem', () => {
      expect(NewOptionItem.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe('NewOptionItem data Test', () => {
    it('NewOptionItem data.code is comment', () => {
      expect(NewOptionItem.data.code).toEqual('code');
    });
    it('NewOptionItem data.code is string', () => {
      expect(typeof NewOptionItem.data.code).toEqual('string');
    });
  });
  describe('NewOptionItem functin test', () => {
    it('NewOptionItem have validate function', () => {
      expect(NewOptionItem.validate()).toBeNull();
    });
    it('NewOptionItem have validateData function', () => {
      expect(NewOptionItem.validateData()).toBeNull();
    });
    it('NewOptionItem have validateDataCode function', () => {
      expect(NewOptionItem.validateDataCode()).toBeNull();
    });
    it('NewOptionItem have validateDataText function', () => {
      expect(NewOptionItem.validateDataText()).toBeNull();
    });
  });
});
/* <------------------------------------ **** Item OptionItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item HtmlItem Test START **** ------------------------------------ */

describe('HtmlItem class test', () => {
  it('NewHtmlItem is the instance of HtmlIte', () => {
    expect(NewHtmlItem).toBeInstanceOf(HtmlItem);
  });
  describe('NewHtmlItem id test', () => {
    it('NewHtmlItem id is HtmlItemId', () => {
      expect(NewHtmlItem.id).toEqual('HtmlItemId');
    });
    it('NewHtmlItem id is string', () => {
      expect(typeof NewHtmlItem.id).toEqual('string');
    });
  });
  describe('NewHtmlItem kind test', () => {
    it('NewHtmlItem kind is HtmlItem', () => {
      expect(NewHtmlItem.kind).toEqual('HtmlItem');
    });
    it('NewHtmlItem kind is string', () => {
      expect(typeof NewHtmlItem.kind).toEqual('string');
    });
  });
  describe('NewHtmlItem Meta test', () => {
    it('NewHtmlItem Meta is {}', () => {
      expect(NewHtmlItem.meta).toEqual({});
    });
    it('NewHtmlItemType2 meta is null', () => {
      expect(NewHtmlItemType2.meta).toBeNull();
    });
  });
  describe('NewHtmlItem editor test', () => {
    it('NewHtmlItem editor is {}', () => {
      expect(NewHtmlItem.editor).toEqual({ comment: 'comment' });
    });
    it('NewHtmlItemType2 meta is null', () => {
      expect(NewHtmlItemType2.editor).toBeNull();
    });
  });
  describe('NewHtmlItem data test', () => {
    it('NewHtmlItem data is {}', () => {
      expect(NewHtmlItem.data).toEqual({ html: 'html' });
    });
    it('NewHtmlItemType2 data is null', () => {
      expect(NewHtmlItemType2.data).toBeNull();
    });
  });
  describe('NewHtmlItem function test', () => {
    it('NewHtmlItem have validate function', () => {
      expect(NewHtmlItem.validate()).toEqual(null);
    });
    it('NewHtmlItem have validateData function', () => {
      expect(NewHtmlItem.validateData()).toEqual(null);
    });
    it('NewHtmlItem have validateHtml function', () => {
      expect(NewHtmlItem.validateHtml()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item HtmlItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item TextScriptItem Test  START **** ------------------------------------ */
describe('TextScriptItem class test', () => {
  it('NewTextScriptItem is an instance of TextScriptItem', () => {
    expect(NewTextScriptItem).toBeInstanceOf(TextScriptItem);
  });
  describe('NewTextScriptItem Id test', () => {
    it('NewTestScriptItem id is TextScriptItemId', () => {
      expect(NewTextScriptItem.id).toEqual('TextScriptItemId');
    });
    it('NewTestScriptItem id is string', () => {
      expect(typeof NewTextScriptItem.id).toEqual('string');
    });
  });
  describe('NewTextScriptItem kind test', () => {
    it('NewTestScriptItem kind is TextScriptItem', () => {
      expect(NewTextScriptItem.kind).toEqual('TextScriptItem');
    });
    it('NewTestScriptItem kind is string', () => {
      expect(typeof NewTextScriptItem.kind).toEqual('string');
    });
  });
  describe('NewTextScriptItem meta test', () => {
    it('NewTestScriptItem meta is name', () => {
      expect(NewTextScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewTextScriptItem editor test', () => {
    it('NewTestScriptItem editor is null', () => {
      expect(NewTextScriptItem.editor).toEqual(null);
    });
    it('NewTestScriptItemType2 editor is {', () => {
      expect(NewTextScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewTextScriptItem data test', () => {
    it('NewTestScriptItem data.function is function', () => {
      expect(NewTextScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewTextScriptItem function test', () => {
    it('NewTextScriptItem have validate function', () => {
      expect(NewTextScriptItem.validate()).toEqual(null);
    });
    it('NewTextScriptItem have validateData function', () => {
      expect(NewTextScriptItem.validateData()).toEqual(null);
    });
    it('NewTextScriptItem have validateHtml function', () => {
      expect(NewTextScriptItem.validateDataFunction()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item TextScriptItem Test  END **** ------------------------------------ */

/* <------------------------------------ **** Item ExecutionScriptItem Test START **** ------------------------------------ */
describe('ExecutionScriptItem class test', () => {
  it('NewExecutionScriptItem is an instance of ExecutionScriptItem', () => {
    expect(NewExecutionScriptItem).toBeInstanceOf(ExecutionScriptItem);
  });
  describe('NewExecutionScriptItem Id test', () => {
    it('NewExecutionScriptItem id is NewExecutionScriptItemId', () => {
      expect(NewExecutionScriptItem.id).toEqual('NewExecutionScriptItemId');
    });
    it('NewExecutionScriptItem id is string', () => {
      expect(typeof NewExecutionScriptItem.id).toEqual('string');
    });
  });
  describe('NewExecutionScriptItem kind test', () => {
    it('NewExecutionScriptItem kind is ExecutionScriptItem', () => {
      expect(NewExecutionScriptItem.kind).toEqual('ExecutionScriptItem');
    });
    it('NewExecutionScriptItem kind is string', () => {
      expect(typeof NewExecutionScriptItem.kind).toEqual('string');
    });
  });
  describe('NewExecutionScriptItem meta test', () => {
    it('NewExecutionScriptItem meta is name', () => {
      expect(NewExecutionScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewExecutionScriptItem editor test', () => {
    it('NewExecutionScriptItem editor is null', () => {
      expect(NewExecutionScriptItem.editor).toEqual(null);
    });
    it('NewExecutionScriptItem editor is {}', () => {
      expect(NewExecutionScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewExecutionScriptItem data test', () => {
    it('NewExecutionScriptItem data.function is null', () => {
      expect(NewExecutionScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewExecutionScriptItem function test', () => {
    it('NewExecutionScriptItem have validate function', () => {
      expect(NewExecutionScriptItem.validate()).toEqual(null);
    });
    it('NewExecutionScriptItem have validateData function', () => {
      expect(NewExecutionScriptItem.validateData()).toEqual(null);
    });
    it('NewExecutionScriptItem have validateHtml function', () => {
      expect(NewExecutionScriptItem.validateDataFunction()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item ExecutionScriptItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item ConditionScriptItem START **** ------------------------------------ */
describe('ConditionScriptItem class test', () => {
  it('NewConditionScriptItem is an instance of ConditionScriptItem', () => {
    expect(NewConditionScriptItem).toBeInstanceOf(ConditionScriptItem);
  });
  describe('NewConditionScriptItem Id test', () => {
    it('NewConditionScriptItem id is ConditionScriptItemId', () => {
      expect(NewConditionScriptItem.id).toEqual('ConditionScriptItemId');
    });
    it('NewConditionScriptItem id is string', () => {
      expect(typeof NewConditionScriptItem.id).toEqual('string');
    });
  });
  describe('NewConditionScriptItem kind test', () => {
    it('NewConditionScriptItem kind is ConditionScriptItem', () => {
      expect(NewConditionScriptItem.kind).toEqual('ConditionScriptItem');
    });
    it('NewConditionScriptItem kind is string', () => {
      expect(typeof NewConditionScriptItem.kind).toEqual('string');
    });
  });
  describe('NewConditionScriptItem meta test', () => {
    it('NewConditionScriptItem meta is name', () => {
      expect(NewConditionScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewConditionScriptItem editor test', () => {
    it('NewConditionScriptItem editor is null', () => {
      expect(NewConditionScriptItem.editor).toEqual(null);
    });
    it('NewConditionScriptItem editor is {}', () => {
      expect(NewConditionScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewConditionScriptItem data test', () => {
    it('NewConditionScriptItem data.function is null', () => {
      expect(NewConditionScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewConditionScriptItem function test', () => {
    it('NewConditionScriptItem have validate function', () => {
      expect(NewConditionScriptItem.validate()).toEqual(null);
    });
    it('NewConditionScriptItem have validateData function', () => {
      expect(NewConditionScriptItem.validateData()).toEqual(null);
    });
    it('NewConditionScriptItem have validateHtml function', () => {
      expect(NewConditionScriptItem.validateDataFunction()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item ConditionScriptItem END **** ------------------------------------ */

/* <------------------------------------ **** Item BuiltinTextScriptItem Test START **** ------------------------------------ */
describe('BuiltinTextScriptItem class test', () => {
  it('NewBuiltinTextScriptItem is an instance of BuiltinTextScriptItem', () => {
    expect(NewBuiltinTextScriptItem).toBeInstanceOf(BuiltinTextScriptItem);
  });
  describe('NewBuiltinTextScriptItem Id test', () => {
    it('NewBuiltinTextScriptItem id is BuiltinTextScriptItemId', () => {
      expect(NewBuiltinTextScriptItem.id).toEqual('BuiltinTextScriptItemId');
    });
    it('NewBuiltinTextScriptItem id is string', () => {
      expect(typeof NewBuiltinTextScriptItem.id).toEqual('string');
    });
  });
  describe('NewBuiltinTextScriptItem kind test', () => {
    it('NewBuiltinTextScriptItem kind is BuiltinTextScriptItem', () => {
      expect(NewBuiltinTextScriptItem.kind).toEqual('BuiltinTextScriptItem');
    });
    it('NewBuiltinTextScriptItem kind is string', () => {
      expect(typeof NewBuiltinTextScriptItem.kind).toEqual('string');
    });
  });
  describe('NewBuiltinTextScriptItem meta test', () => {
    it('NewBuiltinTextScriptItem meta is name', () => {
      expect(NewBuiltinTextScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewBuiltinTextScriptItem editor test', () => {
    it('NewBuiltinTextScriptItem editor is null', () => {
      expect(NewBuiltinTextScriptItem.editor).toEqual(null);
    });
    it('NewBuiltinTextScriptItem editor is {', () => {
      expect(NewBuiltinTextScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewBuiltinTextScriptItem data test', () => {
    it('NewBuiltinTextScriptItem data.function is function', () => {
      expect(NewBuiltinTextScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewBuiltinTextScriptItem function test', () => {
    it('NewBuiltinTextScriptItem have validate function', () => {
      expect(NewBuiltinTextScriptItem.validate()).toEqual(null);
    });
    it('NewBuiltinTextScriptItem have validateData function', () => {
      expect(NewBuiltinTextScriptItem.validateData()).toEqual(null);
    });
    it('NewBuiltinTextScriptItem have validateHtml function', () => {
      expect(NewBuiltinTextScriptItem.validateDataFunction()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Item BuiltinTextScriptItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item BuiltinExecutionScriptItem Test START **** ------------------------------------ */
describe('BuiltinExcutionScripotItem class test', () => {
  it('NewBuiltinExcutionScripotItem is an instance of BuiltinExcutionScripotItem', () => {
    expect(NewBuiltinExecutionScriptItem).toBeInstanceOf(
      BuiltinExecutionScriptItem
    );
  });
  describe('NewBuiltinExecutionScriptItem Id test', () => {
    it('NewBuiltinExecutionScriptItem id is BuiltinExecutionScriptItemId', () => {
      expect(NewBuiltinExecutionScriptItem.id).toEqual(
        'BuiltinExecutionScriptItemId'
      );
    });
    it('NewBuiltinExecutionScriptItem id is string', () => {
      expect(typeof NewBuiltinExecutionScriptItem.id).toEqual('string');
    });
  });
  describe('NewBuiltinExecutionScriptItem kind test', () => {
    it('NewBuiltinExecutionScriptItem kind is BuiltinExecutionScriptItem', () => {
      expect(NewBuiltinExecutionScriptItem.kind).toEqual(
        'BuiltinExecutionScriptItem'
      );
    });
    it('NewBuiltinExecutionScriptItem kind is string', () => {
      expect(typeof NewBuiltinExecutionScriptItem.kind).toEqual('string');
    });
  });
  describe('NewBuiltinExecutionScriptItem meta test', () => {
    it('NewBuiltinExecutionScriptItem meta is name', () => {
      expect(NewBuiltinExecutionScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewBuiltinExecutionScriptItem editor test', () => {
    it('NewBuiltinExecutionScriptItem editor is null', () => {
      expect(NewBuiltinExecutionScriptItem.editor).toEqual(null);
    });
    it('NewBuiltinExecutionScriptItem editor is {}', () => {
      expect(NewBuiltinExecutionScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewBuiltinExecutionScriptItem data test', () => {
    it('NewBuiltinExecutionScriptItem data.function is null', () => {
      expect(NewBuiltinExecutionScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewBuiltinExecutionScriptItem function test', () => {
    it('NewBuiltinExecutionScriptItem have validate function', () => {
      expect(NewBuiltinExecutionScriptItem.validate()).toEqual(null);
    });
    it('NewBuiltinExecutionScriptItem have validateData function', () => {
      expect(NewBuiltinExecutionScriptItem.validateData()).toEqual(null);
    });
    it('NewBuiltinExecutionScriptItem have validateHtml function', () => {
      expect(NewBuiltinExecutionScriptItem.validateDataFunction()).toEqual(
        null
      );
    });
  });
});
/* <------------------------------------ **** Item BuiltinExecutionScriptItem Test END **** ------------------------------------ */

/* <------------------------------------ **** Item BuiltinConditionScriptItem START **** ------------------------------------ */
describe('BuiltinConditionScriptItem class test', () => {
  it('NewBuiltinConditionScriptItem is an instance of BuiltinConditionScriptItem', () => {
    expect(NewBuiltinConditionScriptItem).toBeInstanceOf(
      BuiltinConditionScriptItem
    );
  });
  describe('NewBuiltinConditionScriptItem Id test', () => {
    it('NewBuiltinConditionScriptItem id is BuiltinConditionScriptItemId', () => {
      expect(NewBuiltinConditionScriptItem.id).toEqual(
        'BuiltinConditionScriptItemId'
      );
    });
    it('NewBuiltinConditionScriptItem id is string', () => {
      expect(typeof NewBuiltinConditionScriptItem.id).toEqual('string');
    });
  });
  describe('NewBuiltinConditionScriptItem kind test', () => {
    it('NewBuiltinConditionScriptItem kind is BuiltinConditionScriptItem', () => {
      expect(NewBuiltinConditionScriptItem.kind).toEqual(
        'BuiltinConditionScriptItem'
      );
    });
    it('NewBuiltinConditionScriptItem kind is string', () => {
      expect(typeof NewBuiltinConditionScriptItem.kind).toEqual('string');
    });
  });
  describe('NewBuiltinConditionScriptItem meta test', () => {
    it('NewBuiltinConditionScriptItem meta is name', () => {
      expect(NewBuiltinConditionScriptItem.meta.name).toEqual('name');
    });
  });
  describe('NewBuiltinConditionScriptItem editor test', () => {
    it('NewBuiltinConditionScriptItem editor is null', () => {
      expect(NewBuiltinConditionScriptItem.editor).toEqual(null);
    });
    it('NewBuiltinConditionScriptItem editor is {}', () => {
      expect(NewBuiltinConditionScriptItemType2.editor).toEqual({});
    });
  });
  describe('NewBuiltinConditionScriptItem data test', () => {
    it('NewBuiltinConditionScriptItem data.function is null', () => {
      expect(NewBuiltinConditionScriptItem.data.function).toEqual('function');
    });
  });
  describe('NewBuiltinConditionScriptItem function test', () => {
    it('NewBuiltinConditionScriptItem have validate function', () => {
      expect(NewBuiltinConditionScriptItem.validate()).toEqual(null);
    });
    it('NewBuiltinConditionScriptItem have validateData function', () => {
      expect(NewBuiltinConditionScriptItem.validateData()).toEqual(null);
    });
    it('NewBuiltinConditionScriptItem have validateHtml function', () => {
      expect(NewBuiltinConditionScriptItem.validateDataFunction()).toEqual(
        null
      );
    });
  });
});
/* <------------------------------------ **** Item BuiltinConditionScriptItem END **** ------------------------------------ */
