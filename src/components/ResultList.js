class ResultList {
  data = [];
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    const $resultList = document.createElement('ul');
    $resultList.className = 'resultList';
    this.$resultList = $resultList;
    $target.append(this.$resultList);

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
