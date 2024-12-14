import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../../../../service/produit.service";
import {Produit} from "../../../../model/Produit.model";
import {Categorie} from "../../../../model/Categorie.model";
import {Image} from "../../../../model/Image.model";
import {CategorieProduitService} from "../../../../service/categorie-produit.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-user-add-product',
  templateUrl: './user-add-product.component.html',
  styleUrl: './user-add-product.component.css'
})
export class UserAddProductComponent implements OnInit{

  productForm!: FormGroup
  selectedFiles: File[] = [];
  fv!: any
  dateAjout!: Date
  productImage!: Image[]
  productCategories!: any

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService, private categorieService: CategorieProduitService) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      libelle: [null, Validators.required],
      categorie: [null, Validators.required],
      prix: [null, Validators.required],
      quantite: [null, Validators.required],
      images: [null, Validators.required],
      remise: [null],
      description: [null, Validators.required],
      statut: [null, Validators.required],
    })

    this.getAllCategories()
  }

  createProduct(){
    const categorie = this.productCategories.find((cat: any) => cat.id == this.productForm.value.categorie)
    this.productForm.value.categorie = categorie
    this.produitService.create(this.productForm.value).subscribe({
      next: response => {
        this.productForm.reset()
        Swal.fire(
          'Créé!',
          'Produit enregistré avec succès.',
          'success'
        )
      },
      error: err => {
        console.log(err)
        Swal.fire(
          'Erreur',
          'Erreur lors de l\'enregistrement',
          'error'
        )
      }
    })
  }

  submitProcutForm(){
    Swal.fire({
      icon: 'warning',
      title: 'Enregistrement',
      text: 'Etes-vous sûr de vouloir enregistrer ce produit ?',
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Annuler"
    }).then(result => {
      if(result.isConfirmed){
        this.createProduct()
      }
    })
  }




  // Méthode pour récupérer les fichiers sélectionnés
  onFilesSelected(event: any): void {
    const files = event.target.files; // Here we use only the first file (single file)
    this.selectedFiles = Array.from(files).map((file: any) => file.name);
    this.productForm.patchValue({ images: this.selectedFiles.map(image => ({id: null, url: image , produit_id: null}))});
    // this.productForm.patchValue({ images: this.selectedFiles});


    // this.selectedFiles = Array.from(files);
    // console.log('Fichiers sélectionnés:', this.selectedFiles);
  }

  getAllCategories(){
    this.categorieService.getAll().subscribe({
      next: response => {
        this.productCategories = response._embedded.categorieDTOList
      },
      error: err => {
        console.log(err)
      }
    })
  }



}
