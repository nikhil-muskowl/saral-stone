import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient, 
    private config: ConfigService 
  ) { }

  public getList(): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    return this.http.post(this.config.url + 'product_module/api/products_api',
      formData,
      {
        headers: headers,
      }
    );
  }

  public getListOFCategory(id: any): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    formData.append('category_id', id);
    return this.http.post(this.config.url + 'product_module/api/products_api',
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
    return this.http.post(this.config.url + 'product_module/api/products_api/detail/' + id,
    formData,
    {
      headers: headers,
    }
  );
  }
}
