/**
 * @file this file ele class test file
 * @date 2020-11-12
 * @author Frank
 * @lastModify Frank 2020-11-12
 */
import { Ele } from "../Class/EleClass";
import { NewEle, NewEleType2 } from "./classInstance";
/* <------------------------------------ **** Ele Class Test START **** ------------------------------------ */

describe("Ele class test", () => {
  it("NewEle is the instance of Ele", () => {
    expect(NewEle).toBeInstanceOf(Ele);
  });
  describe("Ele id test", () => {
    it("NewEle id element is string", () => {
      expect(typeof NewEle.id).toEqual("string");
    });
    it("NewEle id element equal Eleid", () => {
      expect(NewEle.id).toEqual("Eleid");
    });
  });
  describe("Ele kind test", () => {
    it("NewEle kind element is string", () => {
      expect(typeof NewEle.kind).toEqual("string");
    });
    it("NewEle kind element equal Eleid", () => {
      expect(NewEle.kind).toEqual("Ele");
    });
  });
  describe("Ele meta test", () => {
    it("NewEle meta element equal null", () => {
      expect(NewEle.meta).toBeNull();
    });
    it("NewEle meta element equal object", () => {
      expect(typeof NewEleType2.meta).toEqual("object");
    });
  });
  describe("Ele editor test", () => {
    it("NewEle editor element equal null", () => {
      expect(NewEle.editor).toBeNull();
    });
    it("NewEle editor element equal object", () => {
      expect(typeof NewEle.editor).toEqual("object");
    });
  });
  describe("Ele editor test", () => {
    it("NewEle validate function is called", () => {
      expect(NewEle.validate()).toBeNull();
    });
  });
});
/* <------------------------------------ **** Ele Class Test END **** ------------------------------------ */
