function buyBuilding(tag) {
  let prod = producer_array.find(p => p.tag === tag);

  if (buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt === 'max') {
    let c = getMax(prod);
    currency_array.find(a => a.type === prod.bought_with).num = currency_array.find(a => a.type === prod.bought_with).num.minus(prod.base.mul(1 - prod.base_reduc).mul(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num).minus(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num.plus(c)))).div(1 - (prod.exp_base - prod.exp_base_reduc)));
    prod.num = prod.num.plus(c);
    buyCheckTotalProducers(prod, c);
    setBoughtMulti(prod);
  }
  else if (currency_array.find(a => a.type === prod.bought_with).num.greaterThanOrEqualTo(getCost(prod))) {
    currency_array.find(a => a.type === prod.bought_with).num = currency_array.find(a => a.type === prod.bought_with).num.minus(getCost(prod));
    prod.num = prod.num.plus(buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt);
    buyCheckTotalProducers(prod, buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt);
    setBoughtMulti(prod);
  }
}

function toggleAuto(tag) {
  let p = producer_array.find(p => p.tag === tag);

    p.auto_buy ? p.auto_buy = false : p.auto_buy = true;
}

function autoBuy() {
  producer_array.forEach(function(p) {
    if (p.auto_buy) {
      let c = getMax(p);
      currency_array.find(a => a.type === p.bought_with).num = currency_array.find(a => a.type === p.bought_with).num.minus(p.base.mul(1 - p.base_reduc).mul(Decimal.pow((p.exp_base - p.exp_base_reduc), p.num).minus(Decimal.pow((p.exp_base - p.exp_base_reduc), p.num.plus(c)))).div(1 - (p.exp_base - p.exp_base_reduc)));
      p.num = p.num.plus(c);
      buyCheckTotalProducers(p, c);
    }});
}

function assignForemen(tag) {

}

function getMulti(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);

    if (upg.affects_type === 'tag')
      upg.affects_array.find(p => p.tag === upg.affects).multi *= upg.multi;
    else if (upg.affects_type === 'tier')
      upg.affects_array.filter(p => p.tier === upg.affects).forEach(e => e.multi *= upg.multi);
    else if (upg.affects_type === 'type')
      upg.affects_array.filter(p => p.type === upg.affects).forEach(e => e.multi *= upg.multi);
}

function getMultiPer(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);


}

function getCostReduc(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);


}

function getExpReduc(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);


}

function getDivisor(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);


}

function getBoost(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);


}

function getSpeed(tag) {
  let upg = upgrade_array.find(upg => upg.tag === tag);

    tick.speed *= upg.multi;
}

function getSpeedTalent(tag) {
 alert('Hi');
}

function getMultiTalent(tag) {
  alert('Hi');
}

function getResTalent(tag) {
  alert('Hi');
}