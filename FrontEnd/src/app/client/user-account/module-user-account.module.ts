import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUserAccountRoutingModule } from './module-user-account-routing.module';
import {UserAccountComponent} from "./user-account.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {VendorDashboardComponent} from "./user-dashboard/vendor-dashboard/vendor-dashboard.component";
import {ClientDashboardComponent} from "./user-dashboard/client-dashboard/client-dashboard.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserProductComponent} from "./user-product/user-product.component";
import {UserAddProductComponent} from "./user-product/user-add-product/user-add-product.component";
import {UserOrderComponent} from "./user-order/user-order.component";
import {UserSupportTicketComponent} from "./user-support-ticket/user-support-ticket.component";
import {UserTrackOrderComponent} from "./user-track-order/user-track-order.component";
import {UserPaymentMethodComponent} from "./user-payment-method/user-payment-method.component";
import {UserNotificationComponent} from "./user-notification/user-notification.component";
import {UserMessageComponent} from "./user-message/user-message.component";
import {UserSettingComponent} from "./user-setting/user-setting.component";
import {UserPayoutComponent} from "./user-payout/user-payout.component";
import {UserTransactionComponent} from "./user-transaction/user-transaction.component";
import {UserAccountSidebarComponent} from "./user-account-sidebar/user-account-sidebar.component";
import {UserAddressComponent} from "./user-address/user-address.component";
import {UserWishlistComponent} from "./user-wishlist/user-wishlist.component";
import {
  UserAccountSidebarItemComponent
} from "./user-account-sidebar/user-account-sidebar-item/user-account-sidebar-item.component";
import { AddProductImageSectionComponent } from './add-product-image-section/add-product-image-section.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserAdressListComponent } from './user-address/user-adress-list/user-adress-list.component';
import { UserAdressAddComponent } from './user-address/user-adress-add/user-adress-add.component';
import { UserOrderDetailsComponent } from './user-order/user-order-details/user-order-details.component';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserDashboardComponent,
    VendorDashboardComponent,
    ClientDashboardComponent,
    UserProfileComponent,
    UserProductComponent,
    UserAddProductComponent,
    UserOrderComponent,
    UserSupportTicketComponent,
    UserTrackOrderComponent,
    UserPaymentMethodComponent,
    UserNotificationComponent,
    UserMessageComponent,
    UserSettingComponent,
    UserPayoutComponent,
    UserTransactionComponent,
    UserAccountSidebarComponent,
    UserAddressComponent,
    UserWishlistComponent,
    UserAccountSidebarItemComponent,
    AddProductImageSectionComponent,
    UserAdressListComponent,
    UserAdressAddComponent,
    UserOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    ModuleUserAccountRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModuleUserAccountModule { }
