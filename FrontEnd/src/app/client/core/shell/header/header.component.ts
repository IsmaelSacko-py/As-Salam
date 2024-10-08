import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../../../../service/client.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input() hideCategoryDropDown = ''
  @Input() hideHeader!: boolean
  user!: any

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.findUser()
    const user = localStorage.getItem("user")
    const value = user? JSON.parse(user) : null
    console.log(value)
  }

  findUser(){
    this.clientService.findOne(1).subscribe({
      next: response => {
        localStorage.setItem("user", JSON.stringify(response))
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
