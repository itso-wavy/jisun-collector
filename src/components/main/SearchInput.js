class SearchInput {
  constructor({ $main, tags, onSearch, onClickFav }) {
    const $searchInput = document.createElement('section');
    $searchInput.className = 'search-input';
    this.$searchInput = $searchInput;

    $main.append(this.$searchInput);

    this.render(tags, onSearch, onClickFav);
  }

  render(tags, onSearch, onClickFav) {
    const $readerTitle = document.createElement('h2');
    const $tagList = document.createElement('ul');
    $readerTitle.textContent = 'choose image tag you want';
    $readerTitle.className = 'sr-only';
    $tagList.className = 'tag-list';

    for (let tagName of tags) {
      const $li = document.createElement('li');
      const $btn = document.createElement('button');
      $btn.className = 'tag-btn';
      this.$btn = $btn;
      this.$btn.textContent = tagName;
      this.$btn.addEventListener('click', () => {
        onSearch(tagName);
      });
      $li.append(this.$btn);
      $tagList.append($li);
    }

    const $favBtn = document.createElement('button');
    $favBtn.className = 'fav-btn';
    $favBtn.textContent = 'favorite';
    $favBtn.addEventListener('click', onClickFav);

    this.$searchInput.append($readerTitle);
    this.$searchInput.append($tagList);
    this.$searchInput.append($favBtn);
  }
}
