import { Router, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Page } from '../model/page.enum';
import { CanProceed } from './model/can-proceed.model';

export abstract class BaseCanLoadPageGuard {

  constructor(
    protected router: Router,
  ) { }

  protected proceed(): Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.canProceed().pipe(switchMap((canProceed: CanProceed) => {
      if (canProceed.proceed) {
        return this.preload();
      } else {
        return of(this.getRedirectUrlTree(canProceed.redirectTo));
      }
    }
    ));
  }

  protected getRedirectUrlTree(page: Page = Page.DAMAGE_CALCULATOR): UrlTree {
    const queryParams = this.router.getCurrentNavigation()?.extractedUrl.queryParams;
    return this.router.createUrlTree([page], { queryParams });
  }

  protected canProceed(): Observable<CanProceed> {
    if (true) {
      return of(CanProceed.proceed());
    } else {
      return of(CanProceed.redirectToStart());
    }
  }

  protected preload(): Observable<boolean> {
    return of(true);
  }

}
