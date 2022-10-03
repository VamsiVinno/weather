import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) { }
  
  responseSubject=new BehaviorSubject('')

  getFormValue(value: string) {
    let url = `http://api.weatherstack.com/current?access_key=${"c8a60bfa95c027ab24ba452bb3787e63"}&query=${value}`;
    return this.http.get(url);
  }
}
