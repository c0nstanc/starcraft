import { Injectable, inject } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseCanLoadPageGuard } from '../../common/guard/base-can-load-page.guard';


export const canLoadDamageCalculatorPageGuard =
  (route: Route, segments: UrlSegment[]) => inject(CanLoadDamageCalculatorPageGuard).canLoad(route, segments);


@Injectable({
  providedIn: 'root'
})
export class CanLoadDamageCalculatorPageGuard extends BaseCanLoadPageGuard implements CanLoad {

  constructor(
    router: Router,
  ) {
    super(router);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.proceed();
  }

}
