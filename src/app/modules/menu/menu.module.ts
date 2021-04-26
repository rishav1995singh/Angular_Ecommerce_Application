import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material-UI.module';
import { MenuTopComponent } from './components/menu-top/menu-top.component';









@NgModule({
  declarations: [


    MenuTopComponent
  ],
  imports: [

    MaterialModule,
    AppRoutingModule,
    BrowserModule,




  ],

  exports:[
    MenuTopComponent
  ],


  providers: [],
  bootstrap: []
})
export class MenuModule { }
