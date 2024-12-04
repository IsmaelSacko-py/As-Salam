import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-user-account-sidebar',
  templateUrl: './user-account-sidebar.component.html',
  styleUrl: './user-account-sidebar.component.css'
})
export class UserAccountSidebarComponent implements OnInit{
  @Input() activeItem = 'active'
  @Input() test!: string
  @Input() clientSidebarList!: any
  @Input() vendorSidebarList!: any
  sideBar!: any
  isClient!: boolean

  activeIndex = 0;
  // // Méthode pour définir l'index de l'élément actif
  // setActive(index: number) {
  //   this.activeIndex = index;
  // }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    const profil = this.authService.getUser().profil
    this.sideBar = (this.clientSidebarList)? this.clientSidebarList : this.vendorSidebarList
    this.isClient = profil.nom === 'client'
    console.log(this.isClient)
  }



}
