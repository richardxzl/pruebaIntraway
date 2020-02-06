// import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.css']
// })
// export class NavComponent {

//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );

//   constructor(private breakpointObserver: BreakpointObserver) {}

// }

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
	mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerNav=[
    {name:"Home",route:"",icon:"home"},
    {name:"Input",route:"input",icon:"input"},
    {name:"Tabla",route:"tabla",icon:"assignment"},
    {name:"API",route:"api",icon:"launch"}
  ]

  fillerContent = Array.from({length: 50}, () => ``);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
}