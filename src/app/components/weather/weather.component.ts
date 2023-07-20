import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { WeatherService } from '../../../services/weather.service';
import { Weather } from 'src/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
  public weather?: Weather;
  public errorMessage?: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getDefaultWeather();
  }

  public onLocationNameChange(name: string): void {
    this.weatherService.getWeatherByCity(name)
      .pipe()
      .subscribe({
        next: this.showWeather,
        error: this.showError,
      });
  }

  private getDefaultWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(((position: GeolocationPosition) => {
        this.weatherService.getWeatherByLocation(position.coords.latitude, position.coords.longitude)
          .pipe()
          .subscribe({
            next: this.showWeather,
            error: this.showError,
          });
      }), (error: GeolocationPositionError) => alert(error.message));
    }
  }

  private showWeather = (value: any): void => {
    this.weather = value;
    this.errorMessage = undefined;
  }

  private showError = (value: HttpErrorResponse): void => {
    this.errorMessage = value.error.message;
    this.weather = undefined;
  }
}




