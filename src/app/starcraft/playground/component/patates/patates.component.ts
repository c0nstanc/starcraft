import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-patates',
    templateUrl: './patates.component.html',
    styleUrls: ['./patates.component.scss'],
    imports: [NgIf]
})
export class PatatesComponent {
  @Input()
  show = false;
}
