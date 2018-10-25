import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient, 
    private config: ConfigService 
  ) { }

  public getData(): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    return this.http.post(this.config.url + 'blog_module/api/blogs_api',
      formData,
      {
        headers: headers,
      }
    );
  }

  public getView(id: Number): any {
    return this.http.get(this.config.url + 'blog_module/api/blogs_api/detail/' + id);
  }

}
