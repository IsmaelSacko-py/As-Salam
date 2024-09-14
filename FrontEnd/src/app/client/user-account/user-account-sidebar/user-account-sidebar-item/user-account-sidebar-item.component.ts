import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-account-sidebar-item',
  templateUrl: './user-account-sidebar-item.component.html',
  styleUrl: './user-account-sidebar-item.component.css'
})
export class UserAccountSidebarItemComponent {
  @Input() isActive = true
  @Input() item!: any
  // @Output() select: EventEmitter<void> = new EventEmitter<void>()
  //
  // onClick(){
  //   this.select.emit()
  // }
}
