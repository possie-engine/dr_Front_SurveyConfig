import { ScriptContent } from "../../Class";
import { HtmlItem, OptionItem } from "../../Class/Item/ItemClass";
import {
  ConditionList,
  List,
  OptionList,
  Questionnaire,
  TextList,
} from "../../Class/List/ListClass";
import {
  NewList,
  NewListType2,
  NewConditionList,
  NewQuestionnaireList,
  NewQuestionnaireListType2,
  NewTextList,
  NewOptionList,
  NewConditionListType2,
  NewOptionListType2,
} from "./classInstance";

/* <------------------------------------ **** List Class Test START **** ------------------------------------ */
describe("List class test", () => {
  it("NewList is the instance of List", () => {
    expect(NewList).toBeInstanceOf(List);
  });
  describe("NewList Id Test", () => {
    it("NewList id euqal to ListId", () => {
      expect(NewList.id).toEqual("ListId");
    });
    it("NewList id type is string", () => {
      expect(typeof NewList.id).toEqual("string");
    });
  });
  describe("NewList Kind Test", () => {
    it("NewList Kind euqal to List", () => {
      expect(NewList.kind).toEqual("List");
    });
    it("NewList Kind type is string", () => {
      expect(typeof NewList.kind).toEqual("string");
    });
  });
  describe("NewList meta Test", () => {
    it("NewList meta euqal to null", () => {
      expect(NewList.meta).toEqual(null);
    });
    it("NewListType2 meta type is object", () => {
      expect(typeof NewListType2.meta).toEqual("object");
    });
  });
  describe("NewList editor Test", () => {
    it("NewList editor euqal to null", () => {
      expect(NewList.editor.comment).toEqual("comment");
    });
  });
  describe("NewList function test", () => {
    it("NewList have validate function", () => {
      expect(NewList.validate()).toEqual(null);
    });
    it("NewList have validate function", () => {
      expect(NewList.validateList()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** List Class Test END **** ------------------------------------ */

/* <------------------------------------ **** Questionnaire Class Test START **** ------------------------------------ */
describe("QuestionnaireList class test", () => {
  it("QuestionnaireList is the instance of List", () => {
    expect(NewQuestionnaireList).toBeInstanceOf(Questionnaire);
  });
  describe("NewQuestionnaireList Id Test", () => {
    it("NewQuestionnaireList id euqal to QuestionnaireListId", () => {
      expect(NewQuestionnaireList.id).toEqual("QuestionnaireListId");
    });
    it("NewQuestionnaireList id type is string", () => {
      expect(typeof NewQuestionnaireList.id).toEqual("string");
    });
  });
  describe("NewQuestionnaireList Kind Test", () => {
    it("NewQuestionnaireList Kind euqal to QuestionnaireList", () => {
      expect(NewQuestionnaireList.kind).toEqual("QuestionnaireList");
    });
    it("NewQuestionnaireList Kind type is string", () => {
      expect(typeof NewQuestionnaireList.kind).toEqual("string");
    });
  });
  describe("NewQuestionnaireList meta Test", () => {
    it("NewQuestionnaireList meta euqal to null", () => {
      expect(NewQuestionnaireList.meta).toEqual(null);
    });
    it("NewQuestionnaireListType2 meta type is object", () => {
      expect(typeof NewQuestionnaireListType2.meta).toEqual("object");
    });
  });
  describe("NewQuestionnaireList editor Test", () => {
    it("NewQuestionnaireList editor euqal to null", () => {
      expect(NewQuestionnaireList.editor.comment).toEqual("comment");
    });
  });
  describe("NewQuestionnaireList list Test", () => {
    it("NewQuestionnaireList list euqal to []", () => {
      expect(NewQuestionnaireList.list).toEqual([]);
    });
  });
  describe("NewQuestionnaireList function test", () => {
    it("NewQuestionnaireList have validate function", () => {
      expect(NewQuestionnaireList.validate()).toEqual(null);
    });
    it("NewQuestionnaireList have validate function", () => {
      expect(NewQuestionnaireList.validateList()).toEqual(null);
    });
    it("NewQuestionnaireList have validate function", () => {
      expect(NewQuestionnaireList.validateListNodes()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** Questionnaire Class Test END **** ------------------------------------ */

/* <------------------------------------ **** TextList START **** ------------------------------------ */
describe("TextList class test", () => {
  it("NewTextList is the instance of TextList", () => {
    expect(NewTextList).toBeInstanceOf(TextList);
  });
  describe("NewTextList Id Test", () => {
    it("NewTextList id euqal to TextListId", () => {
      expect(NewTextList.id).toEqual("TextListId");
    });
    it("NewTextList id type is string", () => {
      expect(typeof NewTextList.id).toEqual("string");
    });
  });
  describe("NewTextList Kind Test", () => {
    it("NewTextList Kind euqal to TextList", () => {
      expect(NewTextList.kind).toEqual("TextList");
    });
    it("NewTextList Kind type is string", () => {
      expect(typeof NewTextList.kind).toEqual("string");
    });
  });
  describe("NewTextList meta Test", () => {
    it("NewTextList meta euqal to null", () => {
      expect(NewTextList.meta).toEqual(null);
    });
    it("NewTextList meta type is object", () => {
      expect(typeof NewTextList.meta).toEqual("object");
    });
  });
  describe("NewTextList editor Test", () => {
    it("NewTextList editor euqal to null", () => {
      expect(NewTextList.editor.comment).toEqual("comment");
    });
  });
  describe("NewTextList list Test", () => {
    it("NewTextList list[0] is the instance of HtmlItem", () => {
      expect(NewTextList.list[0]).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewTextList function test", () => {
    it("NewTextList have validate function", () => {
      expect(NewTextList.validate()).toEqual(null);
    });
    it("NewTextList have validate function", () => {
      expect(NewTextList.validateList()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** TextList END **** ------------------------------------ */

/* <------------------------------------ **** ConditionList START **** ------------------------------------ */
describe("ConditionList class test", () => {
  it("NewConditionList is the instance of ConditionList", () => {
    expect(NewConditionList).toBeInstanceOf(ConditionList);
  });
  describe("NewConditionList Id Test", () => {
    it("NewConditionList id euqal to ConditionListId", () => {
      expect(NewConditionList.id).toEqual("ConditionListId");
    });
    it("NewConditionList id type is string", () => {
      expect(typeof NewConditionList.id).toEqual("string");
    });
  });
  describe("NewConditionList Kind Test", () => {
    it("NewConditionList Kind euqal to ConditionList", () => {
      expect(NewConditionList.kind).toEqual("ConditionList");
    });
    it("NewConditionList Kind type is string", () => {
      expect(typeof NewConditionList.kind).toEqual("string");
    });
  });
  describe("NewConditionList meta Test", () => {
    it("NewConditionList meta euqal to null", () => {
      expect(NewConditionList.meta).toEqual(null);
    });
    it("NewConditionList meta type is object", () => {
      expect(typeof NewConditionList.meta).toEqual("object");
    });
  });
  describe("NewConditionList editor Test", () => {
    it("NewConditionList editor euqal to null", () => {
      expect(NewConditionList.editor.comment).toEqual("comment");
    });
  });
  describe("NewConditionList list Test", () => {
    it("NewConditionList list euqal to []", () => {
      expect(NewConditionList.list[0]).toEqual(false);
    });
  });
  describe("NewConditionList function test", () => {
    it("NewConditionList have validate function", () => {
      expect(NewConditionList.validate()).toEqual(null);
    });
    it("NewConditionList have validate function", () => {
      expect(NewConditionList.validateList()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** ConditionList END **** ------------------------------------ */

/* <------------------------------------ **** OptionList START **** ------------------------------------ */
describe("OptionList class test", () => {
  it("NewOptionList is the instance of OptionList", () => {
    expect(NewOptionList).toBeInstanceOf(OptionList);
  });
  describe("NewOptionList Id Test", () => {
    it("NewOptionList id euqal to OptionListId", () => {
      expect(NewOptionList.id).toEqual("OptionListId");
    });
    it("NewOptionList id type is string", () => {
      expect(typeof NewOptionList.id).toEqual("string");
    });
  });
  describe("NewOptionList Kind Test", () => {
    it("NewOptionList Kind euqal to OptionList", () => {
      expect(NewOptionList.kind).toEqual("OptionList");
    });
    it("NewOptionList Kind type is string", () => {
      expect(typeof NewOptionList.kind).toEqual("string");
    });
  });
  describe("NewOptionList meta Test", () => {
    it("NewOptionList meta euqal to null", () => {
      expect(NewOptionList.meta).toEqual(null);
    });
    it("NewOptionList meta type is object", () => {
      expect(typeof NewOptionList.meta).toEqual("object");
    });
    it("NewOptionList meta.link is object", () => {
      expect(typeof NewOptionListType2.meta.link).toEqual("object");
    });
    it("NewOptionList meta.link.string is object", () => {
      expect(typeof NewOptionListType2.meta.link.key).toEqual("string");
    });
  });
  describe("NewOptionList editor Test", () => {
    it("NewOptionList editor.comment euqal to null", () => {
      expect(NewOptionList.editor.comment).toEqual("comment");
    });
  });
  describe("NewOptionList list Test", () => {
    it("NewOptionList list euqal to []", () => {
      expect(NewOptionList.list[0]).toBeInstanceOf(OptionItem);
    });
  });
  describe("NewOptionList function test", () => {
    it("NewOptionList have validate function", () => {
      expect(NewOptionList.validate()).toEqual(null);
    });
    it("NewOptionList have validate function", () => {
      expect(NewOptionList.validateList()).toEqual(null);
    });
  });
});
/* <------------------------------------ **** OptionList END **** ------------------------------------ */
