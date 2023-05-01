import { Component } from '@angular/core';
import { providePasswordEvaluatorFn } from '../../directive/password-evaluator.directive';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  // providers: [providePasswordEvaluatorFn((password: string) => 'strong')],
})
export class PlaygroundComponent {

  protected someData = 'Custom header content';

  protected changeContent(): void {
    this.someData = 'New content';
  }

  protected onOutsideClick(): void {
    console.log(`clicked outside`);
  }

  protected loadMoreContent(): void {
    console.log(`Loading more content`);
  }
}
