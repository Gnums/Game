let leadership_tree;
let leadership_info_box;
let leadership_info;
let adornments_tree;
let adornments_info_box;
let adornments_info;
let aptitude_tree;
let aptitude_info_box;
let aptitude_info;
let lesser_god_tree;
let lesser_god_info_box;
let lesser_god_info;
let tick = {speed: 1000, multi: 1};
let move = {zoom_levels: [1.0, 0.75, 0.5], zoom_level: 0, x: 0, y: 0};
let total_coin_ps = new Decimal(0);
let buy_amt = [{tier: 't1', amt: 1},
  {tier: 't2', amt: 1},
  {tier: 't3', amt: 1},
  {tier: 't4', amt: 1},
  {tier: 't5', amt: 1},
  {tier: 't6', amt: 1},
  {tier: 'foremen', amt: 1},
  {tier: 'potential', amt: 1},
  {tier: 'divinity', amt: 1}];

$(document).ready(function() {
  leadership_tree = SVG().addTo('#leadership_wrapper').size(1800, 1800);
  leadership_info_box = leadership_tree.image('images/talent_box.png');
  leadership_info = leadership_tree.text('Blank Talent Text').addClass('talent_info');
  adornments_tree = SVG().addTo('#adornments_wrapper').size(1400, 1400);
  adornments_info_box = adornments_tree.image('images/talent_box.png');
  adornments_info = adornments_tree.text('Blank Talent Text').addClass('talent_info');
  aptitude_tree = SVG().addTo('#aptitude_wrapper').size(1800, 1800);
  aptitude_info_box = aptitude_tree.image('images/talent_box.png');
  aptitude_info = aptitude_tree.text('Blank Talent Text').addClass('talent_info');
  lesser_god_tree = SVG().addTo('#lesser_god_wrapper').size(1800, 1600);
  lesser_god_info_box = lesser_god_tree.image('images/talent_box.png');
  lesser_god_info = lesser_god_tree.text('Blank Talent Text').addClass('talent_info');
  updateProducerCost();

  window.setInterval(function() {
    producer_array.forEach(p => {
      p.coin_gain_ps = (p.num.plus(p.bonus)).mul(p.multi).mul(p.bought_multi);
      if (p.multi > 0)
        p.coin_gain_ps = p.coin_gain_ps.mul(p.multi);
      if (p.tier === 't1')
        coins.num = coins.num.plus(p.coin_gain_ps);
    });

    updateResources();
    updateHtml();
    updateProducerCost();
  }, tick.speed);
});


