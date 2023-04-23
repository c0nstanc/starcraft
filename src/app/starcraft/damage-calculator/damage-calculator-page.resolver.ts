import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export const damageCalculatorPageResolver =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => new DamageCalculatorPageResolver().resolve(route, state);

class DamageCalculatorPageResolver {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<undefined | null> {

    return of(undefined);
  }
}
