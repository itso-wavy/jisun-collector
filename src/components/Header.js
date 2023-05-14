import StyleTheme from './header/StyleTheme';

class Header {
  constructor({ $target, themes }) {
    const $header = document.createElement('header');
    const $h1 = document.createElement('h1');
    $h1.textContent = 'JISUN COLLECTOR';
    $header.className = 'header';

    $header.append($h1);

    this.$styleTheme = new StyleTheme({ $header, themes });

    $target.append($header);
  }
}

export default Header;
