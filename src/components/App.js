import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App {
  $target = null;

  constructor($target) {
    this.$target = $target;
    const themes = ['light', 'dark', 'color'];
    const tags = ['cute', 'pretty', 'serious', 'dull'];

    this.header = new Header({ $target, themes });
    this.main = new Main({ $target, tags });
    this.footer = new Footer({ $target });
  }
}

export default App;
