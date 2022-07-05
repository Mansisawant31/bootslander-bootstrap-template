import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import {AdvertisersComponent}from './advertisers/advertisers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent

  },
  {
    path:'about', component:AboutComponent
  },

  {
    path:'contact', component:ContactComponent

  },
  {
path:'advertisers', component:AdvertisersComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'inner-page', component:InnerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
