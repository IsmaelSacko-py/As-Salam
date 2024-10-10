import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {AuthService} from "../../../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input() hideCategoryDropDown = ''
  @Input() hideHeader!: boolean
  user!: any

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.findUser()
  }

  findUser(){
    this.user = this.authService.getUser()
    console.log(this.user)
  }

}
