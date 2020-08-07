function Relic(tag, name, level, affects, multi, text) {
    this.tag = tag;
    this.name = name;
    this.level = level;
    this.affects = affects;
    this.multi = multi;
    this.text = text;
    relic_array.push(this);
}