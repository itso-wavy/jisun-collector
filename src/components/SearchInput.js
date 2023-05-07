class SearchInput {
  constructor({ $target, tags, onSearch, onClickFav }) {
    const $searchList = document.createElement('ul');
    $searchList.className = 'searchList';

    for (let tagName of tags) {
      const $btn = document.createElement('button');
      this.$btn = $btn;
      this.$btn.textContent = tagName;
      this.$btn.addEventListener('click', () => {
        onSearch(tagName);
      });
      $searchList.append(this.$btn);
    }

    const $favBtn = document.createElement('button');
    $favBtn.className = 'fav-btn';
    $favBtn.textContent = 'favorite';
    $favBtn.addEventListener('click', onClickFav);

    $searchList.append($favBtn);
    $target.append($searchList);
    console.log('SearchInput created.', this);
  }
}
