import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart-routes'),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-routes'),
  },
];
