import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

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
      label: 'Tableau de bord',
      icon: 'far fa-gauge-high',
      href: '/user-account/user-dashboard',
      badge: null,
      isActive: true,
      isClient: null
    },
    {
      label: 'Mon profil',
      icon: 'far fa-user',
      href: '/user-account/user-profile',
      badge: null,
      isActive: false,
      isClient: null
    },
    {
      label: 'Mes produits',
      icon: 'far fa-layer-group',
      href: '/user-account/user-product',
      badge: null,
      isActive: false,
      isClient: false
    },
    {
      label: 'Ajouter un nouveau produit',
      icon: 'far fa-upload',
      href: '/user-account/user-add-product',
      badge: null,
      isActive: false,
      isClient: false
    },
    {
      label: 'Mes Commandes',
      icon: 'far fa-shopping-bag',
      href: '/user-account/user-order',
      badge: '02',
      isActive: false,
      isClient: null
    },
    {
      label: 'Ma liste d\'envies',
      icon: 'far fa-heart',
      href: '/user-account/user-wishlist',
      badge: '02',
      isActive: false,
      isClient: true
    },
    {
      label: 'Mes adresses',
      icon: 'far fa-location-dot',
      href: '/user-account/user-address',
      badge: null,
      isActive: false,
      isClient: true
    },
    {
      label: 'Coupons',
      icon: 'far fa-headset',
      href: '/user-account/user-support-ticket',
      badge: '02',
      isActive: false,
      isClient: true
    },
    {
      label: 'Suivre ma commande',
      icon: 'far fa-map-location-dot',
      href: '/user-account/user-track-order',
      badge: null,
      isActive: false,
      isClient: true
    },
    {
      label: 'Modes de paiement',
      icon: 'far fa-wallet',
      href: '/user-account/user-payment-method',
      badge: null,
      isActive: false,
      isClient: true
    },
    {
      label: 'Paiements',
      icon: 'far fa-wallet',
      href: '/user-account/user-payment',
      badge: null,
      isActive: false,
      isClient: false
    },
    {
      label: 'Transactions',
      icon: 'far fa-credit-card',
      href: '/user-account/user-transaction',
      badge: null,
      isActive: false,
      isClient: false
    },
    {
      label: 'Notification',
      icon: 'far fa-bell',
      href: '/user-account/user-notification',
      badge: '02',
      isActive: false,
      isClient: null
    },
    {
      label: 'Messages',
      icon: 'far fa-envelope',
      href: '/user-account/user-message',
      badge: '02',
      isActive: false,
      isClient: null
    },
    {
      label: 'Paramètres',
      icon: 'far fa-gear',
      href: '/user-account/user-setting',
      badge: null,
      isActive: false,
      isClient: null
    },
    {
      label: 'Déconnexion',
      icon: 'far fa-sign-out',
      href: '#',
      badge: null,
      isActive: false,
      isClient: null
    }
  ];
  vendorSidebarList = [
    {
      label: 'Tableau de bord',
      icon: 'far fa-gauge-high',
      href: '/user-account/vendor-dashboard',
      badge: null,
      isActive: false
    },
    {
      label: 'Mon profil',
      icon: 'far fa-user',
      href: '/vendor-profile',
      badge: null,
      isActive: true
    },
    {
      label: 'Mes produits',
      icon: 'far fa-layer-group',
      href: '/vendor-product',
      badge: null,
      isActive: false
    },
    {
      label: 'Ajouter un produit',
      icon: 'far fa-upload',
      href: '/user-account/vendor-add-product',
      badge: null,
      isActive: false
    },
    {
      label: 'Commandes',
      icon: 'far fa-shopping-bag',
      href: '/vendor-order',
      badge: '02',
      isActive: false
    },
    {
      label: 'Paiements',
      icon: 'far fa-wallet',
      href: '/vendor-payout',
      badge: null,
      isActive: false
    },
    {
      label: 'Transactions',
      icon: 'far fa-credit-card',
      href: '/vendor-transaction',
      badge: null,
      isActive: false
    },
    {
      label: 'Notifications',
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
      label: 'Paramètres',
      icon: 'far fa-gear',
      href: '/vendor-setting',
      badge: null,
      isActive: false
    },
    {
      label: 'Déconnexion',
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

}
