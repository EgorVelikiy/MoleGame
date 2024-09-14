
document.addEventListener('DOMContentLoaded', () => {
  const widget = new holeWidget(document.querySelector('.hole-game'));
  window.widget = widget;
  widget.startGame()
})