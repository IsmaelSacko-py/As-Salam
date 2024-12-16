import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  sideBarItems: any = [
  {
    label: 'Dashboard',
    icon: 'mdi mdi-view-dashboard-outline',
    link: '/admin/dashboard',
    id: null
  },
  {
    label: 'Vendors',
    icon: 'mdi mdi-account-group-outline',
    link: 'javascript:void(0)', // Pour les éléments qui n'ont pas encore de lien
    id: 'vendors',
    subMenu: [
      {
        label: 'Vendor Grid',
        link: '/vendor-card'
      },
      {
        label: 'Vendor List',
        link: '/vendor-list'
      },
      {
        label: 'Vendors Profile',
        link: '/vendor-profile'
      }
    ]
  },
  {
    label: 'Users',
    icon: 'mdi mdi-account-group',
    link: 'javascript:void(0)',
    id: 'users',
    subMenu: [
      {
        label: 'User Grid',
        link: '/user-card'
      },
      {
        label: 'User List',
        link: '/admin/customers'
      },
      {
        label: 'Users Profile',
        link: '/user-profile'
      }
    ]
  },
  {
    label: 'Categories',
    icon: 'mdi mdi-dns-outline',
    link: 'javascript:void(0)',
    id: 'categorys',
    subMenu: [
      {
        label: 'Main Category',
        link: '/main-category'
      },
      {
        label: 'Sub Category',
        link: '/sub-category'
      }
    ]
  },
  {
    label: 'Products',
    icon: 'mdi mdi-palette-advanced',
    link: 'javascript:void(0)',
    id: 'products',
    subMenu: [
      {
        label: 'Add Product',
        link: '/product-add'
      },
      {
        label: 'List Product',
        link: '/product-list'
      },
      {
        label: 'Grid Product',
        link: '/product-grid'
      },
      {
        label: 'Product Detail',
        link: '/product-detail'
      }
    ]
  },
  {
    label: 'Orders',
    icon: 'mdi mdi-cart',
    link: 'javascript:void(0)',
    id: 'orders',
    subMenu: [
      {
        label: 'New Order',
        link: '/new-order'
      },
      {
        label: 'Order History',
        link: '/order-history'
      },
      {
        label: 'Order Detail',
        link: '/order-detail'
      },
      {
        label: 'Invoice',
        link: '/invoice'
      }
    ]
  },
  {
    label: 'Reviews',
    icon: 'mdi mdi-star-half',
    link: '/review-list',
    id: null
  },
  {
    label: 'Brands',
    icon: 'mdi mdi-tag-faces',
    link: '/brand-list',
    id: null,
  },
  {
    label: 'Authentication',
    icon: 'mdi mdi-login',
    link: 'javascript:void(0)',
    id: 'authentication',
    subMenu: [
      {
        label: 'Sign In',
        link: '/sign-in'
      },
      {
        label: 'Sign Up',
        link: '/sign-up'
      }
    ]
  },
  {
    label: 'Icons',
    icon: 'mdi mdi-diamond-stone',
    link: 'javascript:void(0)',
    id: 'icons',
    subMenu: [
      {
        label: 'Material Icon',
        link: '/material-icon'
      },
      {
        label: 'Font Awesome Icon',
        link: '/font-awesome-icons'
      },
      {
        label: 'Flag Icon',
        link: '/flag-icon'
      }
    ]
  },
  {
    label: 'Other Pages',
    icon: 'mdi mdi-image-filter-none',
    link: 'javascript:void(0)',
    id: 'otherpages',
    subMenu: [
      {
        label: '404 Page',
        link: '/404'
      }
    ]
  }
];

}
