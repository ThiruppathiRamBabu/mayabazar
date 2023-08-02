import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: FormGroup;
  constructor(private router:Router) {
    this.myForm = new FormGroup({
      mailid: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  onsubmit(){
    if(this.myForm.valid){
    this.router.navigate(['/homepage'])
  }else{
    window.alert("invalid")
  }
  }
}
  