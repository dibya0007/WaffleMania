import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WaffyorderComponent } from './waffyorder/waffyorder.component';
import { CakeorderComponent } from './cakeorder/cakeorder.component';
import { MilkshakeorderComponent } from './milkshakeorder/milkshakeorder.component';
import { IceorderComponent } from './iceorder/iceorder.component';
import { FruitsorderComponent } from './fruitsorder/fruitsorder.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    WaffyorderComponent,
    CakeorderComponent,
    MilkshakeorderComponent,
    IceorderComponent,
    FruitsorderComponent,
    OrdernowComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
