import { AfterViewInit, Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { PortalService } from '../service/portal.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Directive({
  selector: "[portal]",
  standalone: true,
})
export class PortalDirective implements AfterViewInit, OnDestroy {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);
  private readonly portalService = inject(PortalService);
  @Input() portal!: string;

  ngAfterViewInit() {
    const portalRef = new TemplatePortal(
      this.templateRef,
      this.vcRef,
    );
    this.portalService.sendPortal(this.portal, portalRef);
  }

  ngOnDestroy() {
    this.portalService.sendPortal(this.portal, null);
  }
}
