import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './component/layout-page/layout-page.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    loadChildren: () => import('../starcraft/starcraft.module').then(m => m.StarcraftModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);
