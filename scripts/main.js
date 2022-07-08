(() => {
  function parralaxBackground() {
    const parallaxBg = document.querySelector('.mouse-parallax-bg');

    window.addEventListener('mousemove', (ev) => {
      let x = ev.clientX / window.innerWidth;
      let y = ev.clientY / window.innerHeight;
  
      parallaxBg.style.transform = `translate(-${Math.round(x * 50)}px, -${Math.round(y * 50)}px)`
    })
  }
  parralaxBackground();

  function liveLine() {
    const playerInfo = document.querySelector('.player-info');
    let trackName = 'Автор - Название песни.'.split('');
    let latency = 50;

    trackName.forEach(el => {
      setTimeout(function() {
        playerInfo.textContent += el;
      }, latency)
      latency += 50
    })
  }
  liveLine();

  function renderVolumeSteps() {
    const volumeSteps = document.querySelector('.volume-steps');

    for(i = 0; i < 10; i++) {
      volumeSteps.innerHTML += `
      <div class="volume-step"></div>`
    }
  }
  renderVolumeSteps()
})();