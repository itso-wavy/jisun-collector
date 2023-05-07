class ImageInfo {
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement('div');
    $imageInfo.className = 'imageInfo';
    this.$imageInfo = $imageInfo;
    $target.append($imageInfo);

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

      this.$imageInfo.innerHTML = `
      <div class="info-wrapper">
        <img src=${url} alt='${tag} jisun'>
        <div>
          <p>출처: ${source}</p>
          <p><img src="favicon.png" alt="좋아요"> ${likes}</p>
        </div>
      </div>
      `;

      this.$imageInfo.style.display = 'block';
    } else {
      this.$imageInfo.style.display = 'none';
    }
  }
}
