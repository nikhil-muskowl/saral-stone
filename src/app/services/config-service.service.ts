import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public url;
  constructor() {
    this.url = 'http://saral-stone.muskowl.com/ss-admin/';
  }
}
