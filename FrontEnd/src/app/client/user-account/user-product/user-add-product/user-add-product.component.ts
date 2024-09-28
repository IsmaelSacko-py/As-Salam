import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-add-product',
  templateUrl: './user-add-product.component.html',
  styleUrl: './user-add-product.component.css'
})
export class UserAddProductComponent implements OnInit{

  productForm!: FormGroup
  selectedFiles: File[] = [];


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nom: [null, Validators.required],
      categorie: [null, Validators.required],
      prix: [null, Validators.required],
      stock: [null, Validators.required],
      images: [null, Validators.required],
      remise: [null],
      description: [null, Validators.required],
      statut: [null, Validators.required],
    })
  }

  createProduct(){
    Swal.fire({
      title: 'Etes-vous sûr?',
      text: 'Voulez-vous vraiment créer cet reclamation?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, créer!',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.createReclamat();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Création reclamation annulée',
          'error'
        )
      }
    })
  }



  // Méthode pour récupérer les fichiers sélectionnés
  onFilesSelected(event: any): void {
    const files = event.target.files; // Here we use only the first file (single file)
    this.selectedFiles = Array.from(files).map((file: any) => file.name);
    this.productForm.patchValue({ images: this.selectedFiles});

    // console.log('Fichiers sélectionnés:', this.selectedFiles);
  }



}
