import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  weatherForm = this.fb.group({
    name: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.getFormValue(this.weatherForm.value['name']).subscribe((response: any) => {
      response && this.apiService.responseSubject.next(response);
      response && this.router.navigate(['response'])
    })
  }

}
