class ImageInfo {
  data = null;
  onClickHeart = null;

  constructor({ $main, data, onClickHeart }) {
    const $imageInfo = document.createElement('div');
    $imageInfo.className = 'image-info';
    this.$imageInfo = $imageInfo;
    $main.append($imageInfo);

    this.data = data;
    this.onClickHeart = onClickHeart;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  closeImageInfo() {
    this.data.visible = false;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { likes, source, tag, url } = this.data.item;

      this.$imageInfo.innerHTML = `
      <div class="info-wrapper">
      <button id="close">X</button>
        <img class="info-img" src=${url} alt='${tag} jisun'>
        <div class="text-box">
          <p>출처: ${source}</p>
          <strong id="like"><span class="heart">❤︎</span>${likes}</strong>
        </div>
      </div>
      `;

      this.$imageInfo.style.visibility = 'visible';

      document
        .querySelector('#close')
        .addEventListener('click', () => this.closeImageInfo());

      this.$imageInfo.addEventListener(
        'click',
        e => e.target.className === 'image-info' && this.closeImageInfo()
      );

      document.addEventListener(
        'keydown',
        e => e.key === 'Escape' && this.closeImageInfo()
      );

      document.querySelector('#like').addEventListener(
        'click',
        e => console.dir(e.target, e.srcElement)
        // this.onClickHeart(e.target.parentElement)

        // srcElement
        // target
      );
    } else {
      this.$imageInfo.style.visibility = 'hidden';
    }
  }
}
