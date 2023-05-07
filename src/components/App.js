console.log('app is running!');

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;
    const tags = ['cute', 'pretty', 'serious'];

    this.searchInput = new SearchInput({
      $target,
      tags,
      onSearch: tagName => {
        api.fetchJisuns().then(res => {
          this.data = res.filter(i => i.tag.includes(tagName));
          this.setState(this.data);
        });
      },
      onClickFav: () => {
        this.data = JSON.parse(localStorage.getItem('favorite'));
        this.setState(this.data);
      },
    });

    this.resultList = new ResultList({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          image,
          visible: true,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.resultList.setState(nextData);
  }
}
