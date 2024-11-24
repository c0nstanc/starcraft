import {
  ComponentRef,
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { PatatesComponent } from '../component/patates/patates.component';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[showPatates]',
    standalone: false
})
export class PatatesDirective implements OnInit, DoCheck, OnChanges {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);

  @Input() showPatates = false;
  templateView: EmbeddedViewRef<unknown>;
  patatesRef: ComponentRef<PatatesComponent>;

  ngOnInit() {
    this.templateView = this.templateRef.createEmbeddedView({});
    this.patatesRef = this.vcRef.createComponent(PatatesComponent, {
      injector: this.vcRef.injector,
      projectableNodes: [this.templateView.rootNodes],
    });

    this.patatesRef.setInput('show', this.showPatates);
  }

  ngOnChanges() {
    this.patatesRef?.setInput('show', this.showPatates);
  }

  ngDoCheck() {
    this.templateView?.detectChanges();
  }
}
