import { Component, Input } from '@angular/core';
import { faTemperatureFull, faDroplet,faWind,faEye,faGauge} from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';
import { Weather } from 'src/models/weather.model';

@Component({
    selector: 'app-weather-card',
    templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
    @Input() weather?: Weather;

    public ICON_URL: string = environment.weatherIconUrl;
    public degreeSymbol: string = '&deg;';
    public icons = {
        faTemperatureFull,
        faDroplet,
        faWind,
        faEye,
        faGauge
    }
}
