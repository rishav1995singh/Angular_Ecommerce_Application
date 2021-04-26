import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../../auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db:AngularFireDatabase, private login:LoginService, private route: Router) { }

  canActivate():Observable<boolean>{

    return this.login.getCurrentUserDb().pipe(
      map(user=>{
        if(!user) return false;
          if(user.isAdmin) return true;
          this.route.navigate(['/login']);
          return false;
      })
    )

  }
}
