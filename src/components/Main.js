class Main {
  data = [];

  constructor({ $target, tags }) {
    const $main = document.createElement('main');
    $main.className = 'main';

    this.searchInput = new SearchInput({
      $main,
      tags,
      onSearch: tagName => {
        this.loadingShimmer.show();
        api.fetchJisuns().then(res => {
          this.data = res.filter(i => i.tag.includes(tagName));
          this.setState(this.data);
          this.loadingShimmer.hide();
        });
      },
      onClickFav: () => {
        this.data = JSON.parse(localStorage.getItem('favorite'));
        this.setState(this.data);
      },
    });

    this.loadingShimmer = new LoadingShimmer({ $main });

    this.searchResult = new SearchResult({
      $main,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          image,
          visible: true,
        });
      },
    });

    // 아이템 fav 클릭시 로컬스토리지 저장
    this.imageInfo = new ImageInfo({
      $main,
      data: {
        image: null,
        visible: false,
      },
    });

    $target.append($main);
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
