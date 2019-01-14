import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collection/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

    public collections: any[] = [];

  constructor(
    private collectionsService: CollectionsService
  ) {
    this.getCollectionsList();
   }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  getCollectionsList() {
    this.collections = [];

    this.collectionsService.getList().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.collections.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
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
