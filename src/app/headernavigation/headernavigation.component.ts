import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-headernavigation',
  templateUrl: './headernavigation.component.html',
  styleUrls: ['./headernavigation.component.css'],
})
export class HeadernavigationComponent implements OnInit {
  @Output() changeValue = new EventEmitter();
  openSlide = false;

  constructor(
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {}

  slideOpenContArea() {
    this.openSlide = true;
    this.changeValue.emit(this.openSlide);
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
