import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import{ManagementService} from'./management.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  
  constructor(public postService: ManagementService,) { }

  ngOnInit() {
  }
  adddish(postForm:NgForm)
  {
    if (postForm.valid) {
    const list={
      menu:postForm.value.menu,
      price:postForm.value.price
    }
    console.log(list.menu);
      this.postService.putMessage(list);
  } 
    };
   
  }

