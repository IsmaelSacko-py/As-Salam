import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {ProfilService} from "../../service/profil.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  hideCategoryDropDown = 'hide-category'

  hideHeader = true
  hideFooter = true

  registerForm!: FormGroup

  profils!: any[]

  constructor(private authService: AuthService, private formBuiler: FormBuilder, private profilService: ProfilService, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuiler.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      telephone: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      profil: [null],
    }, {validators: this.passwordMatchValidator}) // permet de creer un validateur personnaliser qui s'applique apres que le formulaaire soit validé

    this.findMemberProfil()
  }

  submitRegisterForm(){
    console.log(this.registerForm.value)
    if (this.registerForm.valid){
      // this.registerForm.removeControl('confirmPassword')
      console.log(this.registerForm.value)
      this.authService.register(this.registerForm.value).subscribe({
        next: response => {
          console.log(response)
          this.router.navigate(['/auth/login'])
        },
        error: err => {
          console.log(err)
        }
      })

    }
  }

  profilSelected(event: Event){
    const id = (event.target as HTMLSelectElement).value
    console.log(id)
    const profil : any = this.profils.find( p => p.id == id)
    console.log(profil)
    const profil1 =  {id: id, nom: profil.nom}
    this.registerForm.patchValue({profil: profil1})
    console.log(this.registerForm.value)
  }

  findMemberProfil(){
    this.profilService.findMemberProfil().subscribe({
      next: response => {
        this.profils = response.content
      },
      error: err => {
        console.log(err)
      }
    })
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }


}
