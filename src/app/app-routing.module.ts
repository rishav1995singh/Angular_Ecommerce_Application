import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { AdminService } from './modules/admin/services/admin.service';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginService } from './modules/auth/services/login.service';
import { AboutComponent } from './modules/common/components/about/about.component';
import { HomeComponent } from './modules/common/components/home/home.component';
import { CourseContentComponent } from './modules/courses/components/course-content/course-content.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { OrdersComponent } from './modules/orders/component/orders/orders.component';
import { SucessOrderComponent } from './modules/orders/component/sucess-order/sucess-order.component';
import { ShoppingCartComponent } from './modules/shoppingCart/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [LoginService]
  },
  {
    path: 'admin-course',
    component: AdminCoursesComponent,
    canActivate: [LoginService,AdminService]
  },
  {
    path:'shooping-cart',
    component:ShoppingCartComponent
  },
  {
    path:'success-orde/:id',
    component:SucessOrderComponent,
    canActivate:[LoginService]
  },
  {
    path:'course-content/:id',
    component:CourseContentComponent,
    canActivate:[LoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
