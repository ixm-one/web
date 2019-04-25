function register (id, fn) {
  document.getElementById(id).addEventListener('click', fn);
}

class Theme {
  get current () { return localStorage.theme; }
  set current (theme) {
    let html = document.documentElement;
    if (!theme) {
      delete html.dataset.theme;
      delete localStorage.theme;
    } else {
      html.dataset.theme = theme;
      localStorage.theme = theme;
    }
  }
}

function swapTheme () {
  let theme = new Theme();
  if (!theme.current) { theme.current = 'dark'; }
  else { theme.current = null; }
}

register('dark-mode', swapTheme);