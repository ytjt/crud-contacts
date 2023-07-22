import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../contactmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router: Router){}
  loginform!:FormGroup;
ngOnInit(): void {
  this.loginform = this.formBuilder.group({
    email:['', Validators.required],
    password:['', Validators.required],
    
  })

}


loginuser(){
 this.http.get<login[]>("http://localhost:3000/login").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.email == this.loginform.value.email && a.password === this.loginform.value.password;
  })

  if(user){
    alert("Successfully logged in");
    this.loginform.reset();
    this.router.navigate(["/student-list"]);
  }
  else {
    alert("Invalid email or password");
    this.loginform.reset();
  }
 },
 err=>{
  alert("Something went wrong.");
  this.loginform.reset();
 })
}
}
