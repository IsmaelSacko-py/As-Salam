import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent implements OnInit{
  commandesStatus =[
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-success'},
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-danger'},
    {status: 'EN_COURS', message: 'en cours' , icon: 'badge badge-primary'},
  ]

  user!: any

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  detailCommnade(id: number){
    this.route.navigate(['/user-account/user-order-details', id]);
  }
}
