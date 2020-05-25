import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appRouteroutletContheader]'
})
export class RouteroutletContheaderDirective implements OnInit {

  @HostBinding('style.padding') padding: string;

  constructor() { }

  ngOnInit() {
    this.padding = '30px 0px';
  }

}
