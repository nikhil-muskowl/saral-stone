import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { CollectionsService } from '../../services/collection/collections.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any[] = [];
  public collections: any[] = [];

  constructor(
    private productsService: ProductsService, 
    private collectionsService: CollectionsService,
    private route: ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.getProductsList();
    this.getCollectionsList();
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getProductsList() {
    this.products = [];

    this.productsService.getList().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.products.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
            price: response.data[index].price,
            quantity: response.data[index].quantity,
            image: response.data[index].image,
            image_thumb: response.data[index].image_thumb,
            banner: response.data[index].banner,
            banner_thumb: response.data[index].banner_thumb,
            status: response.data[index].status,
            created_date: response.data[index].created_date,
            modified_date: response.data[index].modified_date
          });         
        }
      },
      err => {
        console.error(err)
      },
    );
  }

  getCollectionsList() {
    this.collections = [];

    this.collectionsService.getList().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.collections.push({
            id: response.data[index].id,
            title: response.data[index].title,
          });    
        }
      },
      err => {
        console.error(err)
      },
    );
  }

  getRelatedProducts(id){
    this.products = [];

    this.productsService.getListOFCategory(id).subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.products.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
            price: response.data[index].price,
            quantity: response.data[index].quantity,
            image: response.data[index].image,
            image_thumb: response.data[index].image_thumb,
            banner: response.data[index].banner,
            banner_thumb: response.data[index].banner_thumb,
            status: response.data[index].status,
            created_date: response.data[index].created_date,
            modified_date: response.data[index].modified_date
          });     
        }
      },
      err => {
        console.error(err)
      },
    );
  }

}
