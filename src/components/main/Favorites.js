class Favorites {
  data = [];
  onClick = null;

  constructor({ $target, onClickFav }) {
    const $favorites = document.createElement('button');
    $favorites.className = 'favorites';
    $favorites.textContent = 'favorites';
    $favorites.addEventListener('click', onClickFav);

    $target.$searchInput.append($favorites);
  }

  setState(nextData) {
    this.data.push(nextData);
    localStorage.setItem('favorites', JSON.stringify(this.data));
  }
}
