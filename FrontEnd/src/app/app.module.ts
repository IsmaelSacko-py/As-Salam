import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { ProductDetailsComponent } from './client/product-details/product-details.component';
import { UserAccountComponent } from './client/user-account/user-account.component';
import { UserDashboardComponent } from './client/user-account/user-dashboard/user-dashboard.component';
import { VendorDashboardComponent } from './client/user-account/user-dashboard/vendor-dashboard/vendor-dashboard.component';
import { ClientDashboardComponent } from './client/user-account/user-dashboard/client-dashboard/client-dashboard.component';
import { UserProfileComponent } from './client/user-account/user-profile/user-profile.component';
import { UserProductComponent } from './client/user-account/user-product/user-product.component';
import { UserAddProductComponent } from './client/user-account/user-product/user-add-product/user-add-product.component';
import { UserOrderComponent } from './client/user-account/user-order/user-order.component';
import { UserSupportTicketComponent } from './client/user-account/user-support-ticket/user-support-ticket.component';
import { UserTrackOrderComponent } from './client/user-account/user-track-order/user-track-order.component';
import { UserPaymentMethodComponent } from './client/user-account/user-payment-method/user-payment-method.component';
import { UserNotificationComponent } from './client/user-account/user-notification/user-notification.component';
import { UserMessageComponent } from './client/user-account/user-message/user-message.component';
import { UserSettingComponent } from './client/user-account/user-setting/user-setting.component';
import { UserPayoutComponent } from './client/user-account/user-payout/user-payout.component';
import { UserTransactionComponent } from './client/user-account/user-transaction/user-transaction.component';
import { UserAccountSidebarComponent } from './client/user-account/user-account-sidebar/user-account-sidebar.component';
import { UserAddressComponent } from './client/user-account/user-address/user-address.component';
import { UserWishlistComponent } from './client/user-account/user-wishlist/user-wishlist.component';
import {CoreModule} from "./client/core/core.module";
import {SharedModule} from "./client/shared/shared.module";
import { UserAccountSidebarItemComponent } from './client/user-account/user-account-sidebar/user-account-sidebar-item/user-account-sidebar-item.component';
import { CartComponent } from './client/cart/cart.component';
import { CheckoutComponent } from './client/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
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
    CartComponent,
    CheckoutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
