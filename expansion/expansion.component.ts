import { Component, OnInit } from '@angular/core';
import{model} from'../management/management.model';
import { Subscription } from 'rxjs';
import{ManagementService} from'../management/management.service'
@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {

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