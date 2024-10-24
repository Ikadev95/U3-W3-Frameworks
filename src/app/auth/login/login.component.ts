import { AuthsrvService } from './../authsrv.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { iLoginRequest } from '../../interfeces/i-login-request';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formData:iLoginRequest = {
    email : '',
    password : ''
  }

  constructor(private authSvc : AuthsrvService, private router:Router){}


  @ViewChild('f') form!:NgForm

  login(){
    this.authSvc.login(this.formData)
    .subscribe(data =>{
      console.log('ok')
      this.router.navigate([''])
    })
  }
  submit(form:NgForm){
    console.log('form inviato al submit',form);
    console.log(form.form.value);

    form.reset();

  }

}
