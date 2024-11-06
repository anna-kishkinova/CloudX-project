import {Injectable} from '@angular/core';

import {EMPTY, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Product} from './product.interface';

import {ApiService} from '../core/api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  createNewProduct(product: Product): Observable<Product> {
    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "bff" is disabled. To enable change your environment.ts config'
      );
      return EMPTY;
    }

    const url = this.getUrl('bff', 'products');
    return this.http.post<Product>(url, product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  editProduct(id: string, changedProduct: Product): Observable<Product> {
    if (!this.endpointEnabled('bff')) {
      console.warn('Endpoint "bff" is disabled. To enable change your environment.ts config');
      return EMPTY;
    }

    const url = this.getUrl('bff', `products/${id}`);
    return this.http.put<Product>(url, changedProduct);
  }

  getProductById(id: string): Observable<Product | null> {
    if (!this.endpointEnabled('bff')) {
      console.warn('Endpoint "bff" is disabled. To enable change your environment.ts config');
      return this.http
        .get<Product[]>('/assets/products.json')
        .pipe(
          map(
            (products) => products.find((product) => product.id === id) || null
          )
        );
    }

    const url = this.getUrl('bff', `products/${id}`);
    return this.http.get<Product>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getProducts(): Observable<Product[]> {
    if (!this.endpointEnabled('bff')) {
      console.warn('Endpoint "bff" is disabled. To enable change your environment.ts config');

      return this.http.get<Product[]>('/assets/products.json');
    }

    const url = this.getUrl('bff', 'products');
    return this.http.get<Product[]>(url,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getProductsForCheckout(ids: string[]): Observable<Product[]> {
    if (!ids.length) {
      return of([]);
    }

    return this.getProducts().pipe(
      map((products) => products.filter((product) => ids.includes(product.id)))
    );
  }
}
