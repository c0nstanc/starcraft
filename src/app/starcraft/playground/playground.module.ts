import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './component/playground/playground.component';
import { PlaygroundRoutingModule } from './playground.routing';
import { SimpleAccordionComponent } from '@c0nstanc/accordions-lib/accordions';
import { SimpleSpinnerComponent } from '@c0nstanc/loaders-lib/spinners';
import { InputComponent } from './component/input/input.component';
import { LabelComponent } from './component/label/label.component';
import { PasswordEvaluatorDirective, providePasswordEvaluatorFn } from './directive/password-evaluator.directive';
import { PatatesComponent } from './component/patates/patates.component';
import { PatatesDirective } from './directive/patates.directive';
import { ExternalLinkDirective } from './directive/external-link.directive';
import { ClickOutsideDirective } from './directive/click-outsite.directive';
import { ScrollIntoViewDirective } from './directive/scroll-into-view.directive';
import { HeaderComponent } from './component/header/header.component';
import { PortalDirective } from './directive/portal.directive';


@NgModule({
  declarations: [
    PlaygroundComponent,
    InputComponent,
    LabelComponent,
    PatatesDirective,

  ],
  imports: [
    SimpleSpinnerComponent,
    SimpleAccordionComponent,
    CommonModule,
    PlaygroundRoutingModule,
    PasswordEvaluatorDirective,
    ExternalLinkDirective,
    PatatesComponent,
    ClickOutsideDirective,
    ScrollIntoViewDirective,
    HeaderComponent,
    PortalDirective,

  ],
  providers: [
    // providePasswordEvaluatorFn((ps: string) => 'weak')
  ]
})
export class PlaygroundModule { }
