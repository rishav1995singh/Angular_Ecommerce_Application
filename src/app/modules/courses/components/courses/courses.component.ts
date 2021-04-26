import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map, switchMap , mergeMap} from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { CategorieService } from 'src/app/modules/common/services/categorie.service';
import { OrdersService } from 'src/app/modules/orders/service/orders.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit,OnDestroy {

  categories: any[];
  courses: any[];
  sub: Subscription;
  coursesShoppingCart:any[];
  coursesAccess:any[]=[];

  constructor(private serviceCategorie:CategorieService,
    private serviceCourses:CourseService,
    private serviceShoppingCart:ShoppingCartService
    ,private loginService:LoginService,
    private orderService:OrdersService,
    private router:Router
    ) { }


  ngOnInit(){

    this.sub=this.serviceCategorie.getAllCategories()
    .pipe(
      mergeMap(categories=>this.serviceCourses.getAllCourses().pipe(
        mergeMap(courses=>this.serviceShoppingCart.getListItemsShoppingCart().pipe(
        map(coursesShopping=>[categories,courses,coursesShopping])))
      ))).subscribe(([categories,courses,coursesShopping])=>{
        this.categories=categories;
        this.courses=courses;
        this.coursesShoppingCart=coursesShopping;
        console.log('courseShopping : '+coursesShopping);
      });

      this.loginService.getCurrentUserDb()
      .pipe(
        switchMap(userDb=>{
         return this.orderService.getOrderIdByUserId(userDb.id).pipe(
           switchMap(items=>{
             let coursesArray:any[]=[];
             items.forEach(idOrder=>{
                       this.orderService.getCoursesByIdOrder(idOrder)
                                         .pipe(
                                           map(coursesOrders=>{
                                             return coursesOrders
                                           })
                                         ).subscribe((coursesOrders:any[])=>{
                                           coursesOrders.forEach(course=>{
                                             coursesArray.push(course);
                                           })
                                         })
             })
             this.coursesAccess=coursesArray;
             console.log('coursesArray :',coursesArray);
             return coursesArray;
           })

          )
        })
      ).subscribe(coursesOrder=>{

      })

  }

  getCoursesByCategorie(key){
    return this.courses.filter(course=>course.categorie==key);
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

  AddToCart(course)
  {
    console.log(course);
   this.serviceShoppingCart.AddToCart(course);
  }

  existCourseInShoppingCart(key):boolean
  {
   return this.coursesShoppingCart.find((course:any)=>course.key==key)
  }


  DeleteToCart(course)
  {
    this.serviceShoppingCart.deleteCourseShoppingCart(course.key);
  }


  ExistCoursesById(key):boolean
  {
    return this.coursesAccess.find((course:any)=>course.key==key)
  }

  AccessCourse(key)
  {
    this.router.navigate(['/course-content',key])

  }
}
