import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{LoginService} from'../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginservice:LoginService) { }
  username:string;
  ngOnInit() {
  }
  validateUser(loginForm:NgForm)
  {
    console.log("Form value",loginForm.value)
    this.loginservice.userLogin(loginForm.value);    
      console.log(loginForm.value.option);
     /* var user = {
        name : "manasa",
        loginID : "M123",
        password:"123",
        userType:"Admin"
      }
      this.loginservice.userSignUp(user);
      if (loginForm.valid) {
        if (loginForm.value.option=== 'Customer') {
          console.log(loginForm.value.option);
          this.router.navigate(['/customer']);
        
        }
        else
        {
            this.router.navigate(['/management']);
        }
      }*/
      }   
  }


