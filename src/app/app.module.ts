import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherInfoCardComponent } from './components/weather-info-card/weather-info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent,
    WeatherSearchComponent,
    WeatherInfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
