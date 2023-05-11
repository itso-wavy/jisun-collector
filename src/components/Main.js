class Main {
  data = [];
  // favorite = new Set();

  constructor({ $target, tags }) {
    const $main = document.createElement('main');
    $main.className = 'main';

    this.searchInput = new SearchInput({
      $main,
      tags,
      onSearch: tagName => {
        this.loadingShimmer.show();
        api.fetchJisuns().then(res => {
          this.setState(res.filter(i => i.tag.includes(tagName)));
          this.loadingShimmer.hide();
        });
      },
    });

    this.favorites = new Favorites({
      $target: this.searchInput,
      onClickFav: () => {
        this.loadingShimmer.show();
        api.fetchJisuns().then(res => {
          this.setState(res.filter(i => i.isFavorite));
          this.loadingShimmer.hide();
        });
      },
    });

    this.loadingShimmer = new LoadingShimmer({ $main });

    this.searchResult = new SearchResult({
      $main,
      initialData: this.data,
      onClickItem: item => {
        this.imageInfo.setState({
          item,
          visible: true,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $main,
      data: {
        image: null,
        visible: false,
      },
      onClickHeart: data => {
        api.updateFavorites(data).then(item => {
          this.imageInfo.setState({
            item,
            visible: true,
          });
        });
      },
    });

    $target.append($main);
  }

  setState(nextData) {
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
