import {
  List,
  Questionnaire,
  TextList,
  ConditionList,
  OptionList,
} from "../../../../Class/List/ListClass";

import { NewConditionContent, NewScriptContent } from "../Content";
import { NewHtmlItem, NewOptionItem, NewScriptItem } from "../Item";

const NewConditionList = new ConditionList(
  "ConditionListId",
  "ConditionList",
  null,
  { comment: "comment" },
  [false]
);
const NewConditionListType2 = new ConditionList(
  "ConditionListId",
  "ConditionList",
  null,
  { comment: "comment" },
  [NewScriptContent]
);
const NewConditionListType3 = new ConditionList(
  "ConditionListId",
  "ConditionList",
  null,
  { comment: "comment" },
  [NewConditionContent]
);

const NewList = new List("ListId", "List", null, { comment: "comment" }, []);
const NewListType2 = new List("ListId", "List", {}, { comment: "comment" }, []);

const NewOptionList = new OptionList(
  "OptionListId",
  "OptionList",
  null,
  { comment: "comment" },
  [NewOptionItem]
);
const NewOptionListType2 = new OptionList(
  "OptionListId",
  "OptionList",
  {
    link: {
      key: "string",
    },
  },
  { comment: "comment" },
  [NewOptionItem]
);

const NewQuestionnaireList = new Questionnaire(
  "QuestionnaireListId",
  "QuestionnaireList",
  null,
  { comment: "comment" },
  []
);
const NewQuestionnaireListType2 = new Questionnaire(
  "QuestionnaireListId",
  "QuestionnaireList",
  {
    lan: ["English"],
    defaultLan: "English",
    scripts: { first: { name: "123", data: NewScriptItem } },
    optionLists: {
      list: { name: "some", data: NewOptionList },
    },
  },
  { comment: "comment" },
  []
);

const NewTextList = new TextList(
  "TextListId",
  "TextList",
  null,
  { comment: "comment" },
  [NewHtmlItem]
);
const NewTextListType2 = new TextList(
  "TextListId",
  "TextList",
  {},
  { comment: "comment" },
  [NewScriptContent]
);

export {
  NewList,
  NewListType2,
  NewConditionList,
  NewConditionListType2,
  NewQuestionnaireList,
  NewQuestionnaireListType2,
  NewTextList,
  NewTextListType2,
  NewOptionList,
  NewOptionListType2,
  NewConditionListType3,
};
