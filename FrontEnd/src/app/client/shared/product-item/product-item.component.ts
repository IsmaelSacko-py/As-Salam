import {Component, Input} from '@angular/core';
import {Produit} from "../../../model/Produit.model";
import Swal from "sweetalert2";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() produit!: Produit

  addToCart(){
    alert("ajout au panier")
    // Swal.fire({
    //   title: "Ajout au panier",
    //   text: "Voulez-vous ajouter ce produit au panier ?",
    //   icon: "info",
    //   showCancelButton: true,
    //   confirmButtonText: "oui",
    //   cancelButtonText: "annuler"
    // }).then( (result) => {
    //   if (result.isConfirmed){
    //     Swal.fire({
    //       title: "Ajout au panier",
    //       text: "produit ajouter au panier",
    //       icon: "success"
    //     })
    //   }else (result.dismiss == Swal.DismissReason.cancel)
    //     alert("ke")
    //
    // })
  }

  addToWishlist(){
    alert("add to wishlist")
  }

}
