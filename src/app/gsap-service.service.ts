import { Injectable } from '@angular/core';
import { gsap, Power2} from 'gsap/all';

@Injectable({
  providedIn: 'root'
})
export class GsapServiceService {

  nieuwbouwOverlayActive = true;
  nwbouwTl = gsap.timeline({});
  animIsActive = false;

  constructor() { }

  public fFadeFrom(e, tym, alfa, dlay) {
    gsap.from(e, { duration: tym, opacity: alfa, ease: Power2, delay: dlay });
  }

  public slideOpenFromTtoB(e: string, tym: number, growth: number, dlay: number, cb: () => void): void {
    const tl = gsap.timeline({});
    tl.fromTo(e, {height: 1},
      {duration: tym, height: growth, delay: dlay,  ease: 'expo.out', onComplete: cb, callbackScope: this});
  }

  public nieuwbouwInfoAnim(e: string, myOpacity: number, myPosition: number) {
    if (this.nieuwbouwOverlayActive) {
      this.nieuwbouwOverlayActive = false;
      this.nwbouwTl.to(e, {opacity: myOpacity, x: myPosition, duration: .3, display: 'flex'});
    } else {
      this.nieuwbouwOverlayActive = true;
      this.nwbouwTl.to(e, {opacity: 0, x: 0, duration: .1, display: 'none'});
    }
  }

  public cb(e: string, e2: string, e3: string, tym: number) {
    const textAnim = gsap.timeline({});
    textAnim.fromTo(e, {x: -100, opacity: 0}, {x: 0, duration: tym, opacity: 1, ease: Power2.easIn })
    .fromTo(e2, {x: -100, opacity: 0 }, {x: 0, duration: tym, opacity: 1, delay: .2, ease: 'back' })
    .fromTo(e3, {x: -100, opacity: 0}, {x: 0, opacity: 1, stagger: .3, delay: - .5});
  }

  public mobNieuwbouwMenuSlide(e: string, tym: number, open: boolean) {
    const tl = gsap.timeline({});
    if (open === true) {
      tl.to(e, {height: 0, duration: tym, ease: Power2.easIn });
    } else {
      tl.to(e, {height: 1000, duration: tym, ease: Power2.easIn });
    }
  }

  public mobLeaseMenuSlide(e: string, tym: number, open: boolean) {
    const tl = gsap.timeline({});
    if (open === true) {
      tl.to(e, {height: 0, duration: tym, ease: Power2.easIn });
    } else {
      tl.to(e, {height: 600, duration: tym, ease: Power2.easIn });
    }
  }

  public mobCalcMenuSlide(e: string, tym: number, open: boolean) {
    const tl = gsap.timeline({});
    if (open === true) {
      tl.to(e, {height: 0, duration: tym, ease: Power2.easIn });
    } else {
      tl.to(e, {height: 600, duration: tym, ease: Power2.easIn });
    }
  }

  public mobImportMenuSlide(e: string, tym: number, open: boolean) {
    const tl = gsap.timeline({});
    if (open === true) {
      tl.to(e, {height: 0, duration: tym, ease: Power2.easIn });
    } else {
      tl.to(e, {height: 'auto', duration: tym, ease: Power2.easIn });
    }
  }

  public mobVoorraadMenuSlide(e: string, tym: number, open: boolean) {
    const tl = gsap.timeline({});
    if (open === true) {
      tl.to(e, {height: 0, duration: tym, ease: Power2.easIn });
    } else {
      tl.to(e, {height: 500, duration: tym, ease: Power2.easIn });
    }
  }

}
