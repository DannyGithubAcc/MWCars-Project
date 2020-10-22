import { GsapServiceService } from './gsap-service.service';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MW Cars premium occasions';
  imgIndex = 1;
  cb: (target: string, target2: string, target3: string, duration: number) => void;
  mobileViewActive = false;
  mobileNieuwbouwBlockOpen = false;
  mobileLeaseBlockOpen = false;
  mobileCalcBlockOpen = false;
  mobileImportBlockOpen = false;
  mobileVoorraadBlockOpen = false;

  constructor(private gsapService: GsapServiceService,
              private viewscroller: ViewportScroller) {}

  ngOnInit() {
    this.slideContOpen();
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

  public nieuwbouwInfo() {
    const nwbouwInfoWindow = '.nieuwbouwinformationwindow';
    this.gsapService.nieuwbouwInfoAnim(nwbouwInfoWindow, .8, 0);
  }

  public getImages(indexFImages: number) {
    const images: any = document.querySelectorAll('.imgsliderSlide');
    const trackindex = this.imgIndex += indexFImages;

    if (trackindex > images.length - 1) {
      this.imgIndex = 0;
    }
    if (trackindex < 0 ) {
      this.imgIndex = 7;
    }

    for (const image of images) {
      image.style.display = 'none';
    }
    images[this.imgIndex].style.display = 'block';
  }

  public mobilegetImages(indexFImages: number) {
    const images: any = document.querySelectorAll('.mobileimgsliderSlide');
    const trackindex = this.imgIndex += indexFImages;

    if (trackindex > images.length - 1) {
      this.imgIndex = 0;
    }
    if (trackindex < 0 ) {
      this.imgIndex = 7;
    }

    for (const image of images) {
      image.style.display = 'none';
    }
    images[this.imgIndex].style.display = 'block';
  }

  public openMobileMenu() {
    const mobMenu: any = document.querySelector('.mobilemenu');
    if (this.mobileViewActive === false) {
      mobMenu.style.display = 'block';
      this.mobileViewActive = true;
    } else {
      mobMenu.style.display = 'none';
      this.mobileViewActive = false;
    }
  }

  public openNieuwbouwMenu() {
    const mobNieuwbouwMenu: any = document.querySelector('.mobile-nieuwbouw-nav');
    if (this.mobileNieuwbouwBlockOpen) {
      this.gsapService.mobNieuwbouwMenuSlide(mobNieuwbouwMenu, .4, this.mobileNieuwbouwBlockOpen);
      this.mobileNieuwbouwBlockOpen = false;
    } else {
      this.gsapService.mobNieuwbouwMenuSlide(mobNieuwbouwMenu, .4, this.mobileNieuwbouwBlockOpen);
      this.mobileNieuwbouwBlockOpen = true;
    }
  }

  public openfinancialleaseMenu() {
    const mobLeaseMenu: any = document.querySelector('.mobileleasewrapper');
    if (this.mobileLeaseBlockOpen) {
      this.gsapService.mobLeaseMenuSlide(mobLeaseMenu, .4, this.mobileLeaseBlockOpen);
      this.mobileLeaseBlockOpen = false;
    } else {
      this.gsapService.mobLeaseMenuSlide(mobLeaseMenu, .4, this.mobileLeaseBlockOpen);
      this.mobileLeaseBlockOpen = true;
    }
  }

  public opencalculatorleaseMenu() {
    const mobCalcMenu: any = document.querySelector('.mobilecalcwrapper');
    if (this.mobileCalcBlockOpen) {
      this.gsapService.mobCalcMenuSlide(mobCalcMenu, .4, this.mobileCalcBlockOpen);
      this.mobileCalcBlockOpen = false;
    } else {
      this.gsapService.mobCalcMenuSlide(mobCalcMenu, .4, this.mobileCalcBlockOpen);
      this.mobileCalcBlockOpen = true;
    }
  }

  public openImportMenu() {
    const mobImportMenu: any = document.querySelector('.mobileimportwrapper');
    if (this.mobileImportBlockOpen) {
      this.gsapService.mobImportMenuSlide(mobImportMenu, .4, this.mobileImportBlockOpen);
      this.mobileImportBlockOpen = false;
    } else {
      this.gsapService.mobImportMenuSlide(mobImportMenu, .4, this.mobileImportBlockOpen);
      this.mobileImportBlockOpen = true;
    }
  }
  public openVoorraadMenu() {
    const mobVoorraadMenu: any = document.querySelector('.mobile-voorraad-nav');
    if (this.mobileVoorraadBlockOpen) {
      this.gsapService.mobVoorraadMenuSlide(mobVoorraadMenu, .4, this.mobileVoorraadBlockOpen);
      this.mobileVoorraadBlockOpen = false;
    } else {
      this.gsapService.mobVoorraadMenuSlide(mobVoorraadMenu, .4, this.mobileVoorraadBlockOpen);
      this.mobileVoorraadBlockOpen = true;
    }
  }

  public onClickVoorraad(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
    this.openVoorraadMenu();
  }

  public onClickNieuwbouw(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
    this.openNieuwbouwMenu();
  }

  // onClickLease
  public onClickLease(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
    this.openfinancialleaseMenu();
  }

  public onClickLeaseCalc(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
    this.opencalculatorleaseMenu();
  }

  public onClickImport(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
    this.openImportMenu();
  }

  public onClickContact(elementId: string): void {
    this.viewscroller.scrollToAnchor(elementId);
  }
}

