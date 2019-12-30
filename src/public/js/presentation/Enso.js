import React, { useEffect } from 'react';
import anime from 'animejs';

const Enso = props => {

  function animate() {
	const wrapperEl = document.querySelector('#anime');
    const numberOfEls = 90;
    const duration = 6000;
    const delay = duration / numberOfEls;

    let tl = anime.timeline({
      duration: delay,
      complete: function() { tl.restart(); }
    });

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;
      const hue = Math.round(360 / numberOfEls * i);
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      tl.add({
        begin: function() {
          anime({
            targets: el,
            backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
            rotate: [rotate + 'deg', rotate + 10 +'deg'],
            translateY: [translateY + '%', translateY + 10 + '%'],
            scale: [1, 1.25],
            easing: 'easeInOutSine',
            direction: 'alternate',
            duration: duration * .1
          });
        }
      });
      wrapperEl.appendChild(el);
    };

    for (let i = 0; i < numberOfEls; i++) createEl(i);
  };

  function ticker() {
	console.log('Add tracks to begin playing music');
	// TODO: When player is paused, display pause sign, otherwise display message
  }

  useEffect( () => { 
	// Animate enso when music is playing
	if (props.status === 1) {
	  console.log('starting animation');
	  animate();
	} else if (props.status === 0 || props.status === 2) {
	  // Otherwise remove Enso 
	  const elem = document.getElementById('anime');
	  while (elem.firstChild) {
	    elem.removeChild(elem.firstChild);
	  }
	}
  });


  return (
	<div id='enso'>
	  <div></div>
	  <div id='anime'></div>
	</div>
  )
}

export default Enso;
