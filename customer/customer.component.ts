import { Component, OnInit } from '@angular/core';
import{ManagementService} from'../management/management.service';
import{model} from'../management/management.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  constructor(public postService:ManagementService) { }
  postsDisplay: model[];
  private postsSub: Subscription;

  
  ngOnInit() {
    console.log('inside onit of display');
  this.postsDisplay=this.postService.getPostService();
     this.postsSub = this.postService.getPostUpdateListener()
     .subscribe((posts: model[]) => {
       this.postsDisplay = posts;
     });
     console.log('onInit: ', this.postsDisplay);
  }
addManualPost(){
  const post={
    menu:'Manual title',
   price:40
  };
  this.postsDisplay.push(post);
  this.postService.addedPostManual();
}
}
