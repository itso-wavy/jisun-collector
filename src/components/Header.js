import { routeChange } from '../router/router';
import StyleTheme from './header/StyleTheme';

class Header {
  constructor({ $target, themes }) {
    const $header = document.createElement('header');
    const $h1 = document.createElement('h1');
    const $btnToRouter = document.createElement('button');
    $btnToRouter.textContent = 'JISUN COLLECTOR';
    $btnToRouter.className = 'router-btn';
    $header.className = 'header';

    $h1.append($btnToRouter);
    $header.append($h1);

    this.$styleTheme = new StyleTheme({ $header, themes });

    $target.append($header);

    $btnToRouter.addEventListener('click', () => routeChange('/hidden_page'));
  }
}

export default Header;
