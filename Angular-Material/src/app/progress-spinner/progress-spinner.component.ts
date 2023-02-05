import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { take, map, takeWhile, tap } from 'rxjs/operators';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercent = 0;
  public queryValue = 0;
  public queryMode: ProgressBarMode = 'query';
  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(500, 95)
    .subscribe(i => this.loadingPercent = i);

    concat(
    interval(2000)
    .pipe(
      take(1),
      tap( _ => (this.queryMode = 'determinate'))
    ),
    this.loadingProgress(500, 100)
    ).subscribe(i => this.queryValue = i);

  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed)
    .pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    )
   }

}
