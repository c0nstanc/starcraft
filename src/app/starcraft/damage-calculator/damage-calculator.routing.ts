import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamageCalculatorPageComponent } from './component/damage-calculator-page/damage-calculator-page.component';
import { DamageCalculatorPageResolver } from './damage-calculator-page.resolver';
import { CanDeactivateDamageCalculatorPageGuard } from './guard/can-deactivate-damage-calculator-page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DamageCalculatorPageComponent,
    resolve: {
      model: DamageCalculatorPageResolver
    },
    canDeactivate: [CanDeactivateDamageCalculatorPageGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamageCalculatorRoutingModule { }
