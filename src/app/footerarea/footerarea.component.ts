import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footerarea',
  templateUrl: './footerarea.component.html',
  styleUrls: ['./footerarea.component.css']
})
export class FooterareaComponent implements OnInit {
  @Output() changeValue = new EventEmitter();
  openSlide = false;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  slideOpenContArea() {
    this.openSlide = true;
    this.changeValue.emit(this.openSlide);
  }
}
