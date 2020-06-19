import { tap } from 'rxjs/operators';
import { ImportService } from './import.service';
import { GsapServiceService } from './gsap-service.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mwcarsproject';
  imgIndex = 1;
  cb: (target: string, target2: string, target3: string, duration: number) => void;
  home$ = this.importService.myJsonData$.pipe(
    tap(result => console.log(result))
  );

  constructor(private gsapService: GsapServiceService,
              private render: Renderer2,
              private importService: ImportService) {}

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
    console.log(this, 'HIEROOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    // this.slideTxtIn creates a context of app.component.ts reference from gsapService
  }

  public slideTxtIn() {
    console.log(this);
    const slideInHeader = '.line h2';
    const slideInDesc = '.line .descriptiontext';
    const imgwalkin = '.line .imgrow';
    // context cb method returned from gsapService
    this.cb(slideInHeader, slideInDesc, imgwalkin, .4);
    console.log('CB CALLED FROM COMPONENT');
  }

  public slideImages(num: number) {
    const trackindex = this.imgIndex += num;
    console.log('CHECK HIER: ' + trackindex);
    this.getImages(trackindex);
  }

  public nieuwbouwInfo(e: string, opacity: number, position: number) {
    const nwbouwInfoWindow = '.nieuwbouwinformationwindow';
    this.gsapService.nieuwbouwInfoAnim(nwbouwInfoWindow, .8, 0);
  }

  public getImages(indexFImages: number) {
    const images: any = document.querySelectorAll('.imgsliderSlide');
    console.log(indexFImages, ' indeximages BEFORE IFS');
    if (indexFImages > images.length || indexFImages === 8) {
      console.log(images.length);
      this.imgIndex = 1;
      indexFImages = 1;
    }
    if (indexFImages < 1 ) {
      this.imgIndex = 7;
      indexFImages = 7;
    }
    console.log(indexFImages, ' indeximages AFTER IFS');

    for (const image of images) {
      image.style.display = 'none';
    }
    images[indexFImages].style.display = 'block';
  }
}

