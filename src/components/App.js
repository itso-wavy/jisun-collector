console.log('app is running!');

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
    });
    this.resultList = new ResultList({
      $target,
    });
    this.imageInfo = new ImageInfo({
      $target,
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    // this.resultList.setState(nextData)
  }
}
