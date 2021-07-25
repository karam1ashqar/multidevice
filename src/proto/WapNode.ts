import { Binary } from './../proto/Binary';

export class WapNode {
  public tag: any;
  public attrs: any;
  public content: any;

  constructor(tag: string, attrs = {}, content = null) {
    this.tag = tag;
    this.attrs = attrs;
    this.content = content;
  }

  contentString() {
    const data = new Binary(this.content);
    return data.readString(data.size());
  }

  getContentByTag(tagName: string): WapNode {
    if (!Array.isArray(this.content)) {
      return null;
    }

    return this.content.find((node) => node.tag == tagName);
  }

  /*toString() {
        let e = "<" + this.tag;

        e += attrsToString(this.attrs);

        var t = this.content;
        return Array.isArray(t) ? e += `>${t.map(String).join("")}</${this.tag}>` : e += t ? `>${(0,
        n.uint8ArrayToDebugString)(t)}</${this.tag}>` : " />",
        e
    }*/
}
