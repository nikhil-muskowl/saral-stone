import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collection/collections.service';
import { ProductsService } from '../../services/product/products.service';
import { ActivatedRoute } from '@angular/router';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.css']
})
export class CollectionDetailComponent implements OnInit {

  public loading = false;
  public status;
  public message;
  public details: any[] = [];
  public categories: any[] = [];
  public tags: any[] = [];
  public images: any[] = [];

  constructor(
    private collectionsService: CollectionsService,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.getCollectionDetail(id);
    this.getRelatedProjects(id);
  }

  ngOnInit() {
  /*  jQuery('.blog-related-slider').owlCarousel({
      loop: true,
      autoplay: false,
      margin: 80,
      nav: false,
      dots: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        991: {
          items: 2
        }
      }
    }); */
    jQuery('.blog-related-slider').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive:{
        0:{
          items:1
        },
        480:{
          items:2
        },			
        767:{
          items:3
        },
        1000:{
          items:3
        }
      }
    });
    window.scrollTo(0, 0);
  }

  public getCollectionDetail(id) {
    this.details = [];
    this.categories = [];
    this.tags = [];
    this.images = [];
    this.loading = true;

    this.collectionsService.getDetail(id).subscribe(
      response => {
        this.loading = false;
        this.details = response.result;
       // console.log(response.result);
      },
      err => {
        this.loading = false;
        console.error(err)
      }      
    );
    return id;
  }

  getRelatedProjects(id){

  }

}
