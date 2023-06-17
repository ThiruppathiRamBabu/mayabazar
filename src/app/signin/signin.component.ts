import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  myForm: FormGroup;
  constructor(private router: Router) {
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      mailid: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    })
  }

  onsubmit() {
    const usersInLocalStorage = localStorage.getItem('registeredUsers');
    const users: any[] = usersInLocalStorage ? JSON.parse(usersInLocalStorage) : [];
    users.push(this.myForm.value);
    console.log('users', users)
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    if (this.myForm.valid) {
      this.router.navigate(['/login'])
    } else {
      window.alert("invalid")
    }
  }
}

