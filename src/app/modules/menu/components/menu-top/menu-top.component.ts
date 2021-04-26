import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';


@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  user:any;
  nbrShoppingCourse:number=0;
  constructor(private login:LoginService,private shoppingCart:ShoppingCartService, private router:Router) { }

  ngOnInit(){
     this.login.getCurrentUser()
     .pipe(
      switchMap(user=>{
        if(!user) return 'e';
          return  this.login.getCurrentUserDb();
      }),
      mergeMap(userDb=>this.shoppingCart.getListItemsShoppingCart().pipe(

        map(coursesShopping=>{
          return [userDb,coursesShopping]
        })
      ))
    ).subscribe(([userDb,coursesShopping])=>{
      this.nbrShoppingCourse=(coursesShopping as any[]).length;
      if(userDb!='e')
      {

      this.user=userDb
      }
      else
      this.user=null;

    },erreur=> console.log)


  }
  logout(){

    this.login.logoutWithGoogle();

  }

  recapShopping()
  {
    if (this.nbrShoppingCourse<=0) return ;
    this.router.navigate(['/shooping-cart']);

  }
}
