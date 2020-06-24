import { GsapServiceService } from './gsap-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mwcarsproject';
  imgIndex = 1;
  cb: (target: string, target2: string, target3: string, duration: number) => void;

  constructor(private gsapService: GsapServiceService) {}

  ngOnInit() {
  }

  public fOpeningAnim() {
    const anim = this.gsapService;
    const mainContainer = '.h-routlet__wrap';
    anim.fFadeFrom(mainContainer, 1, 0, 1);
  }

  public slideContOpen() {
    const mainCont = '.line';
    this.gsapService.slideOpenFromTtoB(mainCont, .8, 650, 0.3, this.slideTxtIn);
    // this.slideTxtIn creates a context of app.component.ts reference from gsapService
  }

  public slideTxtIn() {
    const slideInHeader = '.line h2';
    const slideInDesc = '.line .descriptiontext';
    const imgwalkin = '.line .imgrow';
    // context cb method returned from gsapService
    this.cb(slideInHeader, slideInDesc, imgwalkin, .4);
  }

  public slideImages(num: number) {
    const trackindex = this.imgIndex += num;
    this.getImages(trackindex);
  }

  public nieuwbouwInfo(e: string, opacity: number, position: number) {
    const nwbouwInfoWindow = '.nieuwbouwinformationwindow';
    this.gsapService.nieuwbouwInfoAnim(nwbouwInfoWindow, .8, 0);
  }

  public getImages(indexFImages: number) {
    const images: any = document.querySelectorAll('.imgsliderSlide');
    if (indexFImages > images.length || indexFImages === 8) {
      this.imgIndex = 1;
      indexFImages = 1;
    }
    if (indexFImages < 1 ) {
      this.imgIndex = 7;
      indexFImages = 7;
    }

    for (const image of images) {
      image.style.display = 'none';
    }
    images[indexFImages].style.display = 'block';
  }
}

