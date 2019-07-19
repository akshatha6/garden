import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ShopComponent } from '../shop/shop.component';
import { cart } from '../model/cartmodel';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private  shopDetail:cart[]=[];
  private  shopUpdated= new Subject<cart[]>();
  constructor(private http:HttpClient,private router:Router) { }
  
 usercart( x:any)
 {
this.http.post('http://localhost:1025/cart/shop',x).subscribe((responseData)=>{

  if(responseData["status"]=="success"){
    var name= responseData["data"];
   
    this.shopDetail.push(name);
    console.log(name); 
    this.shopUpdated.next([...this.shopDetail]);
  }
});

 }

  getshopDetail(){
    this.http.get('http://localhost:1025/cart/shop').subscribe((responseData)=>{
      if(responseData["status"] == "success" ){
        var postList = responseData["data"];
        console.log("getthing from db",postList);
        this.shopDetail = postList;
        
        this.shopUpdated.next([...this.shopDetail]);
      }
    });

  }
  getshopUpdateListener(){
    return this.shopUpdated.asObservable();
  }


}


  // usercart(carts:any){
  //   console.log("write it here the carts service.ts ",carts);

  //   this.http.post('http://localhost:1025/cart/shop',carts).subscribe((responseData)=>{
  //   console.log("Result ::",responseData);
  // });

  // }
    
  /*  if(responseData["status"]== "success"){
     if(responseData["data"]["userType"] === "Management"){
         this.router.navigate(['/management'])

      }else if (responseData["data"]["userType"] == "Customer"){
        this.router.navigate(['/customer'])
      }
}*/
 









