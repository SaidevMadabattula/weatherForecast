import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public city: string = '';
  public units: string = 'metric'; // 'imperial' 
  public myWeatherForecast: any;
  public weatherForecastForFiveDays: any = [];
  public weatherSearchForm!: FormGroup;
  public isLoading = false;  

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['', Validators.required]
    })
  }

  fetchWeatherData(formValues: any) {
   this.city = formValues.location;
   this.load(this.city);
  }

  load(city: any) : void {
    this.isLoading = true;
    setTimeout( () => this.getweatherForecastFOrFiveDays(city), 500 );
  }

  getweatherForecastFOrFiveDays(city: any) {    
    this.weatherForecastForFiveDays = [];
    this.weatherService.getweatherForecastFOrFiveDays(city, this.units).subscribe({
      next: (res) => {
       this.myWeatherForecast = res;
       this.myWeatherForecast.list.forEach(
        (rawWeatherItem: any) => {
          if (rawWeatherItem && rawWeatherItem['dt_txt'].includes('12:00')) {
            this.weatherForecastForFiveDays.push(rawWeatherItem);
          }
        });
        this.isLoading = false
        console.log('this.weatherForecastForFiveDays', this.weatherForecastForFiveDays);
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }

}
