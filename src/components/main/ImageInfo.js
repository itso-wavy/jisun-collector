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
      const { likes, source, tag, url, isFavorite } = this.data.item;

      this.$imageInfo.innerHTML = `
      <div class="info-wrapper">
      <button id="close">X</button>
        <img class="info-img" src=${url} alt='${tag} jisun'>
        <div class="text-box">
          <p>출처: ${source}</p>
          <button id="like"><span class="heart ${isFavorite ? 'fav' : ''}"
          >❤︎</span>${isFavorite ? likes + 1 : likes}</button>
        </div>
      </div>
      `;

      this.$imageInfo.style.visibility = 'visible';

      /** 모달 닫기 이벤트 */
      this.$imageInfo.addEventListener(
        'click',
        e =>
          (e.target.className === 'image-info' || e.target.id === 'close') &&
          this.closeImageInfo()
      );

      document.addEventListener(
        'keydown',
        e => e.key === 'Escape' && this.closeImageInfo()
      );

      /** 즐겨찾기 추가, 해제 */
      const likeBtn = document.querySelector('#like');
      likeBtn.addEventListener('click', () => {
        likeBtn.querySelector('.heart').classList.toggle('fav');
        this.onClickHeart({ ...this.data.item, isFavorite: !isFavorite });
      });
    } else {
      this.$imageInfo.style.visibility = 'hidden';
    }
  }
}
