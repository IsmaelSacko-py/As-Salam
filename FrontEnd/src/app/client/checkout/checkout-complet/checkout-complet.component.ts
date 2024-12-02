import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../../../service/communication.service";
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../service/auth.service";
import {async} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-checkout-complet',
  templateUrl: './checkout-complet.component.html',
  styleUrl: './checkout-complet.component.css'
})
export class CheckoutCompletComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'
  user!: any

  numCommande!: string

  constructor(private comService: CommunicationService, private userService: UserService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.findUser().then(() => this.comService.triggerAction())
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if(params.num){
        this.numCommande = params.num
      }
    })
  }

  async findUser(){
    this.user = this.authService.getUser()
    this.userService.findOne(this.user.id).subscribe({
      next: response => {
        response.panier.detailsPanier.length = 0
        this.authService.setUser(response)
        this.comService.triggerAction()
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
