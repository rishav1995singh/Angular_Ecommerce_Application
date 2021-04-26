import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-UI.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './modules/courses/courses.module';
import { MenuModule } from './modules/menu/menu.module';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { UserModule } from './modules/users/users.module';
import { OrderModule } from './modules/orders/order.module';
import { ShoppingCartModule } from './modules/shoppingCart/shoppingCart.module';
import { PaymentModule } from './modules/payment/payment.module';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    AuthModule,
    CommonModule,
    CoursesModule,
    MenuModule,
    AngularFireAuthModule,
    UserModule,
    OrderModule,
    ShoppingCartModule,
    PaymentModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
