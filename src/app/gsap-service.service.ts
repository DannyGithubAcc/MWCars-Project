import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { gsap, Power2, Elastic, Circ} from 'gsap/all';
import { BehaviorSubject } from 'rxjs';
import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class GsapServiceService {

  animIsActive = false;

  // private sendSlideOpenSource = new BehaviorSubject<boolean>(false);
  // sendSlideOpen$ = this.sendSlideOpenSource.asObservable();

  constructor() { }

  // contentSlide(openClose: boolean) {
  //   this.sendSlideOpenSource.next(openClose);
  // }

  public fFadeFrom(e, tym, alfa, dlay) {
    gsap.from(e, { duration: tym, opacity: alfa, ease: Power2, delay: dlay });
  }

  public slideOpenFromTtoB(e: string, tym: number, growth: number, dlay: number, cb: () => void): void {
    const tl = gsap.timeline({});
    tl.fromTo(e, {height: 1},
      {duration: tym, height: growth, delay: dlay,  ease: 'expo.out', onComplete: cb, callbackScope: this});
    // tl.play();
  }

  // public cb() {
  //   console.log('CALLBACK FROM SERVICE!!');
  // }

  public cb(e: string, e2: string, tym: number) {
    const textAnim = gsap.timeline({});
    console.log('CB FROM GSAP 3 Service');
    textAnim.fromTo(e, {x: -100, opacity: 0}, {x: 0, duration: tym, opacity: 1, ease: Power2.easIn })
    .fromTo(e2, {x: -100, opacity: 0 }, {x: 0, duration: tym, opacity: 1, delay: .2, ease: 'back' });
  }

  public imgSlideAnim(e: string, num: number) {
    if (num === 1) {
      console.log('DATA: ' + ' Num: ' + num);
      gsap.to(e, { x: '+=1000', duration: 1.5, opacity: '1', ease: 'expo.out'});
  } else {
    console.log('DATA: ' + ' Num: ' + num);
    gsap.to(e, { x: '-=1000', duration: 1.5, opacity: '1', ease: 'expo.out' });
  }
}
  public imgSlideAnimtest2(e: string) {
    gsap.to(e, {x: 0, y: 0, ease: 'expo.out'});
  }
}
