import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@ng-mfe/shared/data-access-user';
import { take } from 'rxjs';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'ng-mfe-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public id = '';
  public isLoading = false;
  public product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productApiService: ProductApiService) { }

  public ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getProductDetail();
  }

  public getProductDetail() {
    this.isLoading = true;
    this.productApiService.getProductDetailFromApi(this.id).pipe(take(1)).subscribe({
      next: (product: IProduct) => {
        console.log(product);
        
        this.product = product;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

}
