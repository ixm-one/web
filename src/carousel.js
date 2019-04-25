function register (id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}

let current = 0;

function switchTo (idx) {
  let slides = Array.from(document.getElementById('slides').childNodes);
  if (idx < 0) { current = slides.length - 1; }
  else if (idx >= slides.length) { current = 0; }
  else { current = idx; }
  const hide = (element) => { delete element.dataset.visible; };
  const show = (element) => { element.dataset.visible = true; };
  slides.forEach(hide);
  show(slides[current]);
  
}

register('prev', () => switchTo(current -= 1));
register('next', () => switchTo(current += 1));