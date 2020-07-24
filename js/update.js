function updateResources() {
  currency_array.forEach(cur => {
    $('#' + cur.type + '_amount').text(cur.num);
  });
  resource_array.forEach(res => {
    $('#' + res.type + '_amount').text(res.num);
  });
}

function setBuyAmt(tier, amt) {
  buy_amt[buy_amt.findIndex(i => i.tier === tier)].amt = amt;
  updateProducerCost();
}

function updateProducerCost() {
  producer_array.forEach(prod => {
    if (buy_amt[buy_amt.findIndex(i => i.tier === prod.tier)].amt == 'max')
      $('#producer_btn_' + prod.tag).text(getMax(prod));
    else
     $('#producer_btn_' + prod.tag).text(Decimal.floor(getCost(prod)));
  });
}

function updateHtml() {
  producer_array.forEach(prod => {
    if (prod.tier == 't1') {
      let res = resource_array.find(r => r.type == prod.type);
      $('#producer_info_' + prod.tag).text(prod.num.toPrecision(3) + ' + (' + prod.bonus.toPrecision(3) + ') ' + (res.coin_gain_ps.div(res.divisor).mul(res.multi) > .01 ? res.coin_gain_ps.div(res.divisor).mul(res.multi).toPrecision(3) : 0) + ' ' + res.type + '/s and ' + res.coin_gain_ps.toPrecision(3) + ' coins/s ' + res.coin_gain_ps.div(total_coin_ps).mul(100).toPrecision(3) + '%');
  }
    else if (prod.tier == 'potential') {
      $('#producer_info_' + prod.tag).text();
    }
    else if (prod.tier == 'divinity') {
      $('#producer_info_' + prod.tag).text();
    }
    else {
      $('#producer_info_' + prod.tag).text();
    }
  });
}
