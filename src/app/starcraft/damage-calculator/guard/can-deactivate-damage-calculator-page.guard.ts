import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const canDeactivateDamageCalculatorPageGuard = (
  component: unknown,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
) =>
  new CanDeactivateDamageCalculatorPageGuard().canDeactivate(
    component,
    currentRoute,
    currentState,
    nextState
  );

class CanDeactivateDamageCalculatorPageGuard {
  canDeactivate(
    _component: unknown,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    _nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
