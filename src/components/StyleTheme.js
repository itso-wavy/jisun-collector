class StyleTheme {
  theme = null;

  constructor({ $header, themes }) {
    const $styleTheme = document.createElement('aside');
    const $themeList = document.createElement('ul');
    const $label = document.createElement('button');
    $label.disabled = true;
    $label.textContent = 'choose your theme: ';
    $label.className = 'themes-label';
    $styleTheme.className = 'style-theme';
    $themeList.className = 'theme-list';

    this.$label = $label;
    this.$themeList = $themeList;
    this.$styleTheme = $styleTheme;
    $styleTheme.append($label);

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

    $styleTheme.append($themeList);
    $header.append($styleTheme);

    window.addEventListener('resize', () => {
      matchMedia('(width < 600px)').matches
        ? ($themeList.classList.add('hide'), ($label.disabled = false))
        : ($themeList.classList.remove('hide'), ($label.disabled = true));
    });

    $label.addEventListener('click', () => {
      this.$themeList.classList.toggle('hide');
    });

    this.render();
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

    document.body.setAttribute('theme', this.theme);
  }
}
