import {Component, ElementRef, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() externalLink: string | undefined;

  baseHref: string;

  // https://stackoverflow.com/questions/39287444/angular2-how-to-get-app-base-href-programmatically
  // https://stackoverflow.com/questions/44449202/how-can-i-conditionally-use-either-href-or-routerlink-on-an-anchor
  constructor(private locationStrategy: LocationStrategy,
              private el: ElementRef,
              @Optional() private link: RouterLinkWithHref) {

    // console.log('Base href: ' + this.locationStrategy.getBaseHref());
    this.baseHref = this.locationStrategy.getBaseHref();
  }

  ngOnInit(): void {
  }

  isAppAlfa(): boolean {
    const  a = this.baseHref === '/app-alfa/';
    return a;
  }

  isAppBeta(): boolean {
    const  a = this.baseHref === '/app-beta/';
    return a;
  }

}
