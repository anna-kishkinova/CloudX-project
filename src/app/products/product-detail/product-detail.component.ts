import { ChangeDetectionStrategy, Component, inject, Injector, input } from '@angular/core';
import { Product } from '../product.interface';
import { of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../products.service';
import { CartService } from '../../cart/cart.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    ProductItemComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  #injector = inject(Injector);
  #router = inject(ActivatedRoute);

  productById = toSignal(inject(ProductsService).getProductById(this.#router.snapshot.params.id));
}
