import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamageCalculatorRoutingModule } from './damage-calculator.routing';
import { DamageCalculatorPageComponent } from './component/damage-calculator-page/damage-calculator-page.component';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    DamageCalculatorPageComponent
  ],
  imports: [
    CommonModule,
    DamageCalculatorRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class DamageCalculatorModule { }
