function Jewelry(tag, name, desc, rarity, level, socketed, enchanted, stats1, stats1_affects, stats2, stats2_affects, stats3, stats3_affects) {
    this.tag = tag;
    this.name = name;
    this.desc = desc;
    this.rarity = rarity;
    this.level = level;
    this.socketed = socketed;
    this.enchanted = enchanted;
    this.stats1 = stats1;
    this.stats1_affects = stats1_affects;
    this.stats2 = stats2;
    this.stats2_affects = stats2_affects;
    this.stats3 = stats3;
    this.stats3_affects = stats3_affects;
    jewelry_array.push(this);
}

function Gem(tag, name, type, desc, rarity, level, stats, stats_affects) {
    this.tag = tag;
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.rarity = rarity;
    this.level = level;
    this.stats = stats;
    this.stats_affects = stats_affects;
    gem_array.push(this);
}

function Rune(tag, name, type, desc, rarity, level, stats, stats_affects) {
    this.tag = tag;
    this.name = name;
    this.type = type;
    this.desc = desc;
    this.rarity = rarity;
    this.level = level;
    this.stats = stats;
    this.stats_affects = stats_affects;
    rune_array.push(this);
}