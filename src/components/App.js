console.log('app is running!');

class App {
  $target = null;

  constructor($target) {
    this.$target = $target;
    const themes = ['light', 'dark', 'color'];
    const tags = ['cute', 'pretty', 'serious'];

    this.header = new Header({ $target, themes });
    this.main = new Main({ $target, tags });
    this.footer = new Footer({ $target });
  }
}
