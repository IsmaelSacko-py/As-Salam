import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {CommandeService} from "../../../service/commande.service";

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

  clientCommandes!: any
  clientCommandesLinks!: any
  page!: any

  constructor(private authService: AuthService, private route: Router, private commandeService: CommandeService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
    this.clientOrders(0, 10)
  }

  detailCommnade(id: number){
    this.route.navigate(['/user-account/user-order-details', id]);
  }

  clientOrders(page?: number, size?: number){
    const clientId = this.authService.getUser().id
    this.commandeService.clientCommandes(clientId, page, size).subscribe({
      next: response => {
        console.log(response)
        this.clientCommandes = response._embedded.commandeList
        this.clientCommandesLinks = response._links
        this.page = response.page
        console.log(this.page)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  // changePage(page: number, size: number){
  //   this.commandeService.clientCommandes(clientId)
  // }

  range(totalPages: number): number[] {
    return Array(totalPages).fill(0).map((_, index) => index);
  }
}
