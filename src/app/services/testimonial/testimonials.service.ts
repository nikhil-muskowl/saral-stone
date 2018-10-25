import { Injectable } from '@angular/core';
import { ConfigService } from '../config-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(
    private http: HttpClient, 
    private config: ConfigService 
  ) { }

  // public getData(): any {
  //   return this.http.get(this.config.url + 'testimonial_module/api/testimonials_api');
  // }

  public getData(): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    let formData: FormData = new FormData();
    return this.http.post(this.config.url + 'testimonial_module/api/testimonials_api',
      formData,
      {
        headers: headers,
      }
    );
  }

}
