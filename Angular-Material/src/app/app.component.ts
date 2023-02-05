import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isIsmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {  }

  ngAfterContentInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 800px)'])
    .subscribe((res) => this.isIsmallScreen = res.matches);
  }
  get sidenavMove() {
    return this.isIsmallScreen ? 'over' : 'side';
  }
}
