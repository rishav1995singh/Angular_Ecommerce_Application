import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material-UI.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';










@NgModule({
  declarations: [



    ShoppingCartComponent
  ],
  imports: [

    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule




  ],

  exports:[

  ],


  providers: [],
  bootstrap: []
})
export class ShoppingCartModule { }
