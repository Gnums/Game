let deed_boost = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let relocation_boost = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let previous_tab = 'production_tab';
let previous_window = 'tier_one_window';
let currency_array = [];
let resource_array = [];
let producer_array = [];
let foremen_array = [];
let total_producer_array = [];
let upgrade_array = [];
let upgrade_infinite_array =[];

function Currency(type, num, total_gain, x, y) {
  this.type = type;
  this.num = new Decimal(num);
  this.total_gain = new Decimal(total_gain);
  if (type === 'coins') {
    this.multi = x;
    this.coin_gain_ps = new Decimal(y);
  }
  else {
    this.divisor = x;
    this.exp_pow = y;
  }
  currency_array.push(this);
}

function Resource(type, num, divisor, exp_base, boost, multi, coin_gain_ps, coin_gain_tracker) {
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

function Producer(tag, num, bonus, tier, bought_with, type, multi, base, exp_base, bought_multi, multi_per, base_reduc, exp_base_reduc, cost_reduc, auto_buy) {
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
  this.auto_buy = auto_buy;
  producer_array.push(this);
}

function Foremen(tag, num, type, speed_multi, prod_multi, res_multi) {
  this.tag = tag;
  this.num = num;
  this.type = type;
  this.speed_multi = speed_multi;
  this.prod_multi = prod_multi;
  this.res_multi = res_multi;
  foremen_array.push(this);
}

function TotalProducers(num, multi_per, type) {
  this.num = new Decimal(num);
  this.multi = multi_per;
  this.type = type;
  total_producer_array.push(this);
}

function Challenges(tag, name, text, num_comp, num_max, base, growth_rate, reward1, reward1_affects, reward2, reward2_affects) {
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

let coins = new Currency('coins', 10, 0, 0, 0);
let deeds = new Currency('deeds', 0, 0, 0, 0);
let ancestry = new Currency('ancestry', 0, 0, 0, 0);
let potential = new Currency('potential', 0, 0, 0, 0);
let divinity = new Currency('divinity', 0, 0, 0, 0);

new Resource('stone', 0, 1e6, 1.1, 0.0, 1, 0, 0);
new Resource('wood', 0, 1e7, 1.1, 0.0, 1, 0, 0);
new Resource('copper', 0, 1e8, 1.1, 0.0, 1, 0, 0);
new Resource('bronze', 0, 1e9, 1.1, 0.0, 1, 0, 0);
new Resource('iron', 0, 1e10, 1.1, 0.0, 1, 0, 0);
new Resource('steel', 0, 1e11, 1.1, 0.0, 1, 0, 0);
new Resource('silver', 0, 1e12, 1.1, 0.0, 1, 0, 0);
new Resource('gold', 0, 1e13, 1.1, 0.0, 1, 0, 0);
new Resource('gems', 0, 1e14, 1.1, 0.0, 1, 0, 0);
new Resource('runes', 0, 1e15, 1.1, 0.0, 1, 0, 0);

new Producer('00', 0, 0, 't1', 'coins', 'stone', 1, 10, 1.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('01', 0, 0, 't1', 'coins', 'wood', 1, 100, 1.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('02', 0, 0, 't1', 'coins', 'copper', 1, 500, 1.21, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('03', 0, 0, 't1', 'coins', 'bronze', 1, 2500, 1.21, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('04', 0, 0, 't1', 'coins', 'iron', 1, 12500, 1.22, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('05', 0, 0, 't1', 'coins', 'steel', 1, 62500, 1.22, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('06', 0, 0, 't1', 'coins', 'silver', 1, 312500, 1.23, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('07', 0, 0, 't1', 'coins', 'gold', 1, 1562500, 1.23, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('08', 0, 0, 't1', 'coins', 'gems', 1, 7812500, 1.24, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('09', 0, 0, 't1', 'coins', 'runes', 1, 39062500, 1.25, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('10', 0, 0, 't2', 'deeds', 'stone', 1, 1, 1.4, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('11', 0, 0, 't2', 'deeds', 'wood', 1, 1, 1.4, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('12', 0, 0, 't2', 'deeds', 'copper', 1, 1, 1.42, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('13', 0, 0, 't2', 'deeds', 'bronze', 1, 1, 1.42, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('14', 0, 0, 't2', 'deeds', 'iron', 1, 1, 1.44, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('15', 0, 0, 't2', 'deeds', 'steel', 1, 1, 1.44, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('16', 0, 0, 't2', 'deeds', 'silver', 1, 1, 1.46, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('17', 0, 0, 't2', 'deeds', 'gold', 1, 1, 1.46, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('18', 0, 0, 't2', 'deeds', 'gems', 1, 1, 1.48, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('19', 0, 0, 't2', 'deeds', 'runes', 1, 1, 1.5, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('20', 0, 0, 't3', 'deeds', 'stone', 1, 1e30, 1.6, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('21', 0, 0, 't3', 'deeds', 'wood', 1, 1e30, 1.6, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('22', 0, 0, 't3', 'deeds', 'copper', 1, 1e30, 1, 1.62, 0.0, 0.0, 0.0, 0.0, false);
new Producer('23', 0, 0, 't3', 'deeds', 'bronze', 1, 1e30, 1, 1.62, 0.0, 0.0, 0.0, 0.0, false);
new Producer('24', 0, 0, 't3', 'deeds', 'iron', 1, 1e30, 1.64, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('25', 0, 0, 't3', 'deeds', 'steel', 1, 1e30, 1, 1.64, 0.0, 0.0, 0.0, 0.0, false);
new Producer('26', 0, 0, 't3', 'deeds', 'silver', 1, 1e30, 1, 1.66, 0.0, 0.0, 0.0, 0.0, false);
new Producer('27', 0, 0, 't3', 'deeds', 'gold', 1, 1e30, 1.66, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('28', 0, 0, 't3', 'deeds', 'gems', 1, 1e30, 1.68, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('29', 0, 0, 't3', 'deeds', 'runes', 1, 1e30, 1.7, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('30', 0, 0, 't4', 'deeds', 'stone', 1, 1e100, 1.8, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('31', 0, 0, 't4', 'deeds', 'wood', 1, 1e100, 1.8, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('32', 0, 0, 't4', 'deeds', 'copper', 1, 1e100, 1.82, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('33', 0, 0, 't4', 'deeds', 'bronze', 1, 1e100, 1.82, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('34', 0, 0, 't4', 'deeds', 'iron', 1, 1e100, 1.84, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('35', 0, 0, 't4', 'deeds', 'steel', 1, 1e100, 1.84, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('36', 0, 0, 't4', 'deeds', 'silver', 1, 1e100, 1.86, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('37', 0, 0, 't4', 'deeds', 'gold', 1, 1e100, 1.86, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('38', 0, 0, 't4', 'deeds', 'gems', 1, 1e100, 1.88, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('39', 0, 0, 't4', 'deeds', 'runes', 1, 1e100, 1.9, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('40', 0, 0, 't5', 'deeds', 'stone', 1, 1e300, 2.0, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('41', 0, 0, 't5', 'deeds', 'wood', 1, 1e300, 2.0, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('42', 0, 0, 't5', 'deeds', 'copper', 1, 1e300, 2.02, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('43', 0, 0, 't5', 'deeds', 'bronze', 1, 1e300, 2.02, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('44', 0, 0, 't5', 'deeds', 'iron', 1, 1e300, 2.04, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('45', 0, 0, 't5', 'deeds', 'steel', 1, 1e300, 2.04, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('46', 0, 0, 't5', 'deeds', 'silver', 1, 1e300, 2.06, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('47', 0, 0, 't5', 'deeds', 'gold', 1, 1e300, 2.06, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('48', 0, 0, 't5', 'deeds', 'gems', 1, 1e300, 2.08, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('49', 0, 0, 't5', 'deeds', 'runes', 1, 1e300, 2.1, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('50', 0, 0, 't6', 'deeds', 'stone', 1, 1e700, 2.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('51', 0, 0, 't6', 'deeds', 'wood', 1, 1e700, 2.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('52', 0, 0, 't6', 'deeds', 'copper', 1, 1e700, 2.22, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('53', 0, 0, 't6', 'deeds', 'bronze', 1, 1e700, 2.22, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('54', 0, 0, 't6', 'deeds', 'iron', 1, 1e700, 2.24, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('55', 0, 0, 't6', 'deeds', 'steel', 1, 1e700, 2.24, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('56', 0, 0, 't6', 'deeds', 'silver', 1, 1e700, 2.26, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('57', 0, 0, 't6', 'deeds', 'gold', 1, 1e700, 2.26, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('58', 0, 0, 't6', 'deeds', 'gems', 1, 1e700, 2.28, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('59', 0, 0, 't6', 'deeds', 'runes', 1, 1e700, 2.3, 1, 0.0, 0.0, 0.0, 0.0, false);

new Foremen('00', 0, 'none', 1.0, 1.0, 1.0);
new Foremen('01', 0, 'stone', 1.0, 1.0, 1.0);
new Foremen('02', 0, 'wood', 1.0, 1.0, 1.0);
new Foremen('03', 0, 'copper', 1.0, 1.0, 1.0);
new Foremen('04', 0, 'bronze', 1.0, 1.0, 1.0);
new Foremen('05', 0, 'iron', 1.0, 1.0, 1.0);
new Foremen('06', 0, 'steel', 1.0, 1.0, 1.0);
new Foremen('07', 0, 'silver', 1.0, 1.0, 1.0);
new Foremen('08', 0, 'gold', 1.0, 1.0, 1.0);
new Foremen('09', 0, 'gems', 1.0, 1.0, 1.0);
new Foremen('10', 0, 'runes', 1.0, 1.0, 1.0);

new Producer('60', 0, 0, 'potential', 'potential', 'potential', 1, 1, 1.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('61', 0, 0, 'potential', 'potential', 'potential', 1, 100, 1.4, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('62', 0, 0, 'potential', 'potential', 'potential', 1, 1e4, 1.6, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('63', 0, 0, 'potential', 'potential', 'potential', 1, 1e6, 1.8, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('64', 0, 0, 'potential', 'potential', 'potential', 1, 1e10, 2.0, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('65', 0, 0, 'potential', 'potential', 'potential', 1, 1e20, 2.2, 1, 0.0, 0.0, 0.0, 0.0, false);

new Producer('70', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1, 1.2, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('71', 0, 0, 'divinity', 'divinity', 'divinity', 1, 100, 1.4, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('72', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e4, 1.6, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('73', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e6, 1.8, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('74', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e10, 2.0, 1, 0.0, 0.0, 0.0, 0.0, false);
new Producer('75', 0, 0, 'divinity', 'divinity', 'divinity', 1, 1e20, 2.2, 1, 0.0, 0.0, 0.0, 0.0, false);

new TotalProducers(0, 0.0, 't1');
new TotalProducers(0, 0.0, 't2');
new TotalProducers(0, 0.0, 't3');
new TotalProducers(0, 0.0, 't4');
new TotalProducers(0, 0.0, 't5');
new TotalProducers(0, 0.0, 't6');
new TotalProducers(0, 0.0, 'stone');
new TotalProducers(0, 0.0, 'wood');
new TotalProducers(0, 0.0, 'copper');
new TotalProducers(0, 0.0, 'bronze');
new TotalProducers(0, 0.0, 'iron');
new TotalProducers(0, 0.0, 'steel');
new TotalProducers(0, 0.0, 'silver');
new TotalProducers(0, 0.0, 'gold');
new TotalProducers(0, 0.0, 'gems');
new TotalProducers(0, 0.0, 'runes');