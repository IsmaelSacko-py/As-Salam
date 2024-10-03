import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../../service/produit.service";
import {RegionService} from "../../../../service/region.service";
import {AdresseService} from "../../../../service/adresse.service";
import Swal from "sweetalert2";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-adress-add',
  templateUrl: './user-adress-add.component.html',
  styleUrl: './user-adress-add.component.css'
})
export class UserAdressAddComponent implements OnInit{
  regions!: any[]
  villes!: any[]
  selectedRegion!: any
  addressForm!: FormGroup
  constructor(private regionService: RegionService, private adresseService: AdresseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.findAllRegions()
    this.addressForm = this.formBuilder.group({
      nom: [null, Validators.required],
      type: [null, Validators.required],
      numero: null,
      membre: null,
      ville: null
    })
  }

  findAllRegions(){
    this.regionService.findAll().subscribe({
      next: response => {
        this.regions = response.content
        console.log(this.regions)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  villesRegion(event: Event){
    const id = (event.target as HTMLSelectElement).value
    const region: any = this.regions.find(region => region.id == id)
    this.villes = region.villes
    console.log(region.villes)
  }

  saveAdresse(){
    if(this.addressForm.valid){
      const adresse = this.addressForm.value
      console.log(adresse)
      this.adresseService.create(adresse).subscribe({
        next: response => {
          Swal.fire(
            'Succès',
            'Adresse enrégistré avec succès !',
            'success'
          )
          console.log(response)
        },
        error: err => {
          console.log(err)
        }
      })
    }else {
      Swal.fire({
        title: 'Oops...',
        text: 'Erreur lors de l\'enregistrement !',
        icon: 'error'
      })
    }

  }

  createAdresse(){
    Swal.fire({
      title: "Ajout d'une adresse",
      text: "voulez-vous vraiment l'enregistrer ?",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "annuler",
      confirmButtonText: "oui"
    }).then((result) => {
      if(result.isConfirmed){
        this.saveAdresse()
      }else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Annulé',
          'Création de l\'adresse annulée',
          'error'
        )
      }
    })
  }
}
