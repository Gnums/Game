function setBoughtMulti(producer) {
  if (producer.num >= 100)
    producer.bought_multi = 8 * (2 * producer.num / 100);
  if (producer.num >= 50 && producer.num < 100)
    producer.bought_multi = 8;
  else if (producer.num >= 25 && producer.num < 50)
    producer.bought_multi = 4;
  else if (producer.num >= 10 && producer.num < 25)
    producer.bought_multi = 2;
}

function buyCheckTotalProducers(prod, amt) {
  if (prod.tag < '60')
    total_producer_array.find(a => a.type == prod.tier).num = total_producer_array.find(a => a.type == prod.tier).num.plus(amt);
  total_producer_array.find(a => a.type == prod.type).num = total_producer_array.find(a => a.type == prod.type).num.plus(amt);
}

function checkTotalProducers() {
  producer_array.forEach(prod => {
    if (prod.tag < '60')
      total_producer_array.find(a => a.type == prod.tier).num = total_producer_array.find(a => a.type == prod.tier).num.plus(amt);
    total_producer_array.find(a => a.type == prod.type).num = total_producer_array.find(a => a.type == prod.type).num.plus(amt);
  });
}

function getCost(prod) {
  return Decimal.floor(prod.base.mul(1 - prod.base_reduc).mul(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num).minus(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num.plus(buy_amt[buy_amt.findIndex(i => i.tier === 't1')].amt)))).div(1 - (prod.exp_base - prod.exp_base_reduc)));
}

function getMax(prod) {
  return new Decimal(Decimal.floor(new Decimal(Decimal.log(Decimal.pow((prod.exp_base - prod.exp_base_reduc), prod.num).minus(currency_array.find(a => a.type == prod.bought_with).num.mul((1 - (prod.exp_base - prod.exp_base_reduc)) / (prod.base * (1 - prod.base_reduc)))), (prod.exp_base - prod.exp_base_reduc))).minus(prod.num)));
}

function getTickSpeed() {

}
