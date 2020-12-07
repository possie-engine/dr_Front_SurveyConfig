import {
  BlockContent,
  ConditionContent,
  ExecutionContent,
  LoopContent,
  MarkContent,
  QuestionContent,
  QuotaContent,
  TextContent,
} from "../../Class/Content/ContentClass";
import { HtmlItem } from "../../Class/Item/ItemClass";
import {
  Node,
  QuestionNode,
  BlockNode,
  ExecutionNode,
  MarkNode,
  LoopNode,
  QuotaNode,
} from "../../Class/Node/NodeClass";
import {
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
  NewConditionContent,
} from "./classInstance";
/* <------------------------------------ **** Node Class Test START **** ------------------------------------ */
describe("Node Class Test", () => {
  it("NewNode is the instance of Node Class", () => {
    expect(NewNode).toBeInstanceOf(Node);
  });
  describe("NewNode id test", () => {
    it("NewNode id is euqal to NewNodeId", () => {
      expect(NewNode.id).toEqual("NodeId");
    });
    it("NewNode id type is string", () => {
      expect(typeof NewNode.id).toEqual("string");
    });
  });
  describe("NewNode kind test", () => {
    it("NewNode kind is euqal to Node", () => {
      expect(NewNode.kind).toEqual("Node");
    });
    it("NewNode kind type is string", () => {
      expect(typeof NewNode.kind).toEqual("string");
    });
  });
  describe("NewNode meta test", () => {
    it("NewNode meta is null", () => {
      expect(NewNode.meta).toBeNull();
    });
    it("NewNode meta is object ", () => {
      expect(NewNodeType2.meta).toEqual({});
    });
  });
  describe("NewNode editor test", () => {
    it("NewNode eidtor have comment propty", () => {
      expect(NewNode.editor.comment).toEqual("comment");
    });
    it("NewNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewNode Structure test", () => {
    it("NewNode have code propty and code is string", () => {
      expect(NewNode.structure.code).toEqual("code");
    });
    it("NewNode have content propty and content is instance of QuestionContent", () => {
      expect(NewNode.structure.content).toBeInstanceOf(QuestionContent);
    });
    it("NewNode have code condition and it is object", () => {
      expect(NewNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewNode function test", () => {
    it("NewNode have validate function", () => {
      expect(NewNode.validate()).toBeNull();
    });
    it("NewNode have validateCode function", () => {
      expect(NewNode.validateStructureCode()).toBeNull();
    });
    it("NewNode have validateStructure function", () => {
      expect(NewNode.validateStructure()).toBeNull();
    });
  });
});
/* <------------------------------------ **** Node Class Test END **** ------------------------------------ */

/* <------------------------------------ **** QuestionNode Class Test START **** ------------------------------------ */
describe("QuestionNodeode Class Test", () => {
  it("NewQuestionNode is the instance of QuestionNode Class", () => {
    expect(NewQuestionNode).toBeInstanceOf(QuestionNode);
  });
  describe("NewQuestionNode id test", () => {
    it("NewQuestionNode id is euqal to NewQuestionNodeId", () => {
      expect(NewQuestionNode.id).toEqual("QuestionNodeId");
    });
    it("NewQuestionNode id type is string", () => {
      expect(typeof NewQuestionNode.id).toEqual("string");
    });
  });
  describe("NewQuestionNode kind test", () => {
    it("NewQuestionNode kind is euqal to Node", () => {
      expect(NewQuestionNode.kind).toEqual("QuestionNode");
    });
  });
  describe("NewQuestionNode meta test", () => {
    it("NewQuestionNode meta is null", () => {
      expect(NewQuestionNode.meta).toBeNull();
    });
    it("NewQuestionNode meta is object ", () => {
      expect(NewQuestionNodeType2.meta).toEqual({});
    });
  });
  describe("NewQuestionNode editor test", () => {
    it("NewQuestionNode eidtor have comment propty", () => {
      expect(NewQuestionNode.editor.comment).toEqual("comment");
    });
    it("NewQuestionNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewQuestionNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewQuestionNode Structure test", () => {
    it("NewQuestionNode have code propty and code is string", () => {
      expect(NewQuestionNode.structure.code).toEqual("code");
    });
    it("NewQuestionNode have content propty and content is instance of QuestionContent", () => {
      expect(NewQuestionNode.structure.content).toBeInstanceOf(QuestionContent);
    });
    it("NewQuestionNode have code condition and it is object", () => {
      expect(NewQuestionNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
    it("NewQuestionNode have text propty and content is instance of TextContet", () => {
      expect(NewQuestionNode.structure.text.default).toBeInstanceOf(
        TextContent
      );
    });
    it("NewQuestionNode have instruction propty and content is instance of TextContet", () => {
      expect(NewQuestionNode.structure.instruction.default).toBeInstanceOf(
        TextContent
      );
    });
  });
  describe("NewQuestionNode function test", () => {
    it("NewQuestionNode have validate function", () => {
      expect(NewQuestionNode.validate()).toBeNull();
    });
    it("NewQuestionNode have validateCode function", () => {
      expect(NewQuestionNode.validateStructureCode()).toBeNull();
    });
    it("NewQuestionNode have validateStructure function", () => {
      expect(NewQuestionNode.validateStructure()).toBeNull();
    });
    it("NewQuestionNode have validateStructureCondition function", () => {
      expect(NewQuestionNode.validateStructureCondition()).toBeNull();
    });
    it("NewQuestionNode have validateStructureContent function", () => {
      expect(NewQuestionNode.validateStructureContent()).toBeNull();
    });
    it("NewQuestionNode have validateStructureInstruction function", () => {
      expect(NewQuestionNode.validateStructureInstruction()).toBeNull();
    });
    it("NewQuestionNode have validateStructureText function", () => {
      expect(NewQuestionNode.validateStructureText()).toBeNull();
    });
  });
});
/* <------------------------------------ **** QuestionNode Class Test END **** ------------------------------------ */

/* <------------------------------------ **** BlockNode Class Test START **** ------------------------------------ */
describe("BlockNode Class Test", () => {
  it("NewBlockNode is the instance of BlockNode Class", () => {
    expect(NewBlockNode).toBeInstanceOf(BlockNode);
  });
  describe("NewBlockNode id test", () => {
    it("NewBlockNode id is euqal to BlockNodeId", () => {
      expect(NewBlockNode.id).toEqual("BlockNodeId");
    });
    it("NewBlockNode id type is string", () => {
      expect(typeof NewBlockNode.id).toEqual("string");
    });
  });
  describe("NewBlockNode kind test", () => {
    it("NewBlockNode kind is euqal to Node", () => {
      expect(NewBlockNode.kind).toEqual("BlockNode");
    });
  });
  describe("NewBlockNode meta test", () => {
    it("NewBlockNode meta is null", () => {
      expect(NewBlockNode.meta).toBeNull();
    });
    it("NewBlockNode meta is object ", () => {
      expect(NewBlockNodeType2.meta).toEqual({});
    });
  });
  describe("NewBlockNode editor test", () => {
    it("NewBlockNode eidtor have comment propty", () => {
      expect(NewBlockNode.editor.comment).toEqual("comment");
    });
    it("NewBlockNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewBlockNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewBlockNode Structure test", () => {
    it("NewBlockNode have code propty and code is string", () => {
      expect(NewBlockNode.structure.code).toEqual("code");
    });
    it("NewBlockNode have content propty and content is instance of QuestionContent", () => {
      expect(NewBlockNode.structure.content).toBeInstanceOf(BlockContent);
    });
    it("NewBlockNode have code condition and it is object", () => {
      expect(NewBlockNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewBlockNode function test", () => {
    it("NewBlockNode have validate function", () => {
      expect(NewBlockNode.validate()).toBeNull();
    });
    it("NewBlockNode have validateCode function", () => {
      expect(NewBlockNode.validateStructureCode()).toBeNull();
    });
    it("NewBlockNode have validateStructure function", () => {
      expect(NewBlockNode.validateStructure()).toBeNull();
    });
    it("NewBlockNode have validateStructureContent function", () => {
      expect(NewBlockNode.validateStructureContent()).toBeNull();
    });
    it("NewBlockNode have validateStructureCondition function", () => {
      expect(NewBlockNode.validateStructureCondition()).toBeNull();
    });
  });
});
/* <------------------------------------ **** BlockNode Class Test END **** ------------------------------------ */

/* <------------------------------------ **** ExecutionNode Class START **** ------------------------------------ */
describe("ExecutionNode Class Test", () => {
  it("NewExecutionNode is the instance of ExecutionNode Class", () => {
    expect(NewExecutionNode).toBeInstanceOf(ExecutionNode);
  });
  describe("NewExecutionNode id test", () => {
    it("NewExecutionNode id is euqal to ExecutionNodeId", () => {
      expect(NewExecutionNode.id).toEqual("ExecutionNodeId");
    });
    it("NewExecutionNode id type is string", () => {
      expect(typeof NewExecutionNode.id).toEqual("string");
    });
  });
  describe("NewExecutionNode kind test", () => {
    it("NewExecutionNode kind is euqal to Node", () => {
      expect(NewExecutionNode.kind).toEqual("ExecutionNode");
    });
  });
  describe("NewExecutionNode meta test", () => {
    it("NewExecutionNode meta is null", () => {
      expect(NewExecutionNode.meta).toBeNull();
    });
    it("NewExecutionNode meta is object ", () => {
      expect(NewExecutionNodeType2.meta).toEqual({});
    });
  });
  describe("NewExecutionNode editor test", () => {
    it("NewExecutionNode eidtor have comment propty", () => {
      expect(NewExecutionNode.editor.comment).toEqual("comment");
    });
    it("NewExecutionNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewExecutionNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewExecutionNode Structure test", () => {
    it("NewExecutionNode have code propty and code is string", () => {
      expect(NewExecutionNode.structure.code).toEqual("code");
    });
    it("NewExecutionNode have content propty and content is instance of ExecutionContent", () => {
      expect(NewExecutionNode.structure.content).toBeInstanceOf(
        ExecutionContent
      );
    });
    it("NewExecutionNode have code condition and it is object", () => {
      expect(NewExecutionNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewExecutionNode function test", () => {
    it("NewExecutionNode have validate function", () => {
      expect(NewExecutionNode.validate()).toBeNull();
    });
    it("NewExecutionNode have validateCode function", () => {
      expect(NewExecutionNode.validateStructureCode()).toBeNull();
    });
    it("NewExecutionNode have validateStructure function", () => {
      expect(NewExecutionNode.validateStructure()).toBeNull();
    });
    it("NewExecutionNode have validateStructureContent function", () => {
      expect(NewExecutionNode.validateStructureContent()).toBeNull();
    });
    it("NewExecutionNode have validateStructureCondition function", () => {
      expect(NewExecutionNode.validateStructureCondition()).toBeNull();
    });
  });
});
/* <------------------------------------ **** ExecutionNode Class END **** ------------------------------------ */

/* <------------------------------------ **** MarkNode Class Node START **** ------------------------------------ */
describe("MarkNode Class Test", () => {
  it("NewMarkNode is the instance of MarkNode Class", () => {
    expect(NewMarkNode).toBeInstanceOf(MarkNode);
  });
  describe("NewMarkNode id test", () => {
    it("NewMarkNode id is euqal to MarkNodeId", () => {
      expect(NewMarkNode.id).toEqual("MarkNodeId");
    });
    it("NewMarkNode id type is string", () => {
      expect(typeof NewMarkNode.id).toEqual("string");
    });
  });
  describe("NewMarkNode kind test", () => {
    it("NewMarkNode kind is euqal to Node", () => {
      expect(NewMarkNode.kind).toEqual("MarkNode");
    });
  });
  describe("NewMarkNode meta test", () => {
    it("NewMarkNode meta is null", () => {
      expect(NewMarkNode.meta).toBeNull();
    });
    it("NewMarkNode meta is object ", () => {
      expect(NewMarkNodeType2.meta).toEqual({});
    });
  });
  describe("NewMarkNode editor test", () => {
    it("NewMarkNode eidtor have comment propty", () => {
      expect(NewMarkNode.editor.comment).toEqual("comment");
    });
    it("NewMarkNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewMarkNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewMarkNode Structure test", () => {
    it("NewMarkNode have code propty and code is string", () => {
      expect(NewMarkNode.structure.code).toEqual("code");
    });
    it("NewMarkNode have content propty and content is instance of MarkContent", () => {
      expect(NewMarkNode.structure.content).toBeInstanceOf(MarkContent);
    });
    it("NewMarkNode have code condition and it is object", () => {
      expect(NewMarkNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewMarkNode function test", () => {
    it("NewMarkNode have validate function", () => {
      expect(NewMarkNode.validate()).toBeNull();
    });
    it("NewMarkNode have validateCode function", () => {
      expect(NewMarkNode.validateStructureCode()).toBeNull();
    });
    it("NewMarkNode have validateStructure function", () => {
      expect(NewMarkNode.validateStructure()).toBeNull();
    });
    it("NewMarkNode have validateStructureContent function", () => {
      expect(NewMarkNode.validateStructureContent()).toBeNull();
    });
    it("NewMarkNode have validateStructureCondition function", () => {
      expect(NewMarkNode.validateStructureCondition()).toBeNull();
    });
  });
});
/* <------------------------------------ **** MarkNode Class Node END **** ------------------------------------ */

/* <------------------------------------ **** LoopNode Class Test START **** ------------------------------------ */
describe("LoopNode Class Test", () => {
  it("NewLoopNode is the instance of LoopNode Class", () => {
    expect(NewLoopNode).toBeInstanceOf(LoopNode);
  });
  describe("NewLoopNode id test", () => {
    it("NewLoopNode id is euqal to LoopNodeId", () => {
      expect(NewLoopNode.id).toEqual("LoopNodeId");
    });
    it("NewLoopNode id type is string", () => {
      expect(typeof NewLoopNode.id).toEqual("string");
    });
  });
  describe("NewLoopNode kind test", () => {
    it("NewLoopNode kind is euqal to Node", () => {
      expect(NewLoopNode.kind).toEqual("LoopNode");
    });
  });
  describe("NewLoopNode meta test", () => {
    it("NewLoopNode meta is null", () => {
      expect(NewLoopNode.meta).toBeNull();
    });
    it("NewLoopNode meta is object ", () => {
      expect(NewLoopNodeType2.meta).toEqual({});
    });
  });
  describe("NewLoopNode editor test", () => {
    it("NewLoopNode eidtor have comment propty", () => {
      expect(NewLoopNode.editor.comment).toEqual("comment");
    });
    it("NewLoopNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewLoopNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewLoopNode Structure test", () => {
    it("NewLoopNode have code propty and code is string", () => {
      expect(NewLoopNode.structure.code).toEqual("code");
    });
    it("NewLoopNode have content propty and content is instance of MarkContent", () => {
      expect(NewLoopNode.structure.content).toBeInstanceOf(LoopContent);
    });
    it("NewLoopNode have code condition and it is object", () => {
      expect(NewLoopNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewLoopNode function test", () => {
    it("NewLoopNode have validate function", () => {
      expect(NewLoopNode.validate()).toBeNull();
    });
    it("NewLoopNode have validateCode function", () => {
      expect(NewLoopNode.validateStructureCode()).toBeNull();
    });
    it("NewLoopNode have validateStructure function", () => {
      expect(NewLoopNode.validateStructure()).toBeNull();
    });
    it("NewLoopNode have validateStructureContent function", () => {
      expect(NewLoopNode.validateStructureContent()).toBeNull();
    });
    it("NewLoopNode have validateStructureCondition function", () => {
      expect(NewLoopNode.validateStructureCondition()).toBeNull();
    });
  });
});
/* <------------------------------------ **** LoopNode Class Test END **** ------------------------------------ */

/* <------------------------------------ **** QuotaNode Class Test START **** ------------------------------------ */
describe("QuotaNode Class Test", () => {
  it("NewQuotaNode is the instance of QuotaNode Class", () => {
    expect(NewQuotaNode).toBeInstanceOf(QuotaNode);
  });
  describe("NewQuotaNode id test", () => {
    it("NewQuotaNode id is euqal to QuotaNodeId", () => {
      expect(NewQuotaNode.id).toEqual("QuotaNodeId");
    });
    it("NewQuotaNode id type is string", () => {
      expect(typeof NewQuotaNode.id).toEqual("string");
    });
  });
  describe("NewQuotaNode kind test", () => {
    it("NewQuotaNode kind is euqal to Node", () => {
      expect(NewQuotaNode.kind).toEqual("QuotaNode");
    });
  });
  describe("NewQuotaNode meta test", () => {
    it("NewQuotaNode meta is null", () => {
      expect(NewQuotaNode.meta).toBeNull();
    });
    it("NewQuotaNode meta is object ", () => {
      expect(NewQuotaNodeType2.meta).toEqual({});
    });
  });
  describe("NewQuotaNode editor test", () => {
    it("NewQuotaNode eidtor have comment propty", () => {
      expect(NewQuotaNode.editor.comment).toEqual("comment");
    });
    it("NewQuotaNode eidtor have instruction propty and it is an instance of HtmlItem", () => {
      expect(NewQuotaNode.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe("NewQuotaNode Structure test", () => {
    it("NewQuotaNode have code propty and code is string", () => {
      expect(NewQuotaNode.structure.code).toEqual("code");
    });
    it("NewQuotaNode have content propty and content is instance of MarkContent", () => {
      expect(NewQuotaNode.structure.content).toBeInstanceOf(QuotaContent);
    });
    it("NewQuotaNode have code condition and it is object", () => {
      expect(NewQuotaNode.structure.condition).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe("NewQuotaNode function test", () => {
    it("NewQuotaNode have validate function", () => {
      expect(NewQuotaNode.validate()).toBeNull();
    });
    it("NewQuotaNode have validateCode function", () => {
      expect(NewQuotaNode.validateStructureCode()).toBeNull();
    });
    it("NewQuotaNode have validateStructure function", () => {
      expect(NewQuotaNode.validateStructure()).toBeNull();
    });
    it("NewQuotaNode have validateStructureContent function", () => {
      expect(NewQuotaNode.validateStructureContent()).toBeNull();
    });
    it("NewQuotaNode have validateStructureCondition function", () => {
      expect(NewQuotaNode.validateStructureCondition()).toBeNull();
    });
  });
});
/* <------------------------------------ **** QuotaNode Class Test END **** ------------------------------------ */
