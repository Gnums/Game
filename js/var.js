let tick = {speed: 1000, multi: 1};
let move = {zoom_levels: [1.0, 0.75, 0.5], zoom_level: 0, x: 0, y: 0};
let total_coin_ps = new Decimal(0);
let deed_boost = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let relocation_boost = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let jewelry_images = [];
let gem_images = [];
let rune_images = [];
let gem_types = [];
let rune_types = [];
let previous_tab = 'production_tab';
let previous_window = 'tier_one_window';
let currency_array = [];
let resource_array = [];
let producer_array = [];
let foremen_array = [];
let total_producer_array = [];
let upgrade_array = [];
let upgrade_infinite_array =[];
let title_array = [];
let leadership_array = [];
let adornments_array = [];
let aptitude_array = [];
let lesser_god_array = [];
let traits_array = [];
let bonus_traits_array = [];
let traces_array = [];
let relic_array = [];
let jewelry_array = [];
let gem_array = [];
let rune_array = [];
let buy_amt = [{tier: 't1', amt: 1},
               {tier: 't2', amt: 1},
               {tier: 't3', amt: 1},
               {tier: 't4', amt: 1},
               {tier: 't5', amt: 1},
               {tier: 't6', amt: 1},
               {tier: 'foremen', amt: 1},
               {tier: 'potential', amt: 1},
               {tier: 'divinity', amt: 1}];

class currency {
  constructor(type, num, total_gain, x, y) {
    this.type = type;
    this.num = new Decimal(num);
    this.total_gain = new Decimal(total_gain);
    if (type == 'coins') {
      this.multi = x;
      this.coin_gain_ps = new Decimal(y);
    }
    else {
      this.divisor = x;
      this.exp_pow = y;
    }
    currency_array.push(this);
  }
}

class resource {
  constructor(type, num, divisor, exp_base, boost, multi, coin_gain_ps, coin_gain_tracker) {
    this.type = type;
    this.num = new Decimal(num);
    this.divisor = divisor;
    this.exp_base = exp_base;
    this.boost = boost;
    this.multi = multi;
    this.coin_gain_ps = new Decimal(coin_gain_ps);
    this.coin_gain_tracker = new Decimal(coin_gain_tracker);
    resource_array.push(this);
  }
}

class producer {
  constructor(tag, num, bonus, tier, bought_with, type, multi, base, exp_base, bought_multi, multi_per, base_reduc, exp_base_reduc, cost_reduc) {
    this.tag = tag;
    this.num = new Decimal(num);
    this.bonus = new Decimal(bonus);
    this.tier = tier;
    this.bought_with = bought_with;
    this.type = type;
    this.multi = multi;
    this.base = new Decimal(base);
    this.exp_base = exp_base;
    this.bought_multi = bought_multi;
    this.multi_per = multi_per;
    this.base_reduc = base_reduc;
    this.exp_base_reduc = exp_base_reduc;
    this.cost_reduc = cost_reduc;
    producer_array.push(this);
  }
}

class foremen {
  constructor(tag, num, tier, type, speed_multi, prod_multi, res_multi) {
    this.tag = tag;
    this.num = num;
    this.speed_multi = speed_multi;
    this.prod_multi = prod_multi;
    this.res_multi = res_multi;
    foremen_array.push(this);
  }
}

class totalProducers {
    constructor(num, multi_per, type) {
    this.num = new Decimal(num);
    this.multi = multi_per;
    this.type = type;
    total_producer_array.push(this);
  }
}

class upgrade {
  constructor(tag, type, cost, bought, multi, affects_array, affects, info) {
    this.tag = tag;
    this.type = type;
    this.cost = cost;
    this.bought = bought;
    this.multi = multi;
    this.affects_array = affects_array;
    this.affects = affects;
    this.info = info;
    upgrade_array.push(this);
  }
}

class upgradeInfinite {
  constructor(tag, type, num, cost, growth, multi, affects_array, affects_type, affects, info) {
    this.tag = tag;
    this.type = type;
    this.num = num;
    this.cost = cost;
    this.growth = growth;
    this.multi = multi;
    this.affects_array = affects_array;
    this.affects_type = affects_type;
    this.affects = affects;
    this.info = info;
    upgrade_infinite_array.push(this);
  }
}

class title {
  constructor(tag, bought, unlocked, multi1, affects1, multi2, affects2, multi3, affects3, text) {
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
}

class leadershipTalent {
  constructor(tag, bought, unlocked, multi, affects, text) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    leadership_array.push(this);
  }
}

class adornmentsTalent {
  constructor(tag, bought, unlocked, multi, affects, text) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    adornments_array.push(this);
  }
}

class aptitudeTalent {
  constructor(tag, bought, unlocked, multi, affects, text) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    aptitude_array.push(this);
  }
}

class lesserGodTalent {
  constructor(tag, bought, unlocked, multi, affects, text) {
    this.tag = tag;
    this.bought = bought;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    lesser_god_array.push(this);
  }
}

class divineTrait {
  constructor(tag, num, base, exp_base, bonus, multi, affects, text) {
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
}

class bonusDivineTrait {
  constructor(tag, num, unlocked, multi, affects, text) {
    this.tag = tag;
    this.num = num;
    this.unlocked = unlocked;
    this.multi = multi;
    this.affects = affects;
    this.text = text;
    bonus_traits_array.push(this);
  }
}

class divineTraces {
  constructor(tag, num, unlocked, multi1, affects1, multi2, affects2, multi3, affects3, text) {
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
}

class relic {
  constructor(tag, name, level, affects, multi, text) {
    this.tag = tag;
    this.name = name;
    this.level = level;
    this.affects = affects;
    this.multi = multi;
    this.text = text;
    relic_array.push(this);
  }
}

class jewelry {
  constructor(tag, name, desc, rarity, level, socketed, enchanted, stats1, stats1_affects, stats2, stats2_affects, stats3, stats3_affects) {
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
}

class gem {
  constructor(tag, name, type, desc, rarity, level, stats, stats_affects) {
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
}

class rune {
  constructor(tag, name, type, desc, rarity, level, stats, stats_affects) {
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
}

class challenges {
  constructor(tag, name, text, num_comp, num_max, base, growth_rate, reward1, reward1_affects, reward2, reward2_affects) {
    this.tag = tag;
    this.name = name;
    this.text = text;
    this.num_comp = num_comp;
    this.num_max = num_max;
    this.base = base;
    this.growth_rate = growth_rate;
    this.reward1 = reward1;
    this.reward1_affects = reward1_affects;
    this.reward2 = reward2;
    this.reward2_affects = reward2_affects;
  }
}

class talentPoints {
  constructor(tag, type, num, divisor, growth) {
    this.tag = tag;
    this.type = type;
    this.num = num;
    this.divisor = divisor;
    this.growth = growth;
  }
}

let coins = new currency('coins', 10, 0, 0, 0);
let deeds = new currency('deeds', 0, 0, 0, 0);
let ancestry = new currency('ancestry', 0, 0, 0, 0);
let potential = new currency('potential', 0, 0, 0, 0);
let divinity = new currency('divinity', 0, 0, 0, 0);

let stone = new resource('stone', 0, 1e6, 1.1, 0.0, 1, 0, 0);
let wood = new resource('wood', 0, 1e7, 1.1, 0.0, 1, 0, 0);
let copper = new resource('copper', 0, 1e8, 1.1, 0.0, 1, 0, 0);
let bronze = new resource('bronze', 0, 1e9, 1.1, 0.0, 1, 0, 0);
let iron = new resource('iron', 0, 1e10, 1.1, 0.0, 1, 0, 0);
let steel = new resource('steel', 0, 1e11, 1.1, 0.0, 1, 0, 0);
let silver = new resource('silver', 0, 1e12, 1.1, 0.0, 1, 0, 0);
let gold = new resource('gold', 0, 1e13, 1.1, 0.0, 1, 0, 0);
let gems = new resource('gems', 0, 1e14, 1.1, 0.0, 1, 0, 0);
let runes = new resource('runes', 0, 1e15, 1.1, 0.0, 1, 0, 0);

let t1_stone = new producer('00', 0, 0, 't1', 'coins', 'stone', 1, 10, 1.2, 1, 0.0, 0.0, 0.0, 0.0);
let t1_wood = new producer('01', 0, 0, 't1', 'coins', 'wood', 1, 100, 1.2, 1, 0.0, 0.0, 0.0, 0.0);
let t1_copper = new producer('02', 0, 0, 't1', 'coins', 'copper', 1, 500, 1.21, 1, 0.0, 0.0, 0.0, 0.0);
let t1_bronze = new producer('03', 0, 0, 't1', 'coins', 'bronze', 1, 2500, 1.21, 1, 0.0, 0.0, 0.0, 0.0);
let t1_iron = new producer('04', 0, 0, 't1', 'coins', 'iron', 1, 12500, 1.22, 1, 0.0, 0.0, 0.0, 0.0);
let t1_steel = new producer('05', 0, 0, 't1', 'coins', 'steel', 1, 62500, 1.22, 1, 0.0, 0.0, 0.0, 0.0);
let t1_silver = new producer('06', 0, 0, 't1', 'coins', 'silver', 1, 312500, 1.23, 1, 0.0, 0.0, 0.0, 0.0);
let t1_gold = new producer('07', 0, 0, 't1', 'coins', 'gold', 1, 1562500, 1.23, 1, 0.0, 0.0, 0.0, 0.0);
let t1_gems = new producer('08', 0, 0, 't1', 'coins', 'gems', 1, 7812500, 1.24, 1, 0.0, 0.0, 0.0, 0.0);
let t1_runes = new producer('09', 0, 0, 't1', 'coins', 'runes', 1, 39062500, 1.25, 1, 0.0, 0.0, 0.0, 0.0);

let t2_stone = new producer('10', 0, 0, 't2', 'deeds', 'stone', 1, 1, 1.4, 1, 0.0, 0.0, 0.0, 0.0);
let t2_wood = new producer('11', 0, 0, 't2', 'deeds', 'wood', 1, 1, 1.4, 1, 0.0, 0.0, 0.0, 0.0);
let t2_copper = new producer('12', 0, 0, 't2', 'deeds', 'copper', 1, 1, 1.42, 1, 0.0, 0.0, 0.0, 0.0);
let t2_bronze = new producer('13', 0, 0, 't2', 'deeds', 'bronze', 1, 1, 1.42, 1, 0.0, 0.0, 0.0, 0.0);
let t2_iron = new producer('14', 0, 0, 't2', 'deeds', 'iron', 1, 1, 1.44, 1, 0.0, 0.0, 0.0, 0.0);
let t2_steel = new producer('15', 0, 0, 't2', 'deeds', 'steel', 1, 1, 1.44, 1, 0.0, 0.0, 0.0, 0.0);
let t2_silver = new producer('16', 0, 0, 't2', 'deeds', 'silver', 1, 1, 1.46, 1, 0.0, 0.0, 0.0, 0.0);
let t2_gold = new producer('17', 0, 0, 't2', 'deeds', 'gold', 1, 1, 1.46, 1, 0.0, 0.0, 0.0, 0.0);
let t2_gems = new producer('18', 0, 0, 't2', 'deeds', 'gems', 1, 1, 1.48, 1, 0.0, 0.0, 0.0, 0.0);
let t2_runes = new producer('19', 0, 0, 't2', 'deeds', 'runes', 1, 1, 1.5, 1, 0.0, 0.0, 0.0, 0.0);

let t3_stone = new producer('20', 0, 0, 't3', 'deeds', 'stone', 1, 1e30, 1.6, 1, 0.0, 0.0, 0.0, 0.0);
let t3_wood = new producer('21', 0, 0, 't3', 'deeds', 'wood', 1, 1e30, 1.6, 1, 0.0, 0.0, 0.0, 0.0);
let t3_copper = new producer('22', 0, 0, 't3', 'deeds', 'copper', 1, 1e30, 1, 1.62, 0.0, 0.0, 0.0, 0.0);
let t3_bronze = new producer('23', 0, 0, 't3', 'deeds', 'bronze', 1, 1e30, 1, 1.62, 0.0, 0.0, 0.0, 0.0);
let t3_iron = new producer('24', 0, 0, 't3', 'deeds', 'iron', 1, 1e30, 1.64, 1, 0.0, 0.0, 0.0, 0.0);
let t3_steel = new producer('25', 0, 0, 't3', 'deeds', 'steel', 1, 1e30, 1, 1.64, 0.0, 0.0, 0.0, 0.0);
let t3_silver = new producer('26', 0, 0, 't3', 'deeds', 'silver', 1, 1e30, 1, 1.66, 0.0, 0.0, 0.0, 0.0);
let t3_gold = new producer('27', 0, 0, 't3', 'deeds', 'gold', 1, 1e30, 1.66, 1, 0.0, 0.0, 0.0, 0.0);
let t3_gems = new producer('28', 0, 0, 't3', 'deeds', 'gems', 1, 1e30, 1.68, 1, 0.0, 0.0, 0.0, 0.0);
let t3_runes = new producer('29', 0, 0, 't3', 'deeds', 'runes', 1, 1e30, 1.7, 1, 0.0, 0.0, 0.0, 0.0);

let t4_stone = new producer('30', 0, 0, 't4', 'deeds', 'stone', 1, 1e100, 1.8, 1, 0.0, 0.0, 0.0, 0.0);
let t4_wood = new producer('31', 0, 0, 't4', 'deeds', 'wood', 1, 1e100, 1.8, 1, 0.0, 0.0, 0.0, 0.0);
let t4_copper = new producer('32', 0, 0, 't4', 'deeds', 'copper', 1, 1e100, 1.82, 1, 0.0, 0.0, 0.0, 0.0);
let t4_bronze = new producer('33', 0, 0, 't4', 'deeds', 'bronze', 1, 1e100, 1.82, 1, 0.0, 0.0, 0.0, 0.0);
let t4_iron = new producer('34', 0, 0, 't4', 'deeds', 'iron', 1, 1e100, 1.84, 1, 0.0, 0.0, 0.0, 0.0);
let t4_steel = new producer('35', 0, 0, 't4', 'deeds', 'steel', 1, 1e100, 1.84, 1, 0.0, 0.0, 0.0, 0.0);
let t4_silver = new producer('36', 0, 0, 't4', 'deeds', 'silver', 1, 1e100, 1.86, 1, 0.0, 0.0, 0.0, 0.0);
let t4_gold = new producer('37', 0, 0, 't4', 'deeds', 'gold', 1, 1e100, 1.86, 1, 0.0, 0.0, 0.0, 0.0);
let t4_gems = new producer('38', 0, 0, 't4', 'deeds', 'gems', 1, 1e100, 1.88, 1, 0.0, 0.0, 0.0, 0.0);
let t4_runes = new producer('39', 0, 0, 't4', 'deeds', 'runes', 1, 1e100, 1.9, 1, 0.0, 0.0, 0.0, 0.0);

let t5_stone = new producer('40', 0, 0, 't5', 'deeds', 'stone', 1, 1e300, 2.0, 1, 0.0, 0.0, 0.0, 0.0);
let t5_wood = new producer('41', 0, 0, 't5', 'deeds', 'wood', 1, 1e300, 2.0, 1, 0.0, 0.0, 0.0, 0.0);
let t5_copper = new producer('42', 0, 0, 't5', 'deeds', 'copper', 1, 1e300, 2.02, 1, 0.0, 0.0, 0.0, 0.0);
let t5_bronze = new producer('43', 0, 0, 't5', 'deeds', 'bronze', 1, 1e300, 2.02, 1, 0.0, 0.0, 0.0, 0.0);
let t5_iron = new producer('44', 0, 0, 't5', 'deeds', 'iron', 1, 1e300, 2.04, 1, 0.0, 0.0, 0.0, 0.0);
let t5_steel = new producer('45', 0, 0, 't5', 'deeds', 'steel', 1, 1e300, 2.04, 1, 0.0, 0.0, 0.0, 0.0);
let t5_silver = new producer('46', 0, 0, 't5', 'deeds', 'silver', 1, 1e300, 2.06, 1, 0.0, 0.0, 0.0, 0.0);
let t5_gold = new producer('47', 0, 0, 't5', 'deeds', 'gold', 1, 1e300, 2.06, 1, 0.0, 0.0, 0.0, 0.0);
let t5_gems = new producer('48', 0, 0, 't5', 'deeds', 'gems', 1, 1e300, 2.08, 1, 0.0, 0.0, 0.0, 0.0);
let t5_runes = new producer('49', 0, 0, 't5', 'deeds', 'runes', 1, 1e300, 2.1, 1, 0.0, 0.0, 0.0, 0.0);

let t6_stone = new producer('50', 0, 0, 't6', 'deeds', 'stone', 1, 1e700, 2.2, 1, 0.0, 0.0, 0.0, 0.0);
let t6_wood = new producer('51', 0, 0, 't6', 'deeds', 'wood', 1, 1e700, 2.2, 1, 0.0, 0.0, 0.0, 0.0);
let t6_copper = new producer('52', 0, 0, 't6', 'deeds', 'copper', 1, 1e700, 2.22, 1, 0.0, 0.0, 0.0, 0.0);
let t6_bronze = new producer('53', 0, 0, 't6', 'deeds', 'bronze', 1, 1e700, 2.22, 1, 0.0, 0.0, 0.0, 0.0);
let t6_iron = new producer('54', 0, 0, 't6', 'deeds', 'iron', 1, 1e700, 2.24, 1, 0.0, 0.0, 0.0, 0.0);
let t6_steel = new producer('55', 0, 0, 't6', 'deeds', 'steel', 1, 1e700, 2.24, 1, 0.0, 0.0, 0.0, 0.0);
let t6_silver = new producer('56', 0, 0, 't6', 'deeds', 'silver', 1, 1e700, 2.26, 1, 0.0, 0.0, 0.0, 0.0);
let t6_gold = new producer('57', 0, 0, 't6', 'deeds', 'gold', 1, 1e700, 2.26, 1, 0.0, 0.0, 0.0, 0.0);
let t6_gems = new producer('58', 0, 0, 't6', 'deeds', 'gems', 1, 1e700, 2.28, 1, 0.0, 0.0, 0.0, 0.0);
let t6_runes = new producer('59', 0, 0, 't6', 'deeds', 'runes', 1, 1e700, 2.3, 1, 0.0, 0.0, 0.0, 0.0);

let foremen_unassigned = new foremen('0', 0, 'foremen', 'none', 1.0, 1.0, 1.0);
let foremen_stone = new foremen('60', 0, 'foremen', 'stone', 1.0, 1.0, 1.0);
let foremen_wood = new foremen('61', 0, 'foremen', 'wood', 1.0, 1.0, 1.0);
let foremen_copper = new foremen('62', 0, 'foremen', 'copper', 1.0, 1.0, 1.0);
let foremen_bronze = new foremen('63', 0, 'foremen', 'bronze', 1.0, 1.0, 1.0);
let foremen_iron = new foremen('64', 0, 'foremen', 'iron', 1.0, 1.0, 1.0);
let foremen_steel = new foremen('65', 0, 'foremen', 'steel', 1.0, 1.0, 1.0);
let foremen_silver = new foremen('66', 0, 'foremen', 'silver', 1.0, 1.0, 1.0);
let foremen_gold = new foremen('67', 0, 'foremen', 'gold', 1.0, 1.0, 1.0);
let foremen_gems = new foremen('68', 0, 'foremen', 'gems', 1.0, 1.0, 1.0);
let foremen_runes = new foremen('69', 0, 'foremen', 'runes', 1.0, 1.0, 1.0);

let t1_acolyte = new producer('70', 0, 0, 'potential', 'potential', 'potential', 1, 1, 1.2, 1, 0.0, 0.0, 0.0, 0.0);
let t2_acolyte = new producer('71', 0, 0, 'potential', 'potential', 'potential', 1, 100, 1.4, 1, 0.0, 0.0, 0.0, 0.0);
let t3_acolyte = new producer('72', 0, 0, 'potential', 'potential', 'potential', 1, 1e4, 1.6, 1, 0.0, 0.0, 0.0, 0.0);
let t4_acolyte = new producer('73', 0, 0, 'potential', 'potential', 'potential', 1, 1e6, 1.8, 1, 0.0, 0.0, 0.0, 0.0);
let t5_acolyte = new producer('74', 0, 0, 'potential', 'potential', 'potential', 1, 1e10, 2.0, 1, 0.0, 0.0, 0.0, 0.0);
let t6_acolyte = new producer('75', 0, 0, 'potential', 'potential', 'potential', 1, 1e20, 2.2, 1, 0.0, 0.0, 0.0, 0.0);

let t1_follower = new producer('80', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1, 1.2, 1, 0.0, 0.0, 0.0, 0.0);
let t2_follower = new producer('81', 0, 0, 'divinity', 'divinity', 'divinity', 1, 100, 1.4, 1, 0.0, 0.0, 0.0, 0.0);
let t3_follower = new producer('82', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e4, 1.6, 1, 0.0, 0.0, 0.0, 0.0);
let t4_follower = new producer('83', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e6, 1.8, 1, 0.0, 0.0, 0.0, 0.0);
let t5_follower = new producer('84', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e10, 2.0, 1, 0.0, 0.0, 0.0, 0.0);
let t6_follower = new producer('85', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e20, 2.2, 1, 0.0, 0.0, 0.0, 0.0);

let t1_total_producers = new totalProducers(0, 0.0, 't1');
let t2_total_producers = new totalProducers(0, 0.0, 't2');
let t3_total_producers = new totalProducers(0, 0.0, 't3');
let t4_total_producers = new totalProducers(0, 0.0, 't4');
let t5_total_producers = new totalProducers(0, 0.0, 't5');
let t6_total_producers = new totalProducers(0, 0.0, 't6');
let stone_total_producers = new totalProducers(0, 0.0, 'stone');
let wood_total_producers = new totalProducers(0, 0.0, 'wood');
let copper_total_producers = new totalProducers(0, 0.0, 'copper');
let bronze_total_producers = new totalProducers(0, 0.0, 'bronze');
let iron_total_producers = new totalProducers(0, 0.0, 'iron');
let steel_total_producers = new totalProducers(0, 0.0, 'steel');
let silver_total_producers = new totalProducers(0, 0.0, 'silver');
let gold_total_producers = new totalProducers(0, 0.0, 'gold');
let gems_total_producers = new totalProducers(0, 0.0, 'gems');
let runes_total_producers = new totalProducers(0, 0.0, 'runes');

let coin_upg_00 = new upgrade('00', 'coins', 1e5, false, 250, producer_array, '00',
    'Increase T1 Stone Producer multiplier by 250');
let coin_upg_01 = new upgrade('01', 'coins', 1e6, false, 250, producer_array,  '01',
    'Increase T1 Wood Producer multiplier by 250');
let coin_upg_02 = new upgrade('02', 'coins', 1e7, false, 250, producer_array, '02',
    'Increase T1 Copper Producer multiplier by 250');
let coin_upg_03 = new upgrade('03', 'coins', 1e8, false, 250, producer_array,'03',
    'Increase T1 Bronze Producer multiplier by 250');
let coin_upg_04 = new upgrade('04', 'coins', 1e9, false, 100, currency_array,  'coins',
    'Increase Coin multiplier by 100');
let coin_upg_05 = new upgrade('05', 'coins', 1e10, false, 0.01, producer_array, 't1',
    'T1 Producers are boosted by 1% for each other same Producer');
let coin_upg_06 = new upgrade('06', 'coins', 1e11, false, .85, tick, '',
    'Reduce tick interval by 15%');
let coin_upg_07 = new upgrade('07', 'coins', 1e12, false, 4, resource_array, 'all',
    'Increase Resource multiplier by 4');
let coin_upg_08 = new upgrade('08', 'coins', 1e13, false, 250, producer_array, '04',
    'Increase T1 Iron Producer multiplier by 250');
let coin_upg_09 = new upgrade('09', 'coins', 1e14, false, 250, producer_array, '05',
    'Increase T1 Steel Producer multiplier by 250');
let coin_upg_10 = new upgrade('10', 'coins', 1e15, false, 250, producer_array, '06',
    'Increase T1 Silver Producer multiplier by 250');
let coin_upg_11 = new upgrade('11', 'coins', 1e16, false, 250, producer_array, '07',
    'Increase T1 Gold Producer multiplier by 250');
let coin_upg_12 = new upgrade('12', 'coins', 1e17, false, 250, producer_array, '08',
    'Increase T1 Gems Producer multiplier by 250');
let coin_upg_13 = new upgrade('13', 'coins', 1e18, false, 250, producer_array, '09',
    'Increase T1 Runes Producer multiplier by 250');
let coin_upg_14 = new upgrade('14', 'coins', 1e19, false, 10, resource_array, 'all',
    'Reduce Resource Divisors by 10');
let coin_upg_15 = new upgrade('15', 'coins', 1e20, false, 0.05, total_producer_array, 't1',
    'Increase multipliers for all T1 Producers by 0.5% for each other');
let coin_upg_16 = new upgrade('16', 'coins', 1e30, false, 0.9, producer_array, 'all',
    'Reduce Base cost for T1 Producers by 10%');
let coin_upg_17 = new upgrade('17', 'coins', 1e40, false, 0.015, producer_array, 't1',
    'T1 Producers are boosted by 1.5% for each other same Producer');
let coin_upg_18 = new upgrade('18', 'coins', 1e50, false, 250, producer_array, '00',
    'Increase T1 Stone Producer multiplier by 250');
let coin_upg_19 = new upgrade('19', 'coins', 1e60, false, 250, producer_array, '01',
    'Increase T1 Wood Producer multiplier by 250');
let coin_upg_20 = new upgrade('20', 'coins', 1e70, false, 250, producer_array, '02',
    'Increase T1 Copper Producer multiplier by 250');
let coin_upg_21 = new upgrade('21', 'coins', 1e100, false, 250, producer_array, '03',
    'Increase T1 Bronze Producer multiplier by 250');
let coin_upg_22 = new upgrade('22', 'coins', 1e150, false, 0.1, producer_array, 't1',
    'Reduce Exponential Base for T1 Producers by 0.1');
let coin_upg_23 = new upgrade('23', 'coins', 1e200, false, 0.85, tick, '',
    'Reduce tick interval by 15%');

let stone_upg_0 = new upgrade('30', 'stone', 1e5, false, 250, producer_array, 'stone',
    'Increase T1 Stone Producer multiplier by 250');
let stone_upg_1 = new upgrade('31', 'stone', 1e10, false, 0.01, resource_array, 'stone',
    'T1 Stone Producers gain a multiplier based on Stone on hand');
let stone_upg_2 = new upgrade('32', 'stone', 1e15, false, 4, resource_array, 'stone',
    'Increase Stone multiplier by 4');
let stone_upg_3 = new upgrade('33', 'stone', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let stone_upg_4 = new upgrade('34', 'stone', 1e30, false, 0.04, resource_array, 'stone',
    'T1 Stone Producers gain a multiplier based on Stone on hand');
let stone_upg_5 = new upgrade('35', 'stone', 1e40, false, 10, resource_array, 'stone',
    'Reduce Stone divisor by 10');
let stone_upg_6 = new upgrade('36', 'stone', 1e50, false, 0.01, total_producer_array, 'stone',
    'All Stone Producers gain a multiplier based on each other');
let stone_upg_7 = new upgrade('37', 'stone', 1e60, false, 0.05, producer_array, 'stone',
    'Reduce exponential bases for all Stone Producers by 0.05');

let wood_upg_0 = new upgrade('40', 'wood', 1e5, false, 250, producer_array, 'wood',
    'Increase T1 Wood Producer multiplier by 250');
let wood_upg_1 = new upgrade('41', 'wood', 1e10, false, 0.01, resource_array, 'wood',
    'T1 Wood Producers gain a multiplier based on Wood on hand');
let wood_upg_2 = new upgrade('42', 'wood', 1e15, false, 4, resource_array, 'wood',
    'Increase Wood multiplier by 4');
let wood_upg_3 = new upgrade('43', 'wood', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let wood_upg_4 = new upgrade('44', 'wood', 1e30, false, 0.04, resource_array, 'wood',
    'T1 Wood Producers gain a multiplier based on Wood on hand');
let wood_upg_5 = new upgrade('45', 'wood', 1e40, false, 10, resource_array, 'wood',
    'Reduce Wood divisor by 10');
let wood_upg_6 = new upgrade('46', 'wood', 1e50, false, 0.01, total_producer_array, 'wood',
    'All Wood Producers gain a multiplier based on each other');
let wood_upg_7 = new upgrade('47', 'wood', 1e60, false, 0.05, producer_array, 'wood',
    'Reduce exponential bases for all Wood Producers by 0.05');

let copper_upg_0 = new upgrade('50', 'copper', 1e5, false, 250, producer_array, 'copper',
    'Increase T1 Copper Producer multiplier by 250');
let copper_upg_1 = new upgrade('51', 'copper', 1e10, false, 0.01, resource_array, 'copper',
    'T1 Copper Producers gain a multiplier based on Copper on hand');
let copper_upg_2 = new upgrade('52', 'copper', 1e15, false, 4, resource_array, 'copper',
    'Increase Copper multiplier by 4');
let copper_upg_3 = new upgrade('53', 'copper', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let copper_upg_4 = new upgrade('54', 'copper', 1e30, false, 0.04, resource_array, 'copper',
    'T1 Copper Producers gain a multiplier based on Copper on hand');
let copper_upg_5 = new upgrade('55', 'copper', 1e40, false, 10, resource_array, 'copper',
    'Reduce Copper divisor by 10');
let copper_upg_6 = new upgrade('56', 'copper', 1e50, false, 0.01, total_producer_array, 'copper',
    'All Copper producers gain a multiplier based on each other');
let copper_upg_7 = new upgrade('57', 'copper', 1e60, false, 0.05, producer_array, 'copper',
    'Reduce exponential bases for all Copper Producers by 0.05');

let bronze_upg_0 = new upgrade('60', 'bronze', 1e5, false, 250, producer_array, 'bronze',
    'Increase T1 Bronze Producer multiplier by 250');
let bronze_upg_1 = new upgrade('61', 'bronze', 1e10, false, 0.01, resource_array, 'bronze',
    'T1 Bronze Producers gain a multiplier based on Bronze on hand');
let bronze_upg_2 = new upgrade('62', 'bronze', 1e15, false, 4, resource_array, 'bronze',
    'Increase Bronze multiplier by 4');
let bronze_upg_3 = new upgrade('63', 'bronze', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let bronze_upg_4 = new upgrade('64', 'bronze', 1e30, false, 0.04, resource_array, 'bronze',
    'T1 Bronze Producers gain a multiplier based on Bronze on hand');
let bronze_upg_5 = new upgrade('65', 'bronze', 1e40, false, 10, resource_array, 'bronze',
    'reduce Bronze divisor by 10');
let bronze_upg_6 = new upgrade('66', 'bronze', 1e50, false, 0.01, total_producer_array, 'bronze',
    'All Bronze Producer gain a multiplier based on each other');
let bronze_upg_7 = new upgrade('67', 'bronze', 1e60, false, 0.05, producer_array, 'bronze',
    'Reduce exponential bases for all Bronze Producers by 0.05');

let iron_upg_0 = new upgrade('70', 'iron', 1e5, false, 250, producer_array, 'iron',
    'Increase T1 Iron Producer multiplier by 250');
let iron_upg_1 = new upgrade('71', 'iron', 1e10, false, 0.01, resource_array, 'iron',
    'T1 Iron Producers gain a multiplier based on Iron on hand');
let iron_upg_2 = new upgrade('72', 'iron', 1e15, false, 4, resource_array, 'iron',
    'Increase Iron multiplier by 4');
let iron_upg_3 = new upgrade('73', 'iron', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let iron_upg_4 = new upgrade('74', 'iron', 1e30, false, 0.04, resource_array, 'iron',
    'T1 Iron Producers gain a multiplier based on Iron on hand');
let iron_upg_5 = new upgrade('75', 'iron', 1e40, false, 10, resource_array, 'iron',
    'Reduce Iron divisor by 10');
let iron_upg_6 = new upgrade('76', 'iron', 1e50, false, 0.01, total_producer_array, 'iron',
    'All Iron Producers gain a multiplier based on each other');
let iron_upg_7 = new upgrade('77', 'iron', 1e60, false, 0.05, producer_array, 'iron',
    'Reduce exponential bases for all Iron Producers by 0.05');

let steel_upg_0 = new upgrade('80', 'steel', 1e5, false, 250, producer_array, 'steel',
    'Increase T1 Steel producer multiplier by 250');
let steel_upg_1 = new upgrade('81', 'steel', 1e10, false, 0.01, resource_array, 'steel',
    'T1 Steel producers gain a multiplier based on Steel on hand');
let steel_upg_2 = new upgrade('82', 'steel', 1e15, false, 4, resource_array, 'steel',
    'Increase Steel multiplier by 4');
let steel_upg_3 = new upgrade('83', 'steel', 1e20, false, 0.9, tick, '',
    'Reduce tick interval by 10%');
let steel_upg_4 = new upgrade('84', 'steel', 1e30, false, 0.04, resource_array, 'steel',
    'T1 Steel producers gain a multiplier based on Steel on hand');
let steel_upg_5 = new upgrade('85', 'steel', 1e40, false, 10, resource_array, 'steel',
    'Reduce Steel divisor by 10');
let steel_upg_6 = new upgrade('86', 'steel', 1e50, false, 0.01, total_producer_array, 'steel',
    'All Steel producers gain a multiplier based on each other');
let steel_upg_7 = new upgrade('87', 'steel', 1e60, false, 0.05, producer_array, 'steel',
    'Reduce exponential bases for all Steel producers by 0.05');

let deed_upgrade_00 = new upgrade('00', 'deeds', 1, false, 100, currency_array, 'coins',
    'Increase coin multiplier by 100');
let deed_upgrade_01 = new upgrade('01', 'deeds', 1, false, 4, resource_array, 'all',
    'Increase resource multiplier by 4');
let deed_upgrade_02 = new upgrade('02', 'deeds', 1, false, 1, deed_boost, 0,
    'Gain a multiplier to all T1 producers based on unspent Deeds');
let deed_upgrade_03 = new upgrade('03', 'deeds', 1, false, 1, relocation_boost, 0,
    'Gain a multiplier to all T1 producers based on Relocations');
let deed_upgrade_04 = new upgrade('04', 'deeds', 1, false, 0.75, producer_array, 't1',
    'Base cost of all T1 producers reduced by 25%');
let deed_upgrade_05 = new upgrade('05', 'deeds', 1, false, 0.05, producer_array, 't1',
    'Exponential base of all T1 producers reduced by 0.05');
let deed_upgrade_06 = new upgrade('06', 'deeds', 1, false, 100, producer_array, 't2',
    'Increase multiplier for all T2 producers by 100');
let deed_upgrade_07 = new upgrade('07', 'deeds', 1, false, 0.05, total_producer_array, 't1',
    'T1 producers gain a multiplier for each other T1 producer');
let deed_upgrade_08 = new upgrade('08', 'deeds', 1, false, 1, deed_boost, 1,
    'Gain a multiplier to all T2 producers based on unspent Deeds');
let deed_upgrade_09 = new upgrade('09', 'deeds', 1, false, 0.75, producer_array, 't2',
    'Base cost of all T2 producers reduced by 25%');
let deed_upgrade_10 = new upgrade('10', 'deeds', 1, false, 0.01, total_producer_array, ['stone', 'wood'],
    'Stone and Wood producers gain a multiplier for each other producer of the same type');
let deed_upgrade_11 = new upgrade('11', 'deeds', 1, false, 0.02, producer_array, 't2',
    'T2 producers gain a multiplier for each of the same type');
let deed_upgrade_12 = new upgrade('12', 'deeds', 1, false, 0.1, producer_array, 't2',
    'Exponential base of all T2 producers reduced by 0.1');
let deed_upgrade_13 = new upgrade('13', 'deeds', 1, false, 100, producer_array, 't3',
    'Increase multiplier for all T3 producers by 100');
let deed_upgrade_14 = new upgrade('14', 'deeds', 1, false, 1, relocation_boost, 1,
    'Gain a multiplier to all T2 producers based on Relocations');
let deed_upgrade_15 = new upgrade('15', 'deeds', 1, false, 1, deed_boost, 2,
    'Gain a multiplier to all T3 producers based on unspent Deeds');
let deed_upgrade_16 = new upgrade('16', 'deeds', 1, false, 0.75, producer_array, 't3',
    'Base cost of all T3 producers reduced by 25%');
let deed_upgrade_17 = new upgrade('17', 'deeds', 1, false, 0.01, total_producer_array, ['copper', 'bronze'],
    'Copper and Bronze producers gain a multiplier for each other producer of the same type');
let deed_upgrade_18 = new upgrade('18', 'deeds', 1, false, 0.015, producer_array, 't3',
    'T3 producers gain a multiplier for each of the same type');
let deed_upgrade_19 = new upgrade('19', 'deeds', 1, false, 0.1, producer_array, 't3',
    'Exponential base of all T3 producers reduced by 0.1');
let deed_upgrade_20 = new upgrade('20', 'deeds', 1, false, 100, producer_array, 't4',
    'Increase multiplier for all T4 producers by 100');
let deed_upgrade_21 = new upgrade('21', 'deeds', 1, false, 0.01, total_producer_array, ['iron', 'steel'],
    'Iron and Steel producers gain a multiplier for each other producer of the same type');
let deed_upgrade_22 = new upgrade('22', 'deeds', 1, false, 1, relocation_boost, 2,
    'Gain a multiplier to all T3 producers based on Relocations');
let deed_upgrade_23 = new upgrade('23', 'deeds', 1, false, 1, deed_boost, 3,
    'Gain a multiplier to all T4 producers based on unspent Deeds');
let deed_upgrade_24 = new upgrade('24', 'deeds', 1, false, 0.75, producer_array, 't4',
    'Base cost of all T4 producers reduced by 25%');
let deed_upgrade_25 = new upgrade('25', 'deeds', 1, false, 0.01, producer_array, 't4',
    'T4 producers gain a multiplier for each of the same type');
let deed_upgrade_26 = new upgrade('26', 'deeds', 1, false, 0.01, total_producer_array, ['silver', 'gold'],
    'Silver and Gold producers gain a multiplier for each of the same type');
let deed_upgrade_27 = new upgrade('27', 'deeds', 1, false, 0.1, producer_array, 't4',
    'Exponential base of all T4 producers reduced by 0.1');
let deed_upgrade_28 = new upgrade('28', 'deeds', 1, false, 100, producer_array, 't5',
    'Increase multiplier for all T5 producers by 100');
let deed_upgrade_29 = new upgrade('29', 'deeds', 1, false, 1, relocation_boost, 3,
    'Gain a multiplier to all T4 producers based on Relocations');
let deed_upgrade_30 = new upgrade('30', 'deeds', 1, false, 1, deed_boost, 4,
    'Gain a multiplier to all T5 producers based on unspent Deeds');
let deed_upgrade_31 = new upgrade('31', 'deeds', 1, false, 0.75, producer_array, 't5',
    'Base cost of all T5 producers reduced by 25%');
let deed_upgrade_32 = new upgrade('32', 'deeds', 1, false, 0.0075, producer_array, 't5',
    'T5 producers gain a multiplier for each of the same type');
let deed_upgrade_33 = new upgrade('33', 'deeds', 1, false, 0.01, resource_array, 'silver',
    'T1 Silver producers gain a multiplier based on Silver on hand');
let deed_upgrade_34 = new upgrade('34', 'deeds', 1, false, 0.1, producer_array, 't5',
    'Exponential base of all T5 producers reduced by 0.1');
let deed_upgrade_35 = new upgrade('35', 'deeds', 1, false, 100, producer_array, 't6',
    'Increase multiplier for all T6 producers by 100');
let deed_upgrade_36 = new upgrade('36', 'deeds', 1, false, 0.025, total_producer_array, ['gems', 'runes'],
    'Gems and Runes producers gain a multiplier for each of the same type');
let deed_upgrade_37 = new upgrade('37', 'deeds', 1, false, 1, relocation_boost, 4,
    'Gain a multiplier to all T5 producers based on Relocations');
let deed_upgrade_38 = new upgrade('38', 'deeds', 1, false, 1, deed_boost, 5,
    'Gain a multiplier to all T6 producers based on unspent Deeds');
let deed_upgrade_39 = new upgrade('39', 'deeds', 1, false, 0.75, producer_array, 't6',
    'Base cost of all T6 producers reduced by 25%');
let deed_upgrade_40 = new upgrade('40', 'deeds', 1, false, 0.005, producer_array, 't6',
    'T6 producers gain a multiplier for each of the same type');
let deed_upgrade_41 = new upgrade('41', 'deeds', 1, false, 0.1, producer_array, 't6',
    'Exponential base of all T6 producers reduced by 0.1');
let deed_upgrade_42 = new upgrade('42', 'deeds', 1, false, 0.025, resource_array, 'gold',
    'T1 Gold producers gain a multiplier based on Gold on hand');
let deed_upgrade_43 = new upgrade('43', 'deeds', 1, false, 1, relocation_boost, 5,
    'Gain a multiplier to all T6 producers based on Relocations');

let stone_upg_inf = new upgradeInfinite('0', 'stone', 0, 0, 0, 0.005, producer_array, 'all',
    'Reduce base cost for all Producers by 0.5%');
let wood_upg_inf = new upgradeInfinite('0', 'wood', 0, 0, 0, 0.01, tick, '',
    'Reduce tick interval by 1%');
let copper_upg_inf = new upgradeInfinite('0', 'copper', 0, 0, 0, 0.025, currency_array, 'coins',
    'Increase coin multiplier by 2.5%');
let bronze_upg_inf = new upgradeInfinite('0', 'bronze', 0, 0, 0, 0.025, resource_array, 'all',
    'Increase all resource multipliers by 2.5%');
let iron_upg_inf = new upgradeInfinite('0', 'iron', 0, 0, 0, 0.01, resource_array, 'all',
    'Reduce all resource divisors by 1%');
let steel_upg_inf = new upgradeInfinite('0', 'steel', 0, 0, 0, 0.01, producer_array,['t2', 't3', 't4', 't5', 't6'],
    'Increase production for Tiers 2 through 6 by 1%');
// TODO: add values
let knight = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
let baron = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
let viscount = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
let count = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
let duke = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
let king = new title('0', false, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let leadership_speed_00 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_01 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_02 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_03 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_04 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_05 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_06 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_07 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_08 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_09 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_10 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_11 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_12 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_13 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_14 = new leadershipTalent('00', false, false, 0, '',
    '');
// TODO: add values
let leadership_multi_00 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_01 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_02 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_03 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_04 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_05 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_06 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_07 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_08 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_09 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_10 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_11 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_12 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_13 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_14 = new leadershipTalent('00', false, false, 0, '',
    '');
// TODO: add values
let leadership_res_00 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_01 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_02 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_03 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_04 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_05 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_06 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_07 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_08 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_09 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_10 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_11 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_12 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_13 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_14 = new leadershipTalent('00', false, false, 0, '',
    '');
// TODO: add values
let leadership_speed_major_00 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_major_01 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_speed_multi_major = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_major_0 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_major_1 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_multi_res_major = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_major_0 = new leadershipTalent('00', false, false, 0, '',
    '');
let leadership_res_major_1 = new leadershipTalent('00', false, false, 0, '',
    '');
// TODO: add values
let adornments_start = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_00 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_01 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_02 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_03 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_04 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_05 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_06 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_07 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_08 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_09 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_10 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_11 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_12 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_13 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_14 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_15 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_16 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_17 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_18 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_19 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_20 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_21 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_22 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_23 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_24 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_25 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_26 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_27 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_28 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_29 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_30 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_31 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_32 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_33 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_34 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_35 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_36 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_37 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_38 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_39 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_40 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_41 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_42 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_43 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_44 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_45 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_46 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_47 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_48 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_49 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_50 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_51 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_52 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_53 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_54 = new adornmentsTalent('00', false, false, 0, '',
    '');
// TODO: add values
let adornments_major_0 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_1 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_2 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_3 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_4 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_5 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_6 = new adornmentsTalent('00', false, false, 0, '',
    '');
let adornments_major_7 = new adornmentsTalent('00', false, false, 0, '',
    '');
// TODO: add values
let aptitude_00 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_01 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_02 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_03 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_04 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_05 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_06 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_07 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_08 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_09 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_10 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_11 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_12 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_13 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_14 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_15 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_16 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_17 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_18 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_19 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_20 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_21 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_22 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_23 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_24 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_25 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_26 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_27 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_28 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_29 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_30 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_31 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_32 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_33 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_34 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_35 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_36 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_37 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_38 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_39 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_40 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_41 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_42 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_43 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_44 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_45 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_46 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_47 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_48 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_49 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_50 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_51 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_52 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_53 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_54 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_55 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_56 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_57 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_58 = new aptitudeTalent('00', false, false, 0, '',
    '');
let aptitude_59 = new aptitudeTalent('00', false, false, 0, '',
    '');
// TODO: add values
let charisma = new divineTrait('0', 0, 1, 1, 0, 1, '',
    '');
let charisma_bonus_0 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let charisma_bonus_1 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let charisma_bonus_2 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let charisma_bonus_3 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
// TODO: add values
let strength = new divineTrait('0', 0, 1, 1, 0, 1, '',
    '');
let strength_bonus_0 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let strength_bonus_1 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let strength_bonus_2 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let strength_bonus_3 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let strength_bonus_4 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let strength_bonus_5 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
// TODO: add values
let dexterity = new divineTrait('0', 0, 1, 1, 0, 1, '',
    '');
let dexterity_bonus_0 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let dexterity_bonus_1 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let dexterity_bonus_2 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
// TODO: add values
let wisdom = new divineTrait('0', 0, 1, 1, 0, 1, '',
    '');
let wisdom_bonus_0 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let wisdom_bonus_1 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let wisdom_bonus_2 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
// TODO: add values
let wealth = new divineTrait('0', 0, 1, 1, 0, 1, '',
    '');
let wealth_bonus_0 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
let wealth_bonus_1 = new bonusDivineTrait('0', 0, false, 1, '',
    '');
// TODO: add values
let lesser_god_00 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_01 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_02 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_03 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_04 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_05 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_06 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_07 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_08 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_09 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_10 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_11 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_12 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_13 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_14 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_15 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_16 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_17 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_18 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_19 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_20 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_21 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_22 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_23 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_24 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_25 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_26 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_27 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_28 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_29 = new lesserGodTalent('00', 0, false, 0, '',
    '');
// TODO: add values
let lesser_god_major_0 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_major_1 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_major_2 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_major_3 = new lesserGodTalent('00', 0, false, 0, '',
    '');
let lesser_god_major_4 = new lesserGodTalent('00', 0, false, 0, '',
    '');
// TODO: add values
let shepherd_0 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let shepherd_1 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let shepherd_2 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let shepherd_3 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let shepherd_4 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let shepherd_5 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let smith_0 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let smith_1 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let smith_2 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let smith_3 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let smith_4 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let smith_5 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let knowledgable_0 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let knowledgable_1 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let knowledgable_2 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let knowledgable_3 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let knowledgable_4 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let knowledgable_5 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let luxurious_0 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let luxurious_1 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let luxurious_2 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let luxurious_3 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let luxurious_4 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let luxurious_5 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let commander_0 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let commander_1 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let commander_2 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let commander_3 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let commander_4 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
let commander_5 = new divineTraces('00', 0, false, 0, '', 0, '', 0, '',
    '');
// TODO: add values
let leadership_points = new talentPoints('0', 'leadership', 0, 0, 0);
let adornments_points = new talentPoints('0', 'leadership', 0, 0, 0);
let aptitude_points = new talentPoints('0', 'leadership', 0, 0, 0);
let lesser_god_points = new talentPoints('0', 'leadership', 0, 0, 0);
let divine_clues = new talentPoints('0', 'leadership', 0, 0, 0);

let start_img = new Image();
start_img.src = 'images/start.png';
let adornments_talent_img = new Image();
adornments_talent_img.src = 'images/gold_orb.png';
let jewelry_max_img = new Image();
jewelry_max_img.src = 'images/jewelry_max_major.png';
let lockbox_img = new Image();
lockbox_img.src = 'images/lockbox_major.png';
let jewelry_boost_img = new Image();
jewelry_boost_img.src = 'images/boost_major.png';
