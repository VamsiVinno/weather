import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  weather: any;
  location: any;
  nestedData: any = {};
  nestedkeys: any = []

  

  constructor(private apiService: ApiService) {  }

  ngOnInit() {
    this.apiService.responseSubject.subscribe((response)=>{
      this.weather=response
     response && this.visitDescendants(response, (key, value) => {
        this.nestedData[key] = value;
        this.nestedkeys = Object.keys(this.nestedData)
      });
    })
  }

  visitDescendants(obj, callback) {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === "object") {
        this.visitDescendants(value, callback);
      } else {
        callback(key, value);  
      }
    }
  }
}
