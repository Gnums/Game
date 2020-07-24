function setTab(activeTab, activeWindow) {
  $('.' + previous_tab).hide();
  $('.' + previous_window).hide();

  $('.' + activeTab).show();
  $('.' + activeWindow).show();

  previous_tab = activeTab;
  previous_window = activeWindow;
}

function showSubTabs(subTab) {
  $('.' + subTab).toggle();
}

function talentTreeZoom(event) {
  let dy = event.deltaY;

  if (dy < 0) {
    if (scale_factor_index < 3) {
      scale_factor_index += 1;
      $('#talent_tree').css('width', String(1000 / scale_factor[scale_factor_index]));
  }}
  else if (dy > 0) {
    if (scale_factor_index > 0) {
      scale_factor_index -= 1;
      $('#talent_tree').css('width', String(1000 / scale_factor[scale_factor_index]));
  }}
  $('map').imageMapResize();
}

function talentTreeClick(event) {
  y = event.pageY;
  x = event.pageX;
}

function talentTreeMove(event, tab) {
  let dy = (event.pageY - y) / 100;
  let dx = (event.pageX - x) / 100;

  console.log(dy);
  console.log(dx);

  $('.' + tab + 'talent_tree_wrapper').scrollTop($('.' + tab + 'talent_tree_wrapper').scrollTop() + dy);
  $('.' + tab + 'talent_tree_wrapper').scrollLeft($('.' + tab + 'talent_tree_wrapper').scrollLeft() + dx);
}
