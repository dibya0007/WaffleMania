import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CakeorderComponent } from './cakeorder/cakeorder.component';
import { WaffyorderComponent } from './waffyorder/waffyorder.component';
import { MilkshakeorderComponent } from './milkshakeorder/milkshakeorder.component';
import { IceorderComponent } from './iceorder/iceorder.component';
import { FruitsorderComponent } from './fruitsorder/fruitsorder.component';
import { HomeComponent } from './home/home.component';
import { OrdernowComponent } from './ordernow/ordernow.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'ordernow', component:OrdernowComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'cakeorder', component:CakeorderComponent},
  {path:'waffyorder', component:WaffyorderComponent},
  {path:'milkshakeorder', component:MilkshakeorderComponent},
  {path:'iceorder', component:IceorderComponent},
  {path:'fruitsorder', component:FruitsorderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
