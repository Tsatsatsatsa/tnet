import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Weather } from 'src/models/weather.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private apiKey: string = environment.weatherApiKey;
    private apiUrl: string = environment.weatherApiUrl;

    constructor(private http: HttpClient) { }

    public getWeatherByCity(city: string): Observable<Weather> {
        return this.http.get<Weather>(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
    }

    public getWeatherByLocation(latitude: number, longitude: number): Observable<Weather> {
        return this.http.get<Weather>(`${this.apiUrl}?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`);
    }
}
