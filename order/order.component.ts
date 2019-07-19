import { Component, OnInit } from '@angular/core';
import{ CartService} from '../services/cart.service'
import { cart } from '../model/cartmodel';
import{Subscription } from 'rxjs';
import {NgForm} from '@angular/forms';
import{ OrderService} from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
 
  shopDetail:cart[]=[];
  private shopSub:Subscription

  constructor(private cartservice:CartService,private orderservice:OrderService ){}




  ngOnInit()
  {
this.cartservice.getshopDetail();
this.shopSub =  this.cartservice.getshopUpdateListener().subscribe((responseData)=>{
this.shopDetail = responseData;
console.log(responseData);
  //this.cartservice.responseData;
})
  }

addpost(array:NgForm){
  


this.orderservice.userbill(array);
//this.userget();
}

}


  //this.cartservice.usercart(shopDetail);
