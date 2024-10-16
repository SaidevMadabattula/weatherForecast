import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = "1635890035cbba097fd5c26c8ea672a1"

  constructor(private http: HttpClient) { }

  getweatherForecastFOrFiveDays(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + this.apiKey + '&units='+ units);
  }
}
