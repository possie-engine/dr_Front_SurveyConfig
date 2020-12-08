/**
 * @file this file contain Top level class Ele
 * @date 2020-11-09
 * @author Frank
 * @lastModify Frank 2020-11-09
 */

/**
 * This is the top class Ele
 * @param {string} id the id of the list
 * @param {'Ele'} kind the list kind is type of 'Ele'
 * @param {object | null} meta the meta data of the list
 * @param {object | null} editor the editor of the list
 */
export class Ele {
  public id: string;
  public kind: string | "Ele";
  public meta: Record<string, unknown> | null;
  public editor: Record<string, unknown> | null;
  constructor(
    id: string,
    kind: string,
    meta: Record<string, unknown> | null,
    editor: Record<string, unknown> | null
  ) {
    this.id = id;
    this.kind = kind;
    this.meta = meta;
    this.editor = editor;
  }
  public validate() {
    return null;
  }
}
