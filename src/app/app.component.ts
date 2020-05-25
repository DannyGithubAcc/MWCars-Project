import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ImportService } from './import.service';
import { GsapServiceService } from './gsap-service.service';
import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mwcarsproject';
  imgIndex = 1;
  cb: (target: string, duration: number) => void;
  home$ = this.importService.myJsonData$.pipe(
    tap(result => console.log(result)),
    // catchError(err => {
    //   return of(null);
    // })
  );

  constructor(private gsapService: GsapServiceService,
              private render: Renderer2,
              private importService: ImportService) {}

  ngOnInit() {
    // this.fOpeningAnim();
    // this.slideOpen();
    // this.importService.getDataFromJson('001').subscribe(x => console.log(x));
  }



  public fOpeningAnim() {
    const anim = this.gsapService;
    const mainContainer = '.h-routlet__wrap';
    anim.fFadeFrom(mainContainer, 1, 0, 1);
  }

  public slideContOpen(e: boolean) {
    console.log(e); // Remove
    const mainCont = '.line';
    this.gsapService.slideOpenFromTtoB(mainCont, 1, 650, 0.3, this.slideTxtIn);
  }

  public slideTxtIn() {
    console.log(this);
    const slideInHeader = '.line h2';
    this.cb(slideInHeader, .4);
    console.log('CB CALLED FROM COMPONENT');
  }

  public slideImages(num: number) {
    const trackindex = this.imgIndex += num;
    console.log('CHECK HIER: ' + trackindex);
    this.getImages(trackindex);
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

