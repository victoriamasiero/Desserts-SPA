import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'menu',
    component: MenuPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
