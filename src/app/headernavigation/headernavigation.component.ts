import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GsapServiceService } from '../gsap-service.service';

@Component({
  selector: 'app-headernavigation',
  templateUrl: './headernavigation.component.html',
  styleUrls: ['./headernavigation.component.css']
})
export class HeadernavigationComponent implements OnInit {

  @Output() changeValue = new EventEmitter();
  openSlide = false;

  constructor(private gsapService: GsapServiceService) { }

  ngOnInit() {
  }

  slideOpenContArea() {
    this.openSlide = true;
    this.changeValue.emit(this.openSlide);
  }

  // slideOpenCont() {
  //   console.log('BTN clicked');
  //   this.gsapService.contentSlide(true);
  // }

  // public slideOpen() {
  //   console.log('Event is working');
  //   const slideFn = this.gsapService;
  //   const mainCont = '.line';
  //   slideFn.slideOpenFromTtoB(mainCont, 1, 650, 1);
  // }

}
