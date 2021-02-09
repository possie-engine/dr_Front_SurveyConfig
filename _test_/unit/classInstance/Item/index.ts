import {
  HtmlItem,
  Item,
  OptionItem,
  ScriptItem,
  TextScriptItem,
  ExecutionScriptItem,
  ConditionScriptItem,
  BuiltinConditionScriptItem,
  BuiltinExcutionScriptItem,
  BuiltinTextScriptItem,
} from "../../../../Class/Item/ItemClass";
import { NewTextContent } from "../Content";

const NewItem = new Item("itemId", "Item", null, null, null);
const NewItemType2 = new Item("itemId", "Item", {}, {}, {});

const NewHtmlItem = new HtmlItem(
  "HtmlItemId",
  "HtmlItem",
  {},
  { comment: "comment" },
  { html: "html" }
);
const NewHtmlItemType2 = new HtmlItem(
  "HtmlItemId",
  "HtmlItem",
  null,
  null,
  null
);
const NewScriptItem = new ScriptItem("scriptItemId", "ScriptItem", null, null, {
  function: "function",
});

const NewScriptItemType2 = new ScriptItem(
  "scriptItemId",
  "ScriptItem",
  null,
  null,
  {
    function: "function",
  }
);
const NewOptionItem = new OptionItem(
  "OptionItemId",
  "OptionItem",
  null,
  { comment: "comment", instruction: NewHtmlItem },
  { code: "code", text: { default: NewTextContent } }
);
const NewTextScriptItem = new TextScriptItem(
  "TextScriptItemId",
  "TextScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewTextScriptItemType2 = new TextScriptItem(
  "TextScriptItemId",
  "TextScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);

const NewExcutionScriptItem = new ExecutionScriptItem(
  "NewExcutionScriptItemId",
  "ExcutionScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewExcutionScriptItemType2 = new ExecutionScriptItem(
  "NewExcutionScriptItemId",
  "ExcutionScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);

const NewConditionScriptItem = new ConditionScriptItem(
  "ConditionScriptItemId",
  "ConditionScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewConditionScriptItemType2 = new ConditionScriptItem(
  "ConditionScriptItemId",
  "ConditionScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);

const NewBuiltinConditionScriptItem = new BuiltinConditionScriptItem(
  "BuiltinConditionScriptItemId",
  "BuiltinConditionScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewBuiltinConditionScriptItemType2 = new BuiltinConditionScriptItem(
  "BuiltinConditionScriptItemId",
  "BuiltinConditionScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);

const NewBuiltinExcutionScriptItem = new BuiltinExcutionScriptItem(
  "BuiltinExcutionScriptItemId",
  "BuiltinExcutionScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewBuiltinExcutionScriptItemType2 = new BuiltinExcutionScriptItem(
  "BuiltinExcutionScriptItemId",
  "BuiltinExcutionScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);

const NewBuiltinTextScriptItem = new BuiltinTextScriptItem(
  "BuiltinTextScriptItemId",
  "BuiltinTextScriptItem",
  { name: "name" },
  null,
  { function: "function" }
);
const NewBuiltinTextScriptItemType2 = new BuiltinTextScriptItem(
  "BuiltinTextScriptItemId",
  "BuiltinTextScriptItem",
  { name: "name" },
  {},
  { function: "function" }
);
export {
  NewItem,
  NewItemType2,
  NewHtmlItem,
  NewHtmlItemType2,
  NewScriptItem,
  NewScriptItemType2,
  NewOptionItem,
  NewTextScriptItem,
  NewTextScriptItemType2,
  NewExcutionScriptItem,
  NewExcutionScriptItemType2,
  NewConditionScriptItem,
  NewConditionScriptItemType2,
  NewBuiltinConditionScriptItem,
  NewBuiltinConditionScriptItemType2,
  NewBuiltinExcutionScriptItem,
  NewBuiltinExcutionScriptItemType2,
  NewBuiltinTextScriptItem,
  NewBuiltinTextScriptItemType2,
};
