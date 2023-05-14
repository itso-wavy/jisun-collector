class LoadingShimmer {
  state = null;

  constructor({ $main }) {
    const $loadingShimmer = document.createElement('div');
    $loadingShimmer.className = 'loading-shimmer';
    this.$loadingShimmer = $loadingShimmer;
    $main.append(this.$loadingShimmer);

    this.state = { show: false };
    this.render();
  }

  show() {
    this.setState({
      show: true,
    });
  }

  hide() {
    this.setState({
      show: false,
    });
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.$loadingShimmer.innerHTML = '';

    if (this.state.show) {
      const $ul = document.createElement('ul');
      const arr = [];

      for (let i = 0; i < 3; i++) {
        const $li = `
      <li class="loading-item">
        <div class="frame"></div>
      </li>`;
        arr.push($li);
      }

      $ul.innerHTML = arr.join('');
      this.$loadingShimmer.append($ul);
    }
  }
}

export default LoadingShimmer;
