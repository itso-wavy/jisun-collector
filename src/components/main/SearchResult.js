import Empty from './Empty';

class SearchResult {
  data = [];
  onClickItem = null;

  constructor({ $main, initialData, onClickItem }) {
    const $searchResult = document.createElement('section');
    const $readerTitle = document.createElement('h2');
    const $resultList = document.createElement('ul');
    $readerTitle.textContent = 'List of image you chose';
    $readerTitle.className = 'sr-only';
    $searchResult.className = 'search-result';

    this.$readerTitle = $readerTitle;
    this.$resultList = $resultList;
    $searchResult.append(this.$readerTitle);
    const $empty = new Empty($searchResult);
    $searchResult.append(this.$resultList);
    $main.append($searchResult);

    this.$empty = $empty;
    this.data = initialData;
    this.onClickItem = onClickItem;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.$empty.show(!nextData.length ? true : false);
    this.render();
  }

  render() {
    if (this.data.length) {
      this.$resultList.innerHTML = this.data
        .map(
          item => `<li class="result-item">
                    <img src=${item.url} alt='${item.tag} jisun'>
                    <div class="preview"><span class="heart ${
                      item.isFavorite ? 'fav' : ''
                    }">❤︎</span></div>
                  </li>`
        )
        .join('');

      this.$resultList.querySelectorAll('.result-item').forEach((item, index) =>
        item.addEventListener('click', () => {
          this.onClickItem(this.data[index]);
        })
      );
    } else {
      this.$resultList.innerHTML = this.data;
    }
  }
}

export default SearchResult;
