import { Directive, HostListener, InjectionToken, Input, inject } from '@angular/core';

type PasswordStrength = 'weak' | 'medium' | 'strong';

type PasswordEvaluatorFn = (password: string) => PasswordStrength;

const evaluatorFnToken = new InjectionToken<PasswordEvaluatorFn>(
  'PasswordEvaluatorFn',
);

export function defaultEvaluatorFn(
  password: string
): PasswordStrength {
  if (password.length < 8) {
    return 'weak';
  } else if (password.length < 12) {
    return 'medium';
  } else {
    return 'strong';
  }
}

export function providePasswordEvaluatorFn(
  evaluatorFn: PasswordEvaluatorFn = defaultEvaluatorFn
) {
  return [{
    provide: evaluatorFnToken,
    useValue: evaluatorFn,
  }];
}


@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[type="password"]',
  exportAs: 'passwordEvaluator',
  // providers: [providePasswordEvaluatorFn()],
  standalone: true,
})
export class PasswordEvaluatorDirective {
  strength: PasswordStrength = 'weak';
  @Input() evaluatorFn = inject(evaluatorFnToken, { optional: true }) ?? defaultEvaluatorFn;
  @Input() noStrengthCheck = false;

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    if (this.noStrengthCheck) {
      return;
    }
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.strength = this.evaluatorFn(value);
  }
}
