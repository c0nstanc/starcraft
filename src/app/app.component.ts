import { Component, OnDestroy, OnInit } from '@angular/core';
import { SimplePageSpinnerService, SpinnerConfig } from '@c0nstanc/loaders-lib/spinners';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserverService } from '@c0nstanc/foundation-lib/media';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {


  spinnerConfig: SpinnerConfig;


  title = 'starcraft';

  private readonly destroy$ = new Subject<void>();

  constructor(
    private simplePageSpinnerService: SimplePageSpinnerService,
    private breakpointObserverService: BreakpointObserverService
  ) { }

  ngOnInit(): void {
    this.initializeSpinnerConfig();
    this.initializeSubscriptions();
    // setTimeout(() => this.simplePageSpinnerService.loadingOn(), 2000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeSubscriptions(): void {
    this.breakpointObserverService.viewportChanged$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.initializeSpinnerConfig();
    });
  }

  private initializeSpinnerConfig(): void {
    if (this.breakpointObserverService.isMobile()) {
      this.spinnerConfig = new SpinnerConfig('FOUNDATION', 22, 4);
    } else {
      this.spinnerConfig = new SpinnerConfig('FOUNDATION', 32, 4);
    }
  }
}
