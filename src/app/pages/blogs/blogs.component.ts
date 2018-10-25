import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  result;
  public model: any[] = [];
  public categories: any[] = [];
  public tags: any[] = [];

  constructor(
    private blogService: BlogService
  ) { 
    this.getBlogList();
  }

  ngOnInit() {
  }

  getBlogList() {
    this.model = [];
    this.categories = [];
    this.tags = [];
    this.blogService.getData().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.model.push({
            id: response.data[index].id,
            title: response.data[index].title,
            description: response.data[index].description,
            user_name: response.data[index].user_name,
            user_image: response.data[index].user_image,
            user_image_thumb: response.data[index].user_image_thumb,
            image: response.data[index].image,
            image_thumb: response.data[index].image_thumb,
            banner: response.data[index].banner,
            banner_thumb: response.data[index].banner_thumb,
            tags: response.data[index].tags,
            categories: response.data[index].categories,
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
