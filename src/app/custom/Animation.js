import gsap, { Back } from 'gsap/gsap-core';
import selectors from './selectors';

export default class Animation {
  constructor() {
    this._tl = gsap.timeline();

    this._tl.pause();
  }

  setupAnimation() {
    this._tl.to(selectors.list, { y: -100, duration: 0.4, id: 'listUp' });
    this._tl.to(selectors.list, { ease: 'power1.in', y: 0, duration: 0.3, id: 'listDown' });

    this._tl.to(selectors.listItems[0], { y: 100, opacity: 0, id: 'listItem0' });
    this._tl.to(selectors.listItems[1], { y: 150, opacity: 0, id: 'listItem1' }, '<');
    this._tl.to(selectors.listItems[2], { y: 200, opacity: 0, id: 'listItem2' }, '<');

    this._tl.to(selectors.truckBtnBg, { scale: 1.1, transformOrigin: '50%', duration: 0.3, id: 'truckBtnScaleUp' });
    this._tl.to(selectors.truckBtnBg, { scale: 1, duration: 0.3, ease: 'power1.in', id: 'truckBtnScaleDown' });

    this._tl.to(selectors.containerParts, { opacity: 1, duration: 0, id: 'containerParts' });
    this._tl.to(selectors.container, { opacity: 1, id: 'container' });

    this._tl.to(selectors.backWheel1, { opacity: 1, id: 'backWheel1' });
    this._tl.to(selectors.backWheel2, { opacity: 1, id: 'backWheel2' }, '<');
    this._tl.to(selectors.backWheelBack1, { opacity: 1, id: 'backWheelBack1' }, '<');
    this._tl.to(selectors.backWheelBack2, { opacity: 1, id: 'backWheelBack2' }, '<');

    this._tl.to(selectors.frontGroup, { opacity: 1, id: 'frontGroup' });
    this._tl.to(selectors.frontWheel1, { opacity: 1, id: 'frontWheel1' }, '<');
    this._tl.to(selectors.frontWheel2, { opacity: 1, id: 'frontWheel2' }, '<');
    this._tl.to(selectors.frontWheelsBack, { opacity: 1, id: 'frontWheelsBack' }, '<');

    this._tl.to(selectors.truck, { x: 500, opacity: 0, ease: Back.easeIn.config(4), duration: 1.5, id: 'truckMovement' });
    this._tl.to(selectors.shippedLabel, { opacity: 1, duration: 1, id: 'shippedLabel' });
  }

  playAnimation() {
    if (this._tl.paused()) this._tl.resume();
    else this._tl.restart();
  }

  pauseAnimation() {
    this._tl.pause();
  }

  reverseAnimation() {
    this._tl.reverse();
  }

  async init() {
    this.setupAnimation();

    [selectors.truckBtn, selectors.playBtn].forEach((button) => {
      button.addEventListener('click', this.playAnimation.bind(this));
    });

    selectors.pauseBtn.addEventListener('click', this.pauseAnimation.bind(this));
    selectors.reverseBtn.addEventListener('click', this.reverseAnimation.bind(this));
  }
}
