import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a:not([noBlank])',
  standalone: true,
})
export class ExternalLinkDirective implements OnInit, AfterViewInit, OnDestroy {
  private readonly elRef: ElementRef<HTMLAnchorElement> = inject(ElementRef);
  private readonly observer = new MutationObserver(() =>
    this.setAnchorTarget()
  );
  @HostBinding('target')
  target: '_blank' | '_self' | '_parent' | '_top' | '';

  ngOnInit() {
    this.setAnchorTarget();
  }

  ngAfterViewInit() {
    this.observer.observe(this.elRef.nativeElement, {
      attributes: true,
      subtree: false,
      childList: false,
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private setAnchorTarget() {
    if (isLinkExternal(this.elRef.nativeElement.href)) {
      this.target = '_blank';
    } else if (this.elRef.nativeElement.target === '_blank') {
      this.target = '';
    }
  }
}

function isLinkExternal(url: string) {
  return new URL(url).origin !== location.origin;
}
