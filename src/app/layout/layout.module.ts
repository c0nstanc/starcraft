import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LayoutPageComponent } from './component/layout-page/layout-page.component';
import { LayoutRoutes } from './layout.routing';



@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,

    LayoutRoutes
  ]
})
export class LayoutModule { }
