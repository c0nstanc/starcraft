import { Injectable, inject } from '@angular/core';
import { Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseCanLoadPageGuard } from '../../common/guard/base-can-load-page.guard';

export const canLoadDamageCalculatorPageGuard = (
  route: Route,
  segments: UrlSegment[]
) => inject(CanLoadDamageCalculatorPageGuard).canLoad(route, segments);

@Injectable({
  providedIn: 'root',
})
export class CanLoadDamageCalculatorPageGuard extends BaseCanLoadPageGuard {
  constructor(router: Router) {
    super(router);
  }

  canLoad(
    _route: Route,
    _segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.proceed();
  }
}
