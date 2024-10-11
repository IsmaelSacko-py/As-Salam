import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {VendorDashboardComponent} from "./user-dashboard/vendor-dashboard/vendor-dashboard.component";
import {UserMessageComponent} from "./user-message/user-message.component";
import {UserAddressComponent} from "./user-address/user-address.component";
import {UserNotificationComponent} from "./user-notification/user-notification.component";
import {UserOrderComponent} from "./user-order/user-order.component";
import {UserPaymentMethodComponent} from "./user-payment-method/user-payment-method.component";
import {UserPayoutComponent} from "./user-payout/user-payout.component";
import {UserProductComponent} from "./user-product/user-product.component";
import {UserSettingComponent} from "./user-setting/user-setting.component";
import {UserSupportTicketComponent} from "./user-support-ticket/user-support-ticket.component";
import {UserTrackOrderComponent} from "./user-track-order/user-track-order.component";
import {UserTransactionComponent} from "./user-transaction/user-transaction.component";
import {UserWishlistComponent} from "./user-wishlist/user-wishlist.component";
import {ClientDashboardComponent} from "./user-dashboard/client-dashboard/client-dashboard.component";
import {UserAddProductComponent} from "./user-product/user-add-product/user-add-product.component";
import {UserAdressListComponent} from "./user-address/user-adress-list/user-adress-list.component";
import {UserAdressAddComponent} from "./user-address/user-adress-add/user-adress-add.component";
import {UserOrderDetailsComponent} from "./user-order/user-order-details/user-order-details.component";

const routes: Routes = [
  {path: 'user-dashboard', component: ClientDashboardComponent},
  {path: 'vendor-dashboard', component: VendorDashboardComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-message', component: UserMessageComponent},
  {path: 'user-address', component: UserAdressListComponent},
  {path: 'user-address-add', component: UserAdressAddComponent},
  {path: 'user-notification', component: UserNotificationComponent},
  {path: 'user-order', component: UserOrderComponent},
  {path: 'user-order-details/:id', component: UserOrderDetailsComponent},
  {path: 'user-payment-method', component: UserPaymentMethodComponent},
  {path: 'user-payout', component: UserPayoutComponent},
  {path: 'user-product', component: UserProductComponent},
  {path: 'user-setting', component: UserSettingComponent},
  {path: 'user-support-ticket', component: UserSupportTicketComponent},
  {path: 'user-track-order', component: UserTrackOrderComponent},
  {path: 'user-transaction', component: UserTransactionComponent},
  {path: 'user-wishlist', component: UserWishlistComponent},
  {path: 'vendor-add-product', component: UserAddProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleUserAccountRoutingModule { }
