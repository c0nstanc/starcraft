import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleAccordionComponent } from '@c0nstanc/accordions-lib/accordions';
import { SimpleSpinnerComponent } from '@c0nstanc/loaders-lib/spinners';
import { HeaderComponent } from './component/header/header.component';
import { InputComponent } from './component/input/input.component';
import { LabelComponent } from './component/label/label.component';
import { PatatesComponent } from './component/patates/patates.component';
import { PlaygroundComponent } from './component/playground/playground.component';
import { ClickOutsideDirective } from './directive/click-outsite.directive';
import { ExternalLinkDirective } from './directive/external-link.directive';
import { PasswordEvaluatorDirective } from './directive/password-evaluator.directive';
import { PatatesDirective } from './directive/patates.directive';
import { PortalDirective } from './directive/portal.directive';
import { ScrollIntoViewDirective } from './directive/scroll-into-view.directive';
import { PlaygroundRoutingModule } from './playground.routing';

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
  ],
})
export class PlaygroundModule {}
