class StyleTheme {
  theme = null;

  constructor({ $header, themes }) {
    const $styleTheme = document.createElement('aside');
    const $themeList = document.createElement('ul');
    const $label = document.createElement('button');
    $label.textContent = 'choose your theme: ';
    $label.className = 'themes-label';
    $styleTheme.className = 'style-theme';
    $themeList.className = 'theme-list';

    for (let themeName of themes) {
      const $themeItem = document.createElement('li');
      const $themeBtn = document.createElement('button');
      $themeBtn.className = 'theme-btn';
      $themeBtn.textContent = themeName;
      $themeBtn.value = themeName;
      $themeBtn.addEventListener('click', e => {
        this.setState(e.target.value);
        e.target.setAttribute('click', true);
      });

      $themeItem.append($themeBtn);
      $themeList.append($themeItem);
    }

    this.$label = $label;
    this.$themeList = $themeList;
    this.$styleTheme = $styleTheme;
    $styleTheme.append(this.$label);
    $styleTheme.append(this.$themeList);
    $header.append($styleTheme);

    this.render();

    window.addEventListener('resize', () => {
      matchMedia('(width < 600px)').matches
        ? (this.$themeList.classList.add('hide'),
          (this.$label.disabled = false))
        : (this.$themeList.classList.remove('hide'),
          (this.$label.disabled = true));
    });

    this.$label.addEventListener('click', () => {
      this.$themeList.classList.toggle('hide');
    });
  }

  setState(themeName) {
    this.theme = themeName;
    localStorage.setItem('theme', this.theme);
    document.body.setAttribute('theme', this.theme);
  }

  render() {
    const themeSetting = localStorage.getItem('theme');

    this.theme = themeSetting
      ? themeSetting
      : window.matchMedia('(prefers-color-scheme)').matches
      ? 'light'
      : 'dark';

    this.setState(this.theme);

    matchMedia('(width < 600px)').matches &&
      this.$themeList.classList.add('hide');
  }
}

export default StyleTheme;
