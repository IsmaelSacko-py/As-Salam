import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-account-sidebar-item',
  templateUrl: './user-account-sidebar-item.component.html',
  styleUrl: './user-account-sidebar-item.component.css'
})
export class UserAccountSidebarItemComponent implements OnInit{
  @Input() isActive = true
  @Input() item!: any
  user!: any

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }
}
