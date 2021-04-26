import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private db:AngularFireDatabase) { }

  createOrder(order)
  {
   return this.db.list('/orders').push(order);
  }

  getOrderIdByUserId(userId)
  {
    return this.db.list('/orders/',ref=>ref.orderByChild('userId').equalTo(userId))
                                  .snapshotChanges()
                                  .pipe(
                                    map(idOrders=>{
                                    return  idOrders.map(ids=>{
                                               return ids.key
                                      })
                                    })
                                  )
  }

  getCoursesByIdOrder(idOrder)
  {
    return this.db.object('/orders/'+idOrder+'/items/')
                 .snapshotChanges()
                 .pipe(
                   map(courses=>{
                     return courses.payload.val();
                   })
                 )
  }
}
