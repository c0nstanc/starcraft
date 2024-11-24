import { Component } from '@angular/core';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
    standalone: false
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
