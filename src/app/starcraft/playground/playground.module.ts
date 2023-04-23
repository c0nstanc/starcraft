import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './component/playground/playground.component';
import { PlaygroundRoutingModule } from './playground.routing';
import { SimpleAccordionComponent } from '@c0nstanc/accordions-lib/accordions';
import { SimpleSpinnerComponent } from '@c0nstanc/loaders-lib/spinners';


@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    SimpleSpinnerComponent,
    SimpleAccordionComponent,
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
