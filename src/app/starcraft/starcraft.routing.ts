import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from './common/model/page.enum';
import { canLoadDamageCalculatorPageGuard } from './damage-calculator/guard/can-load-damage-calculator-page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Page.PLAYGROUND,
  },
  {
    path: Page.DAMAGE_CALCULATOR,
    canLoad: [canLoadDamageCalculatorPageGuard],
    loadChildren: () => import('./damage-calculator/damage-calculator.module').then(m => m.DamageCalculatorModule)
  },
  {
    path: Page.PLAYGROUND,
    loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarcraftRoutingModule { }
