import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[clickAway]',
  standalone: true,
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  private readonly elRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  @Output() clickAway = new EventEmitter<void>();
  dispose: () => void;

  ngOnInit() {
    this.dispose = this.renderer.listen(
      this.document.body,
      'click',
      (event: MouseEvent) => {
        if (!this.elRef.nativeElement.contains(event.target as HTMLElement)) {
          this.clickAway.emit();
        }
      }
    );
  }

  ngOnDestroy() {
    this.dispose();
  }
}
