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
    this.login()
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next: response => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("type", response.type)
        localStorage.setItem("user", JSON.stringify(response.user))
        console.log(response)
        this.router.navigate(['/'])
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
