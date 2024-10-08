import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'
  loginForm!: FormGroup
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      telephone: [null, Validators.required],
      password: [null, Validators.required],
    })

  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next: response => {
        console.log(response)

        localStorage.setItem("token", response.token)
        localStorage.setItem("type", response.type)
        localStorage.setItem("user", JSON.stringify(response.user))

        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("type"))
        const userString = localStorage.getItem("user")
        const user = userString? JSON.parse(userString) : null
        console.log(user)
        this.router.navigate(['/'])
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
