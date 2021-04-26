import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material-UI.module';
import { OrdersComponent } from './component/orders/orders.component';
import { SucessOrderComponent } from './component/sucess-order/sucess-order.component';










@NgModule({
  declarations: [




    OrdersComponent,
            SucessOrderComponent
  ],
  imports: [

    MaterialModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule




  ],

  exports:[
    OrdersComponent
  ],


  providers: [],
  bootstrap: []
})
export class OrderModule { }
