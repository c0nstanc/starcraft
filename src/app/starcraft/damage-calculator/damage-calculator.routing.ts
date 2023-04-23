import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamageCalculatorPageComponent } from './component/damage-calculator-page/damage-calculator-page.component';
import { damageCalculatorPageResolver } from './damage-calculator-page.resolver';
import { canDeactivateDamageCalculatorPageGuard } from './guard/can-deactivate-damage-calculator-page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DamageCalculatorPageComponent,
    resolve: {
      model: damageCalculatorPageResolver
    },
    canDeactivate: [canDeactivateDamageCalculatorPageGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamageCalculatorRoutingModule { }
