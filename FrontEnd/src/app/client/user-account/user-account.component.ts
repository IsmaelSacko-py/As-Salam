import { Component } from '@angular/core';
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {VendorDashboardComponent} from "./user-dashboard/vendor-dashboard/vendor-dashboard.component";
import {ClientDashboardComponent} from "./user-dashboard/client-dashboard/client-dashboard.component";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {
  hideCategoryDropDown = 'hide-category'
  sideBar!: any
  sideBarType = '';
  clientSidebarList = [
    {
      label: 'Dashboard',
      icon: 'far fa-gauge-high',
      href: '/user-account/user-dashboard',
      badge: null,
      isActive: true
    },
    {
      label: 'My Profile',
      icon: 'far fa-user',
      href: '/user-account/user-profile',
      badge: null,
      isActive: false
    },
    {
      label: 'My Order List',
      icon: 'far fa-shopping-bag',
      href: '/user-account/user-order',
      badge: '02',
      isActive: false
    },
    {
      label: 'My Wishlist',
      icon: 'far fa-heart',
      href: '/user-account/user-wishlist',
      badge: '02',
      isActive: false
    },
    {
      label: 'Address List',
      icon: 'far fa-location-dot',
      href: '/user-account/user-address',
      badge: null,
      isActive: false
    },
    {
      label: 'Support Tickets',
      icon: 'far fa-headset',
      href: '/user-account/user-support-ticket',
      badge: '02',
      isActive: false
    },
    {
      label: 'Track My Order',
      icon: 'far fa-map-location-dot',
      href: '/user-account/user-track-order',
      badge: null,
      isActive: false
    },
    {
      label: 'Payment Methods',
      icon: 'far fa-wallet',
      href: '/user-account/user-payment-method',
      badge: null,
      isActive: false
    },
    {
      label: 'Notification',
      icon: 'far fa-bell',
      href: '/user-account/user-notification',
      badge: '02',
      isActive: false
    },
    {
      label: 'Messages',
      icon: 'far fa-envelope',
      href: '/user-account/user-message',
      badge: '02',
      isActive: false
    },
    {
      label: 'Settings',
      icon: 'far fa-gear',
      href: '/user-account/user-setting',
      badge: null,
      isActive: false
    },
    {
      label: 'Logout',
      icon: 'far fa-sign-out',
      href: '/user-account/user-setting',
      badge: null,
      isActive: false
    }
  ];
  vendorSidebarList = [
    {
      label: 'Dashboard',
      icon: 'far fa-gauge-high',
      href: '/user-account/vendor-dashboard',
      badge: null,
      isActive: false
    },
    {
      label: 'My Profile',
      icon: 'far fa-user',
      href: '/vendor-profile',
      badge: null,
      isActive: true
    },
    {
      label: 'Products',
      icon: 'far fa-layer-group',
      href: '/vendor-product',
      badge: null,
      isActive: false
    },
    {
      label: 'Add New Product',
      icon: 'far fa-upload',
      href: '/vendor-add-product',
      badge: null,
      isActive: false
    },
    {
      label: 'All Orders',
      icon: 'far fa-shopping-bag',
      href: '/vendor-order',
      badge: '02',
      isActive: false
    },
    {
      label: 'Payout',
      icon: 'far fa-wallet',
      href: '/vendor-payout',
      badge: null,
      isActive: false
    },
    {
      label: 'Transaction',
      icon: 'far fa-credit-card',
      href: '/vendor-transaction',
      badge: null,
      isActive: false
    },
    {
      label: 'Notification',
      icon: 'far fa-bell',
      href: '/vendor-notification',
      badge: '02',
      isActive: false
    },
    {
      label: 'Messages',
      icon: 'far fa-envelope',
      href: '/vendor-message',
      badge: '02',
      isActive: false
    },
    {
      label: 'Settings',
      icon: 'far fa-gear',
      href: '/vendor-setting',
      badge: null,
      isActive: false
    },
    {
      label: 'Logout',
      icon: 'far fa-sign-out',
      href: '#',
      badge: null,
      isActive: false
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSidebarMenu(event.urlAfterRedirects);
      }
    });
  }

  activeItem!: string
  onActivate2(component: any){
    if(component.active){
      this.activeItem = component.active
    }
  }

  updateSidebarMenu(url: string) {
    if (url.startsWith('/user-account/user')) {
      this.sideBarType = 'client'
      this.sideBar = this.clientSidebarList;
    } else if (url.startsWith('/user-account/vendor')) {
      this.sideBarType = 'vendor'
      this.sideBar = this.vendorSidebarList;
    }
  }


  protected readonly alert = alert;
}
