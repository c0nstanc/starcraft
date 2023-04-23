import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from './common/model/page.enum';
import { CanLoadDamageCalculatorPageGuard } from './damage-calculator/guard/can-load-damage-calculator-page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Page.DAMAGE_CALCULATOR,
  },
  {
    path: Page.DAMAGE_CALCULATOR,
    canLoad: [CanLoadDamageCalculatorPageGuard],
    loadChildren: () => import('./damage-calculator/damage-calculator.module').then(m => m.DamageCalculatorModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarcraftRoutingModule { }
