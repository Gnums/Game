$(document).ready(function() {
drawAdornmentsTree();
updateProducerCost();
});

window.setInterval(function() {
  updateResources();
  updateHtml();
}, tick.speed);
