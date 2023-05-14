class Empty {
  isEmpty = false;

  constructor($target) {
    const $empty = document.createElement('div');
    $empty.className = 'empty';
    $target.append($empty);

    this.$empty = $empty;

    this.render();
  }

  show(isEmpty) {
    this.setState(isEmpty);
  }

  setState(isEmpty) {
    this.isEmpty = isEmpty;
    this.render();
  }

  render() {
    this.$empty.innerHTML = `
    <h3>결과 없음</h3>
    <p>세상에 그런 지선님은 없답니다!😂</p>
    `;

    if (this.isEmpty) {
      this.$empty.style.display = 'flex';
    } else {
      this.$empty.style.display = 'none';
    }
  }
}

export default Empty;
