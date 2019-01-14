import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(
    private http: HttpClient, 
    private config: ConfigService 
  ) { }

  public getList(): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    return this.http.post(this.config.url + 'product_module/api/categories_api',
      formData,
      {
        headers: headers,
      }
    );
  }

  public getDetail(id: Number): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    let formData: FormData = new FormData();
    return this.http.post(this.config.url + 'product_module/api/categories_api/detail/' + id,
    formData,
    {
      headers: headers,
    }
  );
  }
}
