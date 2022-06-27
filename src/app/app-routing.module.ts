import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FeaturesComponent } from './features/features.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { InnerPageComponent } from './inner-page/inner-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent

  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'features', component:FeaturesComponent
  },
  {
    path:'gallary', component:GallaryComponent
  },
  {
    path:'pricing', component:PricingComponent
  },
  {
    path:'dropdown', component:DropdownComponent
  },
  {
    path:'team', component:TeamComponent
  },
  {
    path:'contact', component:ContactComponent

  },
  {
    path:'inner-page', component:InnerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
