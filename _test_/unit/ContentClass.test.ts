import {
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
} from './classInstance/Content';

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
  OptionList,
  ConditionList,
  TextList,
  ExecutionScriptItem,
  HtmlItem,
  ScriptItem,
} from '../../Class';

/* <------------------------------------ **** Content Class Test START **** ------------------------------------ */
describe('Content Class Test', () => {
  it('NewContent is the instance of Content', () => {
    expect(NewContent).toBeInstanceOf(Content);
  });
  describe('NewContent id test', () => {
    it('NewConent id is ContentId', () => {
      expect(NewContent.id).toEqual('NewContentId');
    });
    it('NewContent id type is string', () => {
      expect(typeof NewContent.id).toEqual('string');
    });
  });
  describe('NewContent kind test', () => {
    it('NewContent kind is Content', () => {
      expect(NewContent.kind).toEqual('Content');
    });
    it('NewContent kind type is string', () => {
      expect(typeof NewContent.kind).toEqual('string');
    });
  });
  describe('NewContent meta test', () => {
    it('NewContent meta is null', () => {
      expect(NewContent.meta).toBeNull();
    });
    it('NewContent meta is {}', () => {
      expect(NewContentType2.meta).toEqual({});
    });
  });
  describe('NewContent editor test', () => {
    it('NewContent editor is null', () => {
      expect(NewContent.editor).toBeNull();
    });
    it('NewContent editor is {}', () => {
      expect(NewContentType2.editor).toEqual({});
    });
  });
  describe('NewContent content test', () => {
    it('NewContent content have type propety and it is string', () => {
      expect(NewContent.content.type).toEqual('type');
    });
  });
  describe('NewContent function test', () => {
    it('NewContent have validate function', () => {
      expect(NewContent.validate()).toBeNull();
    });
    it('NewContent have validateContent function', () => {
      expect(NewContent.validateContent()).toBeNull();
    });
  });
});
/* <------------------------------------ **** Content Class Test END **** ------------------------------------ */

/* <------------------------------------ **** QuestionContent class Test START **** ------------------------------------ */
describe('QuestionContent Class Test', () => {
  it('NewQuestionContent is the instance of QuestionContent', () => {
    expect(NewQuestionContent).toBeInstanceOf(QuestionContent);
  });
  describe('NewQuestionContent id test', () => {
    it('NewQuestionContent id is QuestionContentId', () => {
      expect(NewQuestionContent.id).toEqual('QuestionContentId');
    });
    it('NewQuestionContent id type is string', () => {
      expect(typeof NewQuestionContent.id).toEqual('string');
    });
  });
  describe('NewQuestionContent kind test', () => {
    it('NewCoNewQuestionContentntent kind is Content', () => {
      expect(NewQuestionContent.kind).toEqual('QuestionContent');
    });
    it('NewQuestionContent kind type is string', () => {
      expect(typeof NewQuestionContent.kind).toEqual('string');
    });
  });
  describe('NewQuestionContent meta test', () => {
    it('NewQuestionContent meta is null', () => {
      expect(NewQuestionContent.meta).toBeNull();
    });
    it('NewQuestionContent meta is object', () => {
      expect(typeof NewQuestionContentType2.meta).toEqual('object');
    });
    it('NewQuestionContent meta.randomized is object', () => {
      expect(typeof NewQuestionContentType2.meta.randomized).toEqual('object');
    });
    it('NewQuestionContent meta.randomized.active is boolean', () => {
      expect(typeof NewQuestionContentType2.meta.randomized[0].active).toEqual(
        'boolean'
      );
    });
    it('NewQuestionContent meta.randomized.order is object', () => {
      expect(typeof NewQuestionContentType2.meta.randomized[0].order).toEqual(
        'object'
      );
    });
    it('NewQuestionContent meta.randomized.order.recordedFormat is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.randomized[0].order.recordedFormat
      ).toEqual('string');
    });
    it('NewQuestionContent meta.randomized.order.script is true', () => {
      expect(
        typeof NewQuestionContentType2.meta.randomized[0].order.script
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0] is object', () => {
      expect(typeof NewQuestionContentType2.meta.grouped[0]).toEqual('object');
    });
    it('NewQuestionContent meta.grouped[0].active is boolean', () => {
      expect(typeof NewQuestionContentType2.meta.grouped[0].active).toEqual(
        'boolean'
      );
    });
    it('NewQuestionContent meta.grouped[0].members[0] is object', () => {
      expect(typeof NewQuestionContentType2.meta.grouped[0].members[0]).toEqual(
        'object'
      );
    });
    it('NewQuestionContent meta.grouped[0].members[0].id is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].id
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].code is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].code
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].options[0] is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].options[0]
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].title is object', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].title
      ).toEqual('object');
    });
    it('NewQuestionContent meta.grouped[0].members[0].title.script is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].title.script
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].title.text is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].title.text
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].groupColor is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].groupColor
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].members[0].fixedPosition is boolean', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].members[0].fixedPosition
      ).toEqual('boolean');
    });
    it('NewQuestionContent meta.grouped[0].randomized is object', () => {
      expect(typeof NewQuestionContentType2.meta.grouped[0].randomized).toEqual(
        'object'
      );
    });
    it('NewQuestionContent meta.grouped[0].randomized.active is boolean', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized.active
      ).toEqual('boolean');
    });
    it('NewQuestionContent meta.grouped[0].randomized.type is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized.type
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].randomized.fixedPositionFor[0] is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized
          .fixedPositionFor[0]
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].randomized.order is object', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized.order
      ).toEqual('object');
    });
    it('NewQuestionContent meta.grouped[0].randomized.order.script is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized.order.script
      ).toEqual('string');
    });
    it('NewQuestionContent meta.grouped[0].randomized.order.recordedFormat is string', () => {
      expect(
        typeof NewQuestionContentType2.meta.grouped[0].randomized.order
          .recordedFormat
      ).toEqual('string');
    });
  });
  describe('NewQuestionContent editor test', () => {
    it('NewQuestionContent editor is null', () => {
      expect(NewQuestionContent.editor).toBeNull();
    });
    it('NewQuestionContent editor is {}', () => {
      expect(NewQuestionContentType2.editor).toEqual({});
    });
  });
  describe('NewQuestionContent content test', () => {
    it('NewQuestionContent content have type propety and it is string', () => {
      expect(NewQuestionContent.content.type).toEqual('Single');
    });
    it('NewQuestionContent content have options propety and it is array and it is the instance of OptionList', () => {
      expect(NewQuestionContent.content.options[0][0]).toBeInstanceOf(
        OptionList
      );
    });
    it('NewQuestionContent content have optionsDisplay propety and it is array and it is include true and false propety', () => {
      expect(NewQuestionContent.content.optionsDisplay['demo']).toEqual({
        true: NewConditionContent,
        false: false,
      });
    });
  });
  describe('NewQuestionContent function test', () => {
    it('NewQuestionContent have validate function', () => {
      expect(NewQuestionContent.validate()).toBeNull();
    });
    it('NewQuestionContent have validateContent function', () => {
      expect(NewQuestionContent.validateContent()).toBeNull();
    });
    it('NewQuestionContent have validateContentType function', () => {
      expect(NewQuestionContent.validateContentType()).toBeNull();
    });
    it('NewQuestionContent have validateContentOptions function', () => {
      expect(NewQuestionContent.validateContentOptions()).toBeNull();
    });
    it('NewQuestionContent have validateContentOptionsDisplay function', () => {
      expect(NewQuestionContent.validateContentOptionsDisplay()).toBeNull();
    });
  });
});
/* <------------------------------------ **** QuestionContent class Test END **** ------------------------------------ */

/* <------------------------------------ **** ConditionContent Class Test START **** ------------------------------------ */
describe('ConditionContent Class Test', () => {
  it('NewConditionContent is the instance of ConditionContent', () => {
    expect(NewConditionContent).toBeInstanceOf(ConditionContent);
  });
  describe('NewConditionContent id test', () => {
    it('NewConditionContent id is ConditionContentId', () => {
      expect(NewConditionContent.id).toEqual('ConditionContentId');
    });
    it('NewConditionContent id type is string', () => {
      expect(typeof NewConditionContent.id).toEqual('string');
    });
  });
  describe('NewConditionContent kind test', () => {
    it('NewConditionContent kind is Content', () => {
      expect(NewConditionContent.kind).toEqual('ConditionContent');
    });
    it('NewConditionContent kind type is string', () => {
      expect(typeof NewConditionContent.kind).toEqual('string');
    });
  });
  describe('NewConditionContent meta test', () => {
    it('NewConditionContent meta is null', () => {
      expect(NewConditionContent.meta).toBeNull();
    });
    it('NewConditionContent meta is {}', () => {
      expect(NewConditionContentType2.meta).toEqual({});
    });
  });
  describe('NewConditionContent editor test', () => {
    it('NewConditionContent editor is null', () => {
      expect(NewConditionContent.editor).toBeNull();
    });
    it('NewConditionContentType2 editor is {}', () => {
      expect(NewConditionContentType2.editor).toEqual({});
    });
  });
  describe('NewConditionContent content test', () => {
    it('NewConditionContent content have type propety and it is string', () => {
      expect(NewConditionContent.content.type).toEqual('AND');
    });
    it('NewConditionContent content have options propety and it is array and it is the instance of OptionList', () => {
      expect(NewConditionContent.content.condition[0]).toBeInstanceOf(
        ConditionList
      );
    });
  });
  describe('NewQuestionContent function test', () => {
    it('NewQuestionContent have validate function', () => {
      expect(NewQuestionContent.validate()).toBeNull();
    });
    it('NewQuestionContent have validateContent function', () => {
      expect(NewQuestionContent.validateContent()).toBeNull();
    });
    it('NewQuestionContent have validateContentType function', () => {
      expect(NewQuestionContent.validateContentType()).toBeNull();
    });
    it('NewQuestionContent have validateContentOptions function', () => {
      expect(NewQuestionContent.validateContentOptions()).toBeNull();
    });
    it('NewQuestionContent have validateContentOptionsDisplay function', () => {
      expect(NewQuestionContent.validateContentOptionsDisplay()).toBeNull();
    });
  });
});
/* <------------------------------------ **** ConditionContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** TextContent Class Test START **** ------------------------------------ */
describe('TextContent Class Test', () => {
  it('NewTextContent is the instance of TextContent', () => {
    expect(NewTextContent).toBeInstanceOf(TextContent);
  });
  describe('NewTextContent id test', () => {
    it('NewTextContent id is TextContentId', () => {
      expect(NewTextContent.id).toEqual('TextContentId');
    });
    it('NewTextContent id type is string', () => {
      expect(typeof NewTextContent.id).toEqual('string');
    });
  });
  describe('NewTextContent kind test', () => {
    it('NewTextContent kind is Content', () => {
      expect(NewTextContent.kind).toEqual('TextContent');
    });
    it('NewTextContent kind type is string', () => {
      expect(typeof NewTextContent.kind).toEqual('string');
    });
  });
  describe('NewTextContent meta test', () => {
    it('NewTextContent meta is null', () => {
      expect(NewTextContent.meta).toBeNull();
    });
    it('NewTextContent meta is {}', () => {
      expect(NewTextContentType2.meta).toEqual({});
    });
  });
  describe('NewTextContent editor test', () => {
    it('NewTextContent editor is null', () => {
      expect(NewTextContent.editor.comment).toEqual('comment');
    });
  });
  describe('NewTextContent content test', () => {
    it('NewTextContent content have type propety and it is string', () => {
      expect(NewTextContent.content.type).toEqual('type');
    });
    it('NewTextContent content have list propety andit is the instance of TextList', () => {
      expect(NewTextContent.content.list).toBeInstanceOf(TextList);
    });
  });
  describe('NewQuestionContent function test', () => {
    it('NewQuestionContent have validate function', () => {
      expect(NewTextContent.validate()).toBeNull();
    });
    it('NewQuestionContent have validateContent function', () => {
      expect(NewTextContent.validateContent()).toBeNull();
    });
    it('NewQuestionContent have validateContentType function', () => {
      expect(NewTextContent.validateContentType()).toBeNull();
    });
    it('NewQuestionContent have validateContentOptions function', () => {
      expect(NewTextContent.validateContentList()).toBeNull();
    });
  });
});
/* <------------------------------------ **** TextContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** BlockContent Class Test START **** ------------------------------------ */
describe('BlockContent Class Test', () => {
  it('NewBlockContent is the instance of BlockContent', () => {
    expect(NewBlockContent).toBeInstanceOf(BlockContent);
  });
  describe('NewBlockContent id test', () => {
    it('NewBlockContent id is TextContentId', () => {
      expect(NewBlockContent.id).toEqual('NewBlockContentId');
    });
    it('NewBlockContent id type is string', () => {
      expect(typeof NewBlockContent.id).toEqual('string');
    });
  });
  describe('NewBlockContent kind test', () => {
    it('NewBlockContent kind is Content', () => {
      expect(NewBlockContent.kind).toEqual('BlockContent');
    });
    it('NewBlockContent kind type is string', () => {
      expect(typeof NewBlockContent.kind).toEqual('string');
    });
  });
  describe('NewBlockContent meta test', () => {
    it('NewBlockContent meta is null', () => {
      expect(NewBlockContent.meta).toBeNull();
    });
    it('NewBlockContent meta is {}', () => {
      expect(NewBlockContentType2.meta).toEqual({});
    });
  });
  describe('NewBlockContent editor test', () => {
    it('NewBlockContent editor is null', () => {
      expect(NewBlockContent.editor).toBeNull();
    });
    it('NewBlockContentType2 editor is {}', () => {
      expect(NewBlockContentType2.editor).toEqual({});
    });
  });
  describe('NewBlockContent content test', () => {
    it('NewBlockContent content have type propety and it is string', () => {
      expect(NewBlockContent.content.type).toEqual('Block');
    });
    it('NewBlockContent content have list propety', () => {
      expect(NewBlockContent.content.list).toEqual([]);
    });
  });
  describe('NewBlockContent function test', () => {
    it('NewBlockContent have validate function', () => {
      expect(NewBlockContent.validate()).toBeNull();
    });
    it('NewBlockContent have validateContent function', () => {
      expect(NewBlockContent.validateContent()).toBeNull();
    });
    it('NewBlockContent have validateContentType function', () => {
      expect(NewBlockContent.validateContentType()).toBeNull();
    });
    it('NewBlockContent have validateContentOptions function', () => {
      expect(NewBlockContent.validateContentList()).toBeNull();
    });
  });
});
/* <------------------------------------ **** BlockContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** MarkContent Class Test START **** ------------------------------------ */
describe('MarkContent Class Test', () => {
  it('NewMarkContent is the instance of MarkContent', () => {
    expect(NewMarkContent).toBeInstanceOf(MarkContent);
  });
  describe('NewMarkContent id test', () => {
    it('NewMarkContent id is TextContentId', () => {
      expect(NewMarkContent.id).toEqual('MarkContentId');
    });
    it('NewMarkContent id type is string', () => {
      expect(typeof NewMarkContent.id).toEqual('string');
    });
  });
  describe('NewMarkContent kind test', () => {
    it('NewMarkContent kind is Content', () => {
      expect(NewMarkContent.kind).toEqual('MarkContent');
    });
    it('NewMarkContent kind type is string', () => {
      expect(typeof NewMarkContent.kind).toEqual('string');
    });
  });
  describe('NewMarkContent meta test', () => {
    it('NewMarkContent meta is null', () => {
      expect(NewMarkContent.meta).toBeNull();
    });
    it('NewMarkContent meta is {}', () => {
      expect(NewMarkContentType2.meta).toEqual({});
    });
  });
  describe('NewMarkContent editor test', () => {
    it('NewMarkContent editor is null', () => {
      expect(NewMarkContent.editor).toBeNull();
    });
    it('NewMarkContentType2 editor is {}', () => {
      expect(NewMarkContentType2.editor).toEqual({});
    });
  });
  describe('NewMarkContent content test', () => {
    it('NewMarkContent content have type propety and it is string', () => {
      expect(NewMarkContent.content.type).toEqual('Mark');
    });
    it('NewMarkContent content have markers propety', () => {
      expect(typeof NewMarkContent.content.markers[0]).toEqual('string');
    });
    it('NewMarkContent content have logics propety', () => {
      expect(NewMarkContent.content.logics[0]).toBeInstanceOf(ConditionContent);
    });
  });
  describe('NewMarkContent function test', () => {
    it('NewMarkContent have validate function', () => {
      expect(NewMarkContent.validate()).toBeNull();
    });
    it('NewMarkContent have validateContent function', () => {
      expect(NewMarkContent.validateContent()).toBeNull();
    });
    it('NewMarkContent have validateContentType function', () => {
      expect(NewMarkContent.validateContentType()).toBeNull();
    });
    it('NewMarkContent have validateContentMarkers function', () => {
      expect(NewMarkContent.validateContentMarkers()).toBeNull();
    });
    it('NewMarkContent have validateContentLogics function', () => {
      expect(NewMarkContent.validateContentLogics()).toBeNull();
    });
  });
});
/* <------------------------------------ **** MarkContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** ExecutionContent Class Test START **** ------------------------------------ */
describe('ExecutionContent Class Test', () => {
  it('NewExecutionContent is the instance of ExecutionContent', () => {
    expect(NewExecutionContent).toBeInstanceOf(ExecutionContent);
  });
  describe('NewExecutionContent id test', () => {
    it('NewExecutionContent id is ExecutionContentId', () => {
      expect(NewExecutionContent.id).toEqual('ExecutionContentId');
    });
    it('NewExecutionContent id type is string', () => {
      expect(typeof NewExecutionContent.id).toEqual('string');
    });
  });
  describe('NewExecutionContent kind test', () => {
    it('NewExecutionContent kind is Content', () => {
      expect(NewExecutionContent.kind).toEqual('ExecutionContent');
    });
    it('NewExecutionContent kind type is string', () => {
      expect(typeof NewExecutionContent.kind).toEqual('string');
    });
  });
  describe('NewExecutionContent meta test', () => {
    it('NewExecutionContent meta is null', () => {
      expect(NewExecutionContent.meta).toBeNull();
    });
    it('NewExecutionContent meta is {}', () => {
      expect(NewExecutionContentType2.meta).toEqual({});
    });
  });
  describe('NewExecutionContent editor test', () => {
    it('NewExecutionContent editor is null', () => {
      expect(NewExecutionContent.editor).toBeNull();
    });
    it('NewExecutionContentType2 editor is {}', () => {
      expect(NewExecutionContentType2.editor).toEqual({});
    });
  });
  describe('NewExecutionContent content test', () => {
    it('NewExecutionContent content have type propety and it is string', () => {
      expect(NewExecutionContent.content.type).toEqual('Execution');
    });
    it('NewExecutionContent content have markers propety', () => {
      expect(typeof NewExecutionContent.content.excution).toEqual('object');
    });
  });
  describe('NewExecutionContent function test', () => {
    it('NewExecutionContent have validate function', () => {
      expect(NewExecutionContent.validate()).toBeNull();
    });
    it('NewExecutionContent have validateContent function', () => {
      expect(NewExecutionContent.validateContent()).toBeNull();
    });
    it('NewExecutionContent have validateContentType function', () => {
      expect(NewExecutionContent.validateContentType()).toBeNull();
    });
    it('NewExecutionContent have validateContentExcution function', () => {
      expect(NewExecutionContent.validateContentExcution()).toBeNull();
    });
  });
});
/* <------------------------------------ **** ExecutionContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** ScriptContent Class Test START **** ------------------------------------ */
describe('ScriptContent Class Test', () => {
  it('NewScriptContent is the instance of ScriptContent', () => {
    expect(NewScriptContent).toBeInstanceOf(ScriptContent);
  });
  describe('NewScriptContent id test', () => {
    it('NewScriptContent id is ScriptContentId', () => {
      expect(NewScriptContent.id).toEqual('ScriptContentId');
    });
    it('NewScriptContent id type is string', () => {
      expect(typeof NewScriptContent.id).toEqual('string');
    });
  });
  describe('NewScriptContent kind test', () => {
    it('NewScriptContent kind is Content', () => {
      expect(NewScriptContent.kind).toEqual('ScriptContent');
    });
    it('NewScriptContent kind type is string', () => {
      expect(typeof NewScriptContent.kind).toEqual('string');
    });
  });
  describe('NewScriptContent meta test', () => {
    it('NewScriptContent meta is null', () => {
      expect(NewScriptContent.meta).toBeNull();
    });
    it('NewScriptContent meta is {}', () => {
      expect(NewScriptContentType2.meta).toEqual({});
    });
  });
  describe('NewScriptContent editor test', () => {
    it('NewScriptContent editor is null', () => {
      expect(NewScriptContent.editor.comment).toEqual('comment');
    });
    it('NewScriptContent editor is the instance of HtmlItem', () => {
      expect(NewScriptContent.editor.instruction).toBeInstanceOf(HtmlItem);
    });
  });
  describe('NewScriptContent content test', () => {
    it('NewScriptContent content have type propety and it is string', () => {
      expect(NewScriptContent.content.type).toEqual('Condition');
    });
    it('NewScriptContent content have markers propety', () => {
      expect(typeof NewScriptContent.content.script).toEqual('string');
    });
    it('NewScriptContent content have markers propety', () => {
      expect(typeof NewScriptContent.content.arguments[0]).toEqual('string');
    });
  });
  describe('NewScriptContent function test', () => {
    it('NewScriptContent have validate function', () => {
      expect(NewScriptContent.validate()).toBeNull();
    });
    it('NewScriptContent have validateContent function', () => {
      expect(NewScriptContent.validateContent()).toBeNull();
    });
    it('NewScriptContent have validateContentType function', () => {
      expect(NewScriptContent.validateContentType()).toBeNull();
    });
    it('NewScriptContent have validateContentScript function', () => {
      expect(NewScriptContent.validateContentScript()).toBeNull();
    });
    it('NewScriptContent have validateContentArguments function', () => {
      expect(NewScriptContent.validateContentArguments()).toBeNull();
    });
  });
});
/* <------------------------------------ **** ScriptContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** LoopContent Class Test START **** ------------------------------------ */
describe('LoopContent Class Test', () => {
  it('NewLoopContent is the instance of LoopContent', () => {
    expect(NewLoopContent).toBeInstanceOf(LoopContent);
  });
  describe('NewLoopContent id test', () => {
    it('NewLoopContent id is LoopContentId', () => {
      expect(NewLoopContent.id).toEqual('LoopContentId');
    });
    it('NewLoopContent id type is string', () => {
      expect(typeof NewLoopContent.id).toEqual('string');
    });
  });
  describe('NewLoopContent kind test', () => {
    it('NewLoopContent kind is Content', () => {
      expect(NewLoopContent.kind).toEqual('LoopContent');
    });
    it('NewLoopContent kind type is string', () => {
      expect(typeof NewLoopContent.kind).toEqual('string');
    });
  });
  describe('NewLoopContent meta test', () => {
    it('NewLoopContent meta is null', () => {
      expect(NewLoopContent.meta).toBeNull();
    });
    it('NewLoopContent meta is {}', () => {
      expect(NewLoopContentType2.meta).toEqual({});
    });
  });
  describe('NewLoopContent editor test', () => {
    it('NewLoopContent editor is null', () => {
      expect(NewLoopContent.editor).toBeNull;
    });
    it('NewLoopContentType2 editor is the instance of HtmlItem', () => {
      expect(NewLoopContentType2.editor).toEqual({});
    });
  });
  describe('NewLoopContent content test', () => {
    it('NewLoopContent content have type propety and it is string', () => {
      expect(NewLoopContent.content.type).toEqual('Loop');
    });
    it('NewLoopContent content have options propety', () => {
      expect(NewLoopContent.content.options).toBeInstanceOf(OptionList);
    });
    it('NewLoopContent content have logics propety', () => {
      expect(NewLoopContent.content.logics[0]).toBeInstanceOf(ConditionContent);
    });
    it('NewLoopContent content have list propety', () => {
      expect(NewLoopContent.content.list).toEqual([]);
    });
  });
  describe('NewLoopContent function test', () => {
    it('NewLoopContent have validate function', () => {
      expect(NewLoopContent.validate()).toBeNull();
    });
    it('NewLoopContent have validateContent function', () => {
      expect(NewLoopContent.validateContent()).toBeNull();
    });
    it('NewLoopContent have validateContentType function', () => {
      expect(NewLoopContent.validateContentType()).toBeNull();
    });
    it('NewLoopContent have validateContentLogics function', () => {
      expect(NewLoopContent.validateContentLogics()).toBeNull();
    });
    it('NewLoopContent have validateContentOptions function', () => {
      expect(NewLoopContent.validateContentOptions()).toBeNull();
    });
    it('NewLoopContent have validateContentList function', () => {
      expect(NewLoopContent.validateContentList()).toBeNull();
    });
  });
});
/* <------------------------------------ **** LoopContent Class Test END **** ------------------------------------ */

/* <------------------------------------ **** QuotaContent Class Test START **** ------------------------------------ */
describe('QuotaContent Class Test', () => {
  it('NewQuotaContent is the instance of QuotaContent', () => {
    expect(NewQuotaContent).toBeInstanceOf(QuotaContent);
  });
  describe('NewQuotaContent id test', () => {
    it('NewQuotaContent id is QuotaContentId', () => {
      expect(NewQuotaContent.id).toEqual('QuotaContentId');
    });
    it('NewQuotaContent id type is string', () => {
      expect(typeof NewQuotaContent.id).toEqual('string');
    });
  });
  describe('NewQuotaContent kind test', () => {
    it('NewQuotaContent kind is Content', () => {
      expect(NewQuotaContent.kind).toEqual('QuotaContent');
    });
    it('NewQuotaContent kind type is string', () => {
      expect(typeof NewQuotaContent.kind).toEqual('string');
    });
  });
  describe('NewQuotaContent meta test', () => {
    it('NewQuotaContent meta is null', () => {
      expect(NewQuotaContent.meta).toBeNull();
    });
    it('NewQuotaContentType2 meta is {}', () => {
      expect(NewQuotaContentType2.meta).toEqual({});
    });
  });
  describe('NewQuotaContent editor test', () => {
    it('NewQuotaContent editor is null', () => {
      expect(NewQuotaContent.editor).toBeNull;
    });
    it('NewQuotaContentType2 editor is the instance of HtmlItem', () => {
      expect(NewQuotaContentType2.editor).toEqual({});
    });
  });
  describe('NewQuotaContent content test', () => {
    it('NewQuotaContent content have type propety and it is string', () => {
      expect(NewQuotaContent.content.type).toEqual('Quota');
    });
    it('NewQuotaContent content have Markers propety', () => {
      expect(typeof NewQuotaContent.content.markers[0]).toEqual('string');
    });
    it('NewQuotaContent content have logics propety', () => {
      expect(NewQuotaContent.content.logics[0]).toBeInstanceOf(
        ConditionContent
      );
    });
    it('NewQuotaContent content have list propety', () => {
      expect(typeof NewQuotaContent.content.quotas[0]).toEqual('number');
    });
  });
  describe('NewQuotaContent function test', () => {
    it('NewQuotaContent have validate function', () => {
      expect(NewQuotaContent.validate()).toBeNull();
    });
    it('NewQuotaContent have validateContent function', () => {
      expect(NewQuotaContent.validateContent()).toBeNull();
    });
    it('NewQuotaContent have validateContentType function', () => {
      expect(NewQuotaContent.validateContentType()).toBeNull();
    });
    it('NewQuotaContent have validateContentLogics function', () => {
      expect(NewQuotaContent.validateContentLogics()).toBeNull();
    });
    it('NewQuotaContent have validateContentOptions function', () => {
      expect(NewLoopContent.validateContentOptions()).toBeNull();
    });
    it('NewQuotaContent have validateContentQuotas function', () => {
      expect(NewQuotaContent.validateContentQuotas()).toBeNull();
    });
  });
});
/* <------------------------------------ **** QuotaContent Class Test END **** ------------------------------------ */
