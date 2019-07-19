import { Injectable } from '@angular/core';
import { model } from './management.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
 posts: model[]=[];
  private postsUpdated = new Subject<model[]>();
  constructor(private http:HttpClient) { }
   

  putMessage(v_post:model){
    
    this.http.post('http://localhost:1025/posts/createPost',v_post).subscribe((responseData) => {

      if(responseData["status"] == "success" ){
        var post_with_id = responseData["data"];
        this.posts.push(post_with_id);
        this. postsUpdated.next([...this.posts]);
      }

    })

    //this.posts.push(v_post);
    //this.postsUpdated.next([...this.posts]);//emits an evet
    //console.log('inside put message of service',this.posts);
  }
  getPosts() {
    this.http.get('http://localhost:1025/posts').
    subscribe((responseData)=>{
      if(responseData["status"] == "success" ){
        var postList = responseData["data"];
        this.posts= postList;
        this.postsUpdated.next([...this.posts]);
      }
    });
   // return this.posts;
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPostService(){

    return[...this.posts];
  }

  addedPostManual(){
    console.log('inside addedpost:',this.posts);
  }
  }

