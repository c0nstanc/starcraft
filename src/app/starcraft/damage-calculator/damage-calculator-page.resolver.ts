import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { VOID } from 'src/app/core/common/model';


@Injectable({ providedIn: 'root' })
export class DamageCalculatorPageResolver implements Resolve<undefined | null> {

  constructor(
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<undefined | null> {

    return of(undefined);
  }
}
