import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  public loading = false;
  public status;
  public message;
  public details: any[] = [];
  public categories: any[] = [];
  public tags: any[] = [];
  public images: any[] = [];

  constructor(
    private productsService: ProductsService,  private route: ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.getProductDetail(id);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public getProductDetail(id) {
    this.details = [];
    this.categories = [];
    this.tags = [];
    this.images = [];
    this.loading = true;

    this.productsService.getDetail(id).subscribe(
      response => {
        this.loading = false;
        this.details = response.result;
        console.log(response.result);
      },
      err => {
        this.loading = false;
        console.error(err)
      }      
    );
    return id;
  }

}
