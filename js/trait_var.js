function Title(tag, bought, unlocked, multi1, affects1, multi2, affects2, multi3, affects3, text) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi1 = multi1;
    this.affects1 = affects1;
    this.multi2 = multi2;
    this.affects2 = affects2;
    this.multi3 = multi3;
    this.affects3 = affects3;
    this.text = text;
    title_array.push(this);
}

function DivineTrait(tag, num, base, exp_base, bonus, multi, affects, text) {
    this.tag = tag;
    this.num = num;
    this.base = base;
    this.exp_base = exp_base;
    this.bonus = bonus;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    traits_array.push(this);
}

function BonusDivineTrait(tag, num, unlocked, multi, affects, text) {
    this.tag = tag;
    this.num = num;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    bonus_traits_array.push(this);
}

function DivineTraces(tag, num, unlocked, multi1, affects1, multi2, affects2, multi3, affects3, text) {
    this.tag = tag;
    this.num = num;
    this.unlocked = unlocked;
    this.multi = multi1;
    this.affects = affects1;
    this.multi2 = multi2;
    this.affects2 = affects2;
    this.multi3 = multi3;
    this.affects3 = affects3;
    this.text = text;
    traces_array.push(this);
}