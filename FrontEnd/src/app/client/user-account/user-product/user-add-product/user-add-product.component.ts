import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../../../../service/produit.service";
import {Produit} from "../../../../model/Produit.model";
import {Categorie} from "../../../../model/Categorie.model";
import {Image} from "../../../../model/Image.model";


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

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) {
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
      disponible: [null, Validators.required],
    })
  }

  createProduct(){
    // for (const imageUrl of this.productForm.value.images) {
    //   this.productImage.push(imageUrl)
    // }

    this.produitService.create(this.productForm.value).subscribe({
      next: response => {
        console.log(response)
      },
      error: err => {
        console.log(err)
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



}
