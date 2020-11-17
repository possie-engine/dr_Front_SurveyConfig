import {
  Node,
  QuestionNode,
  BlockNode,
  ExecutionNode,
  MarkNode,
  LoopNode,
  QuotaNode,
} from "../../../../Class/Node/NodeClass";
import {
  NewBlockContent,
  NewConditionContent,
  NewExecutionContent,
  NewLoopContent,
  NewMarkContent,
  NewQuestionContent,
  NewQuotaContent,
  NewTextContent,
} from "../Content";
import { NewHtmlItem } from "../Item";

const NewNode = new Node(
  "NodeId",
  "Node",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewQuestionContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewNodeType2 = new Node(
  "NodeId",
  "Node",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewQuestionContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewQuestionNode = new QuestionNode(
  "QuestionNodeId",
  "QuestionNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    text: NewTextContent,
    instruction: NewTextContent,
    content: NewQuestionContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewQuestionNodeType2 = new QuestionNode(
  "QuestionNodeId",
  "QuestionNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    text: null,
    instruction: null,
    content: NewQuestionContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewBlockNode = new BlockNode(
  "BlockNodeId",
  "BlockNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewBlockContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewBlockNodeType2 = new BlockNode(
  "BlockNodeId",
  "BlockNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewBlockContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewExecutionNode = new ExecutionNode(
  "ExecutionNodeId",
  "ExecutionNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewExecutionContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewExecutionNodeType2 = new ExecutionNode(
  "ExecutionNodeId",
  "ExecutionNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewExecutionContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewMarkNode = new MarkNode(
  "MarkNodeId",
  "MarkNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewMarkContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewMarkNodeType2 = new MarkNode(
  "MarkNodeId",
  "MarkNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewMarkContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewLoopNode = new LoopNode(
  "LoopNodeId",
  "LoopNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewLoopContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewLoopNodeType2 = new LoopNode(
  "LoopNodeId",
  "LoopNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewLoopContent,
    condition: { true: NewConditionContent, false: false },
  }
);

const NewQuotaNode = new QuotaNode(
  "QuotaNodeId",
  "QuotaNode",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewQuotaContent,
    condition: { true: NewConditionContent, false: false },
  }
);
const NewQuotaNodeType2 = new QuotaNode(
  "QuotaNodeId",
  "QuotaNode",
  {},
  { comment: "comment", instruction: NewHtmlItem },
  {
    code: "code",
    content: NewQuotaContent,
    condition: { true: NewConditionContent, false: false },
  }
);
export {
  NewNode,
  NewNodeType2,
  NewQuestionNode,
  NewQuestionNodeType2,
  NewBlockNode,
  NewBlockNodeType2,
  NewExecutionNode,
  NewExecutionNodeType2,
  NewMarkNode,
  NewMarkNodeType2,
  NewLoopNode,
  NewLoopNodeType2,
  NewQuotaNode,
  NewQuotaNodeType2,
};
