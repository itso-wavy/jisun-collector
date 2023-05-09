class ImageInfo {
  data = null;

  constructor({ $main, data }) {
    const $imageInfo = document.createElement('div');
    $imageInfo.className = 'image-info';
    this.$imageInfo = $imageInfo;
    $main.append($imageInfo);

    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { likes, source, tag, url } = this.data.image;
      const func = () => {
        !this.data.visible;
      };

      this.$imageInfo.innerHTML = `
      <div class="info-wrapper">
      <button id="close" onclick="">X</button>
        <img class="info-img" src=${url} alt='${tag} jisun'>
        <div class="text-box">
          <p>출처: ${source}</p>
          <strong onclick=""><!-- <img src="favicon.png" alt="좋아요"> --><span class="heart">❤︎ </span>${likes}</strong>
        </div>
      </div>
      `;

      this.$imageInfo.style.visibility = 'visible';
    } else {
      this.$imageInfo.style.visibility = 'hidden';
    }
  }
}
