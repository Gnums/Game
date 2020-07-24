function buyBuilding(tag) {
  let prod = producer_array.find(p => p.tag == tag);

  if (buy_amt[buy_amt.findIndex(i => i.tier == prod.tier)].amt == 'max') {
    let c = getMax(prod);
    currency_array.find(a => a.type == prod.bought_with).num = currency_array.find(a => a.type == prod.bought_with).num.minus(prod.base.mul(1 - prod.base_reduc).mul(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num).minus(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num.plus(c)))).div(1 - (prod.exp_base - prod.exp_base_reduc)));
    prod.num = prod.num.plus(c);
    buyCheckTotalProducers(prod, c);
  }
  else if (currency_array.find(a => a.type == prod.bought_with).num.greaterThanOrEqualTo(getCost(prod))) {
    currency_array.find(a => a.type == prod.bought_with).num = currency_array.find(a => a.type == prod.bought_with).num.minus(getCost(prod));
    prod.num = prod.num.plus(buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt);
    buyCheckTotalProducers(prod, buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt);
  }
}
