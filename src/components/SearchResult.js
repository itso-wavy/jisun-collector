class SearchResult {
  data = [];
  onClick = null;

  constructor({ $main, initialData, onClick }) {
    const $searchResult = document.createElement('section');
    const $readerTitle = document.createElement('h2');
    const $resultList = document.createElement('ul');
    $readerTitle.textContent = 'List of image you chose';
    $readerTitle.className = 'sr-only';
    $searchResult.className = 'search-result';

    this.$resultList = $resultList;
    $searchResult.append($readerTitle);
    $searchResult.append(this.$resultList);
    $main.append($searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$resultList.innerHTML = this.data
      .map(
        item => `<li class="result-item">
      <img src=${item.url} alt='${item.tag} jisun'>
    </li>`
      )
      .join('');

    this.$resultList.querySelectorAll('.result-item').forEach((item, index) =>
      item.addEventListener('click', () => {
        this.onClick(this.data[index]);
      })
    );
  }
}
