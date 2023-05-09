class Footer {
  constructor({ $target }) {
    const $footer = document.createElement('footer');
    $footer.className = 'footer';
    $footer.innerHTML = `so cute jisun<img class="icon" src="./favicon.png" alt="icon"><br> made by <a href="https://github.com/itso-wavy">wavy</a>`;

    $target.append($footer);
  }
}
