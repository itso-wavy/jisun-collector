import { init } from '../router/router';
import Header from './Header';
import Main from './Main';
import HiddenPage from './HiddenPage';
import Footer from './Footer';

class App {
  $target = null;

  constructor($target) {
    this.$target = $target;
    const themes = ['light', 'dark', 'color'];
    const tags = ['cute', 'pretty', 'serious', 'dull'];

    init(this.render);
    this.render($target, themes, tags);
    window.addEventListener('popstate', this.render);
  }

  render($target, themes, tags) {
    const { pathname } = location;

    if (pathname === '/') {
      this.header = new Header({ $target, themes });
      this.main = new Main({ $target, tags });
      this.footer = new Footer({ $target });
    } else if (pathname === '/hidden_page') {
      this.hiddenPage = new HiddenPage({ $target });
    }
  }
}

export default App;
