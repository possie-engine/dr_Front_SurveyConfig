import {
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
} from "../../../../Class/Content/ContentClass";

import { NewExcutionScriptItem, NewHtmlItem, NewScriptItem } from "../Item";
import { NewConditionList, NewOptionList, NewTextList } from "../List";

const NewContent = new Content("NewContentId", "Content", null, null, {
  type: "type",
});
const NewContentType2 = new Content(
  "NewContentId",
  "Content",
  {},
  {},
  { type: "type" }
);

const NewScriptContent = new ScriptContent(
  "ScriptContentId",
  "ScriptContent",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  { type: "type", script: NewScriptItem, arguments: ["arguments"] }
);
const NewScriptContentType2 = new ScriptContent(
  "ScriptContentId",
  "ScriptContent",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  { type: "type", script: null, arguments: ["arguments"] }
);

const NewTextContent = new TextContent(
  "TextContentId",
  "TextContent",
  null,
  { comment: "comment" },
  { type: "type", list: NewTextList, lan: "default" }
);
const NewTextContentType2 = new TextContent(
  "TextContentId",
  "TextContent",
  {},
  { comment: "string" },
  { type: "type", list: NewTextList, lan: "cn" }
);

const NewConditionContent = new ConditionContent(
  "ConditionContentId",
  "ConditionContent",
  null,
  null,
  { type: "type", condition: [NewConditionList] }
);
const NewConditionContentType2 = new ConditionContent(
  "ConditionContentId",
  "ConditionContent",
  {},
  {},
  { type: "type", condition: [false] }
);

const NewQuestionContent = new QuestionContent(
  "QuestionContentId",
  "QuestionContent",
  null,
  null,
  {
    type: "type",
    options: [[NewOptionList]],
    optionsDisplay: [[{ true: NewConditionContent, false: false }]],
  }
);
const NewQuestionContentType2 = new QuestionContent(
  "QuestionContentId",
  "QuestionContent",
  {},
  {},
  {
    type: "type",
    options: [[NewOptionList]],
    optionsDisplay: [[{ true: null, false: true }]],
  }
);

const NewBlockContent = new BlockContent(
  "NewBlockContentId",
  "BlockContent",
  null,
  null,
  { type: "type", list: [] }
);
const NewBlockContentType2 = new BlockContent(
  "NewBlockContentId",
  "BlockContent",
  {},
  {},
  { type: "type", list: [] }
);

const NewMarkContent = new MarkContent(
  "MarkContentId",
  "MarkContent",
  null,
  null,
  { type: "type", markers: ["markers"], logics: [NewConditionContent] }
);
const NewMarkContentType2 = new MarkContent(
  "MarkContentId",
  "MarkContent",
  {},
  {},
  { type: "type", markers: ["markers"], logics: [NewConditionContent] }
);

const NewExecutionContent = new ExecutionContent(
  "ExecutionContentId",
  "ExecutionContent",
  null,
  null,
  { type: "type", excution: NewExcutionScriptItem }
);
const NewExecutionContentType2 = new ExecutionContent(
  "ExecutionContentId",
  "ExecutionContent",
  {},
  {},
  { type: "type", excution: NewExcutionScriptItem }
);

const NewLoopContent = new LoopContent(
  "LoopContentId",
  "LoopContent",
  null,
  null,
  {
    type: "type",
    options: NewOptionList,
    logics: [NewConditionContent],
    list: [],
  }
);
const NewLoopContentType2 = new LoopContent(
  "LoopContentId",
  "LoopContent",
  {},
  {},
  {
    type: "type",
    options: NewOptionList,
    logics: [NewConditionContent],
    list: [],
  }
);

const NewQuotaContent = new QuotaContent(
  "QuotaContentId",
  "QuotaContent",
  null,
  null,
  {
    type: "type",
    markers: ["markers"],
    logics: [NewConditionContent],
    quotas: [1],
  }
);
const NewQuotaContentType2 = new QuotaContent(
  "QuotaContentId",
  "QuotaContent",
  {},
  {},
  {
    type: "type",
    markers: ["markers"],
    logics: [NewConditionContent],
    quotas: [1],
  }
);
export {
  NewContent,
  NewContentType2,
  NewScriptContent,
  NewScriptContentType2,
  NewTextContent,
  NewTextContentType2,
  NewConditionContent,
  NewConditionContentType2,
  NewQuestionContent,
  NewQuestionContentType2,
  NewBlockContent,
  NewBlockContentType2,
  NewMarkContent,
  NewMarkContentType2,
  NewExecutionContent,
  NewExecutionContentType2,
  NewLoopContent,
  NewLoopContentType2,
  NewQuotaContent,
  NewQuotaContentType2,
};
