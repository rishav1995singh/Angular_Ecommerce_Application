import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucess-order',
  templateUrl: './sucess-order.component.html',
  styleUrls: ['./sucess-order.component.css']
})
export class SucessOrderComponent implements OnInit {
  idOrder;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(){

    this.idOrder=this.router.snapshot.params['id'];
  }

}
