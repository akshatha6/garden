import { Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import { Subscription } from 'rxjs';

import { Post } from "../post.model";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  
  
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: CartService) {}

  ngOnInit() {}
   /* this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  

 /* onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }*/
}