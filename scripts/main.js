(() => {
  const parallaxFrame = document.querySelector('.parallax-frame');
  const parallaxWrapperLeft = document.querySelector('.parallax-wrapper-left');
  const parallaxWrapperRight = document.querySelector('.parallax-wrapper-right');

  window.addEventListener('mousemove', (ev) => {
    let x = ev.clientX / window.innerWidth * 50;
    let y = ev.clientY / window.innerHeight * 50;

    parallaxWrapperLeft.style.transform = `translate(${-x + 50}px, ${-y + 50}px)`
    parallaxWrapperRight.style.transform = `translate(${x - 15}px, ${y - 350}px)`
  })
})();