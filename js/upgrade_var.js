function Upgrade(tag, type, cost, bought, multi, affects_array, affects, affects_type, info) {
    this.tag = tag;
    this.type = type;
    this.cost = cost;
    this.bought = bought;
    this.multi = multi;
    this.affects_array = affects_array;
    this.affects = affects;
    this.affects_type = affects_type;
    this.info = info;
    upgrade_array.push(this);
}

function UpgradeInfinite(tag, type, num, cost, growth, multi, affects_array, affects_type, affects, info) {
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

new Upgrade('00', 'coins', 1e5, false, 250, producer_array, '00', 'tag',
    'Increase T1 Stone Producer multiplier by 250');
new Upgrade('01', 'coins', 1e6, false, 250, producer_array,  '01', 'tag',
    'Increase T1 Wood Producer multiplier by 250');
new Upgrade('02', 'coins', 1e7, false, 250, producer_array, '02', 'tag',
    'Increase T1 Copper Producer multiplier by 250');
new Upgrade('03', 'coins', 1e8, false, 250, producer_array,'03', 'tag',
    'Increase T1 Bronze Producer multiplier by 250');
new Upgrade('04', 'coins', 1e9, false, 100, currency_array,  'coins', 'type',
    'Increase Coin multiplier by 100');
new Upgrade('05', 'coins', 1e10, false, 0.01, producer_array, ['t1'], 'tier',
    'T1 Producers are boosted by 1% for each other same Producer');
new Upgrade('06', 'coins', 1e11, false, .85, tick, '', '',
    'Reduce tick interval by 15%');
new Upgrade('07', 'coins', 1e12, false, 4, resource_array, 'all', 'type',
    'Increase Resource multiplier by 4');
new Upgrade('08', 'coins', 1e13, false, 250, producer_array, '04', 'tag',
    'Increase T1 Iron Producer multiplier by 250');
new Upgrade('09', 'coins', 1e14, false, 250, producer_array, '05', 'tag',
    'Increase T1 Steel Producer multiplier by 250');
new Upgrade('10', 'coins', 1e15, false, 250, producer_array, '06', 'tag',
    'Increase T1 Silver Producer multiplier by 250');
new Upgrade('11', 'coins', 1e16, false, 250, producer_array, '07', 'tag',
    'Increase T1 Gold Producer multiplier by 250');
new Upgrade('12', 'coins', 1e17, false, 250, producer_array, '08', 'tag',
    'Increase T1 Gems Producer multiplier by 250');
new Upgrade('13', 'coins', 1e18, false, 250, producer_array, '09', 'tag',
    'Increase T1 Runes Producer multiplier by 250');
new Upgrade('14', 'coins', 1e19, false, 10, resource_array, 'all', 'type',
    'Reduce Resource Divisors by 10');
new Upgrade('15', 'coins', 1e20, false, 0.05, total_producer_array, ['t1'], 'tier',
    'Increase multipliers for all T1 Producers by 0.5% for each other');
new Upgrade('16', 'coins', 1e30, false, 0.9, producer_array, 't1', 'tier',
    'Reduce Base cost for T1 Producers by 10%');
new Upgrade('17', 'coins', 1e40, false, 0.015, producer_array, 't1', 'tier',
    'T1 Producers are boosted by 1.5% for each other same Producer');
new Upgrade('18', 'coins', 1e50, false, 250, producer_array, '00', 'tag',
    'Increase T1 Stone Producer multiplier by 250');
new Upgrade('19', 'coins', 1e60, false, 250, producer_array, '01', 'tag',
    'Increase T1 Wood Producer multiplier by 250');
new Upgrade('20', 'coins', 1e70, false, 250, producer_array, '02', 'tag',
    'Increase T1 Copper Producer multiplier by 250');
new Upgrade('21', 'coins', 1e100, false, 250, producer_array, '03', 'tag',
    'Increase T1 Bronze Producer multiplier by 250');
new Upgrade('22', 'coins', 1e150, false, 0.1, producer_array, 't1', 'tier',
    'Reduce Exponential Base for T1 Producers by 0.1');
new Upgrade('23', 'coins', 1e200, false, 0.85, tick, '', '',
    'Reduce tick interval by 15%');

new Upgrade('30', 'stone', 1e5, false, 250, producer_array, '00', 'tag',
    'Increase T1 Stone Producer multiplier by 250');
new Upgrade('31', 'stone', 1e10, false, 0.01, resource_array, 'stone', 'type',
    'T1 Stone Producers gain a multiplier based on Stone on hand');
new Upgrade('32', 'stone', 1e15, false, 4, resource_array, 'stone', 'type',
    'Increase Stone multiplier by 4');
new Upgrade('33', 'stone', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('34', 'stone', 1e30, false, 0.04, resource_array, 'stone', 'type',
    'T1 Stone Producers gain a multiplier based on Stone on hand');
new Upgrade('35', 'stone', 1e40, false, 10, resource_array, 'stone', 'type',
    'Reduce Stone divisor by 10');
new Upgrade('36', 'stone', 1e50, false, 0.01, total_producer_array, ['stone'], 'type',
    'All Stone Producers gain a multiplier based on each other');
new Upgrade('37', 'stone', 1e60, false, 0.05, producer_array, 'stone', 'type',
    'Reduce exponential bases for all Stone Producers by 0.05');

new Upgrade('40', 'wood', 1e5, false, 250, producer_array, '01', 'tag',
    'Increase T1 Wood Producer multiplier by 250');
new Upgrade('41', 'wood', 1e10, false, 0.01, resource_array, 'wood', 'type',
    'T1 Wood Producers gain a multiplier based on Wood on hand');
new Upgrade('42', 'wood', 1e15, false, 4, resource_array, 'wood', 'type',
    'Increase Wood multiplier by 4');
new Upgrade('43', 'wood', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('44', 'wood', 1e30, false, 0.04, resource_array, 'wood', 'type',
    'T1 Wood Producers gain a multiplier based on Wood on hand');
new Upgrade('45', 'wood', 1e40, false, 10, resource_array, 'wood', 'type',
    'Reduce Wood divisor by 10');
new Upgrade('46', 'wood', 1e50, false, 0.01, total_producer_array, ['wood'], 'type',
    'All Wood Producers gain a multiplier based on each other');
new Upgrade('47', 'wood', 1e60, false, 0.05, producer_array, 'wood', 'type',
    'Reduce exponential bases for all Wood Producers by 0.05');

new Upgrade('50', 'copper', 1e5, false, 250, producer_array, '02', 'tag',
    'Increase T1 Copper Producer multiplier by 250');
new Upgrade('51', 'copper', 1e10, false, 0.01, resource_array, 'copper', 'type',
    'T1 Copper Producers gain a multiplier based on Copper on hand');
new Upgrade('52', 'copper', 1e15, false, 4, resource_array, 'copper', 'type',
    'Increase Copper multiplier by 4');
new Upgrade('53', 'copper', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('54', 'copper', 1e30, false, 0.04, resource_array, 'copper', 'type',
    'T1 Copper Producers gain a multiplier based on Copper on hand');
new Upgrade('55', 'copper', 1e40, false, 10, resource_array, 'copper', 'type',
    'Reduce Copper divisor by 10');
new Upgrade('56', 'copper', 1e50, false, 0.01, total_producer_array, ['copper'], 'type',
    'All Copper producers gain a multiplier based on each other');
new Upgrade('57', 'copper', 1e60, false, 0.05, producer_array, 'copper', 'type',
    'Reduce exponential bases for all Copper Producers by 0.05');

new Upgrade('60', 'bronze', 1e5, false, 250, producer_array, '03', 'tag',
    'Increase T1 Bronze Producer multiplier by 250');
new Upgrade('61', 'bronze', 1e10, false, 0.01, resource_array, 'bronze', 'type',
    'T1 Bronze Producers gain a multiplier based on Bronze on hand');
new Upgrade('62', 'bronze', 1e15, false, 4, resource_array, 'bronze', 'type',
    'Increase Bronze multiplier by 4');
new Upgrade('63', 'bronze', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('64', 'bronze', 1e30, false, 0.04, resource_array, 'bronze', 'type',
    'T1 Bronze Producers gain a multiplier based on Bronze on hand');
new Upgrade('65', 'bronze', 1e40, false, 10, resource_array, 'bronze', 'type',
    'reduce Bronze divisor by 10');
new Upgrade('66', 'bronze', 1e50, false, 0.01, total_producer_array, ['bronze'], 'type',
    'All Bronze Producer gain a multiplier based on each other');
new Upgrade('67', 'bronze', 1e60, false, 0.05, producer_array, 'bronze', 'type',
    'Reduce exponential bases for all Bronze Producers by 0.05');

new Upgrade('70', 'iron', 1e5, false, 250, producer_array, '04', 'tag',
    'Increase T1 Iron Producer multiplier by 250');
new Upgrade('71', 'iron', 1e10, false, 0.01, resource_array, 'iron', 'type',
    'T1 Iron Producers gain a multiplier based on Iron on hand');
new Upgrade('72', 'iron', 1e15, false, 4, resource_array, 'iron', 'type',
    'Increase Iron multiplier by 4');
new Upgrade('73', 'iron', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('74', 'iron', 1e30, false, 0.04, resource_array, 'iron', 'type',
    'T1 Iron Producers gain a multiplier based on Iron on hand');
new Upgrade('75', 'iron', 1e40, false, 10, resource_array, 'iron', 'type',
    'Reduce Iron divisor by 10');
new Upgrade('76', 'iron', 1e50, false, 0.01, total_producer_array, ['iron'], 'type',
    'All Iron Producers gain a multiplier based on each other');
new Upgrade('77', 'iron', 1e60, false, 0.05, producer_array, 'iron', 'type',
    'Reduce exponential bases for all Iron Producers by 0.05');

new Upgrade('80', 'steel', 1e5, false, 250, producer_array, '05', 'tag',
    'Increase T1 Steel producer multiplier by 250');
new Upgrade('81', 'steel', 1e10, false, 0.01, resource_array, 'steel', 'type',
    'T1 Steel producers gain a multiplier based on Steel on hand');
new Upgrade('82', 'steel', 1e15, false, 4, resource_array, 'steel', 'type',
    'Increase Steel multiplier by 4');
new Upgrade('83', 'steel', 1e20, false, 0.9, tick, '', '',
    'Reduce tick interval by 10%');
new Upgrade('84', 'steel', 1e30, false, 0.04, resource_array, 'steel', 'type',
    'T1 Steel producers gain a multiplier based on Steel on hand');
new Upgrade('85', 'steel', 1e40, false, 10, resource_array, 'steel', 'type',
    'Reduce Steel divisor by 10');
new Upgrade('86', 'steel', 1e50, false, 0.01, total_producer_array, ['steel'], 'type',
    'All Steel producers gain a multiplier based on each other');
new Upgrade('87', 'steel', 1e60, false, 0.05, producer_array, 'steel', 'type',
    'Reduce exponential bases for all Steel producers by 0.05');

new Upgrade('90', 'deeds', 1, false, 100, currency_array, 'coins', 'type',
    'Increase coin multiplier by 100');
new Upgrade('91', 'deeds', 1, false, 4, resource_array, '', '',
    'Increase resource multiplier by 4');
new Upgrade('92', 'deeds', 1, false, 1, deed_boost, 0, 'tier',
    'Gain a multiplier to all T1 producers based on unspent Deeds');
new Upgrade('93', 'deeds', 1, false, 1, relocation_boost, 0, 'tier',
    'Gain a multiplier to all T1 producers based on Relocations');
new Upgrade('94', 'deeds', 1, false, 0.75, producer_array, 't1', 'tier',
    'Base cost of all T1 producers reduced by 25%');
new Upgrade('95', 'deeds', 1, false, 0.05, producer_array, 't1', 'tier',
    'Exponential base of all T1 producers reduced by 0.05');
new Upgrade('96', 'deeds', 1, false, 100, producer_array, 't2', 'tier',
    'Increase multiplier for all T2 producers by 100');
new Upgrade('97', 'deeds', 1, false, 0.05, total_producer_array, ['t1'], 'type',
    'T1 producers gain a multiplier for each other T1 producer');
new Upgrade('98', 'deeds', 1, false, 1, deed_boost, 1, 'tier',
    'Gain a multiplier to all T2 producers based on unspent Deeds');
new Upgrade('99', 'deeds', 1, false, 0.75, producer_array, 't2', 'tier',
    'Base cost of all T2 producers reduced by 25%');
new Upgrade('100', 'deeds', 1, false, 0.01, total_producer_array, ['stone', 'wood'], 'type',
    'Stone and Wood producers gain a multiplier for each other producer of the same type');
new Upgrade('101', 'deeds', 1, false, 0.02, producer_array, ['t2'], 'tier',
    'T2 producers gain a multiplier for each of the same type');
new Upgrade('102', 'deeds', 1, false, 0.1, producer_array, 't2', 'tier',
    'Exponential base of all T2 producers reduced by 0.1');
new Upgrade('103', 'deeds', 1, false, 100, producer_array, 't3', 'tier',
    'Increase multiplier for all T3 producers by 100');
new Upgrade('104', 'deeds', 1, false, 1, relocation_boost, 1, 'tier',
    'Gain a multiplier to all T2 producers based on Relocations');
new Upgrade('105', 'deeds', 1, false, 1, deed_boost, 2, 'tier',
    'Gain a multiplier to all T3 producers based on unspent Deeds');
new Upgrade('106', 'deeds', 1, false, 0.75, producer_array, 't3', 'tier',
    'Base cost of all T3 producers reduced by 25%');
new Upgrade('107', 'deeds', 1, false, 0.01, total_producer_array, ['copper', 'bronze'],
    'Copper and Bronze producers gain a multiplier for each other producer of the same type');
new Upgrade('108', 'deeds', 1, false, 0.015, producer_array, ['t3'], 'tier',
    'T3 producers gain a multiplier for each of the same type');
new Upgrade('109', 'deeds', 1, false, 0.1, producer_array, 't3', 'tier',
    'Exponential base of all T3 producers reduced by 0.1');
new Upgrade('110', 'deeds', 1, false, 100, producer_array, 't4', 'tier',
    'Increase multiplier for all T4 producers by 100');
new Upgrade('111', 'deeds', 1, false, 0.01, total_producer_array, ['iron', 'steel'],
    'Iron and Steel producers gain a multiplier for each other producer of the same type');
new Upgrade('112', 'deeds', 1, false, 1, relocation_boost, 2, 'tier',
    'Gain a multiplier to all T3 producers based on Relocations');
new Upgrade('113', 'deeds', 1, false, 1, deed_boost, 3, 'tier',
    'Gain a multiplier to all T4 producers based on unspent Deeds');
new Upgrade('114', 'deeds', 1, false, 0.75, producer_array, 't4', 'tier',
    'Base cost of all T4 producers reduced by 25%');
new Upgrade('115', 'deeds', 1, false, 0.01, producer_array, ['t4'], 'tier',
    'T4 producers gain a multiplier for each of the same type');
new Upgrade('116', 'deeds', 1, false, 0.01, total_producer_array, ['silver', 'gold'], 'type',
    'Silver and Gold producers gain a multiplier for each of the same type');
new Upgrade('117', 'deeds', 1, false, 0.1, producer_array, 't4', 'tier',
    'Exponential base of all T4 producers reduced by 0.1');
new Upgrade('118', 'deeds', 1, false, 100, producer_array, 't5', 'tier',
    'Increase multiplier for all T5 producers by 100');
new Upgrade('119', 'deeds', 1, false, 1, relocation_boost, 3, 'tier',
    'Gain a multiplier to all T4 producers based on Relocations');
new Upgrade('120', 'deeds', 1, false, 1, deed_boost, 4, 'tier',
    'Gain a multiplier to all T5 producers based on unspent Deeds');
new Upgrade('121', 'deeds', 1, false, 0.75, producer_array, 't5', 'tier',
    'Base cost of all T5 producers reduced by 25%');
new Upgrade('122', 'deeds', 1, false, 0.0075, producer_array, ['t5'], 'tier',
    'T5 producers gain a multiplier for each of the same type');
new Upgrade('123', 'deeds', 1, false, 0.01, resource_array, 'silver', 'type',
    'T1 Silver producers gain a multiplier based on Silver on hand');
new Upgrade('124', 'deeds', 1, false, 0.1, producer_array, 't5', 'tier',
    'Exponential base of all T5 producers reduced by 0.1');
new Upgrade('125', 'deeds', 1, false, 100, producer_array, 't6', 'tier',
    'Increase multiplier for all T6 producers by 100');
new Upgrade('126', 'deeds', 1, false, 0.025, total_producer_array, ['gems', 'runes'], 'type',
    'Gems and Runes producers gain a multiplier for each of the same type');
new Upgrade('127', 'deeds', 1, false, 1, relocation_boost, 4, 'tier',
    'Gain a multiplier to all T5 producers based on Relocations');
new Upgrade('128', 'deeds', 1, false, 1, deed_boost, 5, 'tier',
    'Gain a multiplier to all T6 producers based on unspent Deeds');
new Upgrade('129', 'deeds', 1, false, 0.75, producer_array, 't6', 'tier',
    'Base cost of all T6 producers reduced by 25%');
new Upgrade('130', 'deeds', 1, false, 0.005, producer_array, ['t6'], 'tier',
    'T6 producers gain a multiplier for each of the same type');
new Upgrade('131', 'deeds', 1, false, 0.1, producer_array, 't6', 'tier',
    'Exponential base of all T6 producers reduced by 0.1');
new Upgrade('132', 'deeds', 1, false, 0.025, resource_array, 'gold', 'type',
    'T1 Gold producers gain a multiplier based on Gold on hand');
new Upgrade('133', 'deeds', 1, false, 1, relocation_boost, 5, 'tier',
    'Gain a multiplier to all T6 producers based on Relocations');

new UpgradeInfinite('0', 'stone', 0, 0, 0, 0.005, producer_array, 'all',
    'Reduce base cost for all Producers by 0.5%');
new UpgradeInfinite('0', 'wood', 0, 0, 0, 0.01, tick, '',
    'Reduce tick interval by 1%');
new UpgradeInfinite('0', 'copper', 0, 0, 0, 0.025, currency_array, 'coins',
    'Increase coin multiplier by 2.5%');
new UpgradeInfinite('0', 'bronze', 0, 0, 0, 0.025, resource_array, 'all',
    'Increase all resource multipliers by 2.5%');
new UpgradeInfinite('0', 'iron', 0, 0, 0, 0.01, resource_array, 'all',
    'Reduce all resource divisors by 1%');
new UpgradeInfinite('0', 'steel', 0, 0, 0, 0.01, producer_array,['t2', 't3', 't4', 't5', 't6'],
    'Increase production for Tiers 2 through 6 by 1%');