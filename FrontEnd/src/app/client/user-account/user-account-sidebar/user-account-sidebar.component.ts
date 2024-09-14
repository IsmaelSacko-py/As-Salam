import {Component, Input, OnInit} from '@angular/core';

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

  activeIndex = 0;
  // // Méthode pour définir l'index de l'élément actif
  // setActive(index: number) {
  //   this.activeIndex = index;
  // }

  ngOnInit(): void {
    this.sideBar = (this.clientSidebarList)? this.clientSidebarList : this.vendorSidebarList
  }



}
