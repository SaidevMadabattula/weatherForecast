import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
