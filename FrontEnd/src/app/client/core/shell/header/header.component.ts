import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {AuthService} from "../../../../service/auth.service";
import {CommunicationService} from "../../../../service/communication.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Input() hideCategoryDropDown = ''
  @Input() hideHeader = false
  user!: any

  private actionSubscription!: Subscription

  constructor(private comService: CommunicationService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.findUser()
    this.actionSubscription = this.comService.action$.subscribe(() => {
      this.reactToAction();
    })
  }

  ngOnDestroy() {
    // Se désabonner lorsque le composant est détruit pour éviter les fuites de mémoire
    if (this.actionSubscription) {
      this.actionSubscription.unsubscribe();
    }
  }

  findUser(){
    this.user = this.authService.getUser()
    console.log(this.user)
  }

  reactToAction() {
    this.findUser()
  }

}
