import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamageCalculatorRoutingModule } from './damage-calculator.routing';
import { DamageCalculatorPageComponent } from './component/damage-calculator-page/damage-calculator-page.component';


@NgModule({
  declarations: [
    DamageCalculatorPageComponent
  ],
  imports: [
    CommonModule,
    DamageCalculatorRoutingModule
  ]
})
export class DamageCalculatorModule { }
