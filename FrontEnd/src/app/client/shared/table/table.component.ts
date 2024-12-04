import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {CommandeService} from "../../../service/commande.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() commandes!: any
  @Input() isVendor!: boolean

  constructor(private route: Router, private commandeService: CommandeService) {
  }


  detailCommnade(id: number){
    this.route.navigate(['/user-account/user-order-details', id]);
  }

  getBadgeClass(statut: string): string {
    const badgeClasses: any = {
      'En attente': 'badge-info',
      'En cours': 'badge-primary',
      'Livrée': 'badge-success',
      'Annulée': 'badge-danger'
    };

    return badgeClasses[statut] || ''; // Retourne une classe ou vide si le statut n'est pas trouvé
  }


  updateOrder(orderStatus: string, order: any){
    order.statut = orderStatus
    this.commandeService.updateOrder(order).subscribe({
      next: response => {
        console.log(response)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
