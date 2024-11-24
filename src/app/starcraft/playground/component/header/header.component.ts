import { PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PortalService } from '../../service/portal.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [MatToolbarModule, PortalModule, AsyncPipe]
})
export class HeaderComponent {
  private readonly portalService = inject(PortalService);
  portal$ = this.portalService.getPortal('header');
}
