import { routeChange } from '../router/router';

class HiddenPage {
  data = [];

  constructor({ $target }) {
    const $hiddenpage = document.createElement('div');
    $hiddenpage.className = 'hidden-page';
    $hiddenpage.innerHTML = `
      <div class="sw-crawl">
        <div class="sw-crawl-episode-number">Who is prof.JISUN</div>
        <div class="sw-crawl-episode-title">
        <p>대한민국의 범죄심리학자</p>
        <p>그알 하드코어의 상징</p>
        <p>wavy 공인 영잘알</p>
        </div>
        <div class="sw-crawl-episode-text">
        <p>본업할 때는 냉철하고 포스 있지만, 실제 성격은 엄청 해맑고 귀엽다.</p>
        <p>그녀는 아이돌 중 뉴이스트, 카카오프렌즈 중 라이언과 어피치를 좋아한다.</p>
        <p>스트레스 해소법은 요리, 빵 먹기, '편의점 추천 컵라면' 같은 걸 검색해서 살펴보고 먹어보는 것.</p>
        <p>또 남편과 부루마블을 하고 넷플릭스를 보는 게 소소한 행복이라고 한다.</p>
        <p>영화 시나리오 작가가 되는 것이 꿈이라고 언급한 적이 있는데 최근 범죄 영화의 시나리오를 집필하고 있다는 소식을 전했다.</p>
        <p>출처: 그알 유투브</p>
        </div>
        <button id="back-btn">BACK</button>
      </div>
    `;
    this.$target = $target;

    $target.append($hiddenpage);

    const $backBtn = document.getElementById('back-btn');
    $backBtn.addEventListener('click', () => routeChange('/'));

    this.renderSky();
  }

  renderSky() {
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const $star = document.createElement('div');
      $star.className = 'star';
      const xy = getRandomPosition();
      $star.style.top = xy[0] + 'px';
      $star.style.left = xy[1] + 'px';
      this.$target.append($star);
    }

    function getRandomPosition() {
      const y = window.innerWidth;
      const x = window.innerHeight;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
    }
  }
}

export default HiddenPage;
