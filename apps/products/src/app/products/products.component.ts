import { Component, OnInit } from '@angular/core';
import { IProduct } from '@ng-mfe/shared/data-access-user';
import { take } from 'rxjs';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'ng-mfe-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: IProduct[] = [];
  public isLoading = false;

  constructor(private productApiService: ProductApiService) { }

  public ngOnInit(): void {
    this.getProductsFromApi();
  }

  public getProductsFromApi() {
    this.isLoading = true;
    this.productApiService.getProductsFromApi()
      .pipe(take(1))
      .subscribe({
        next: (products: IProduct[]) => {
          this.productList = products;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log(error);
          this.isLoading = false;
        }
      });
  }

}
