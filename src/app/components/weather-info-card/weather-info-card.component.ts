import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-weather-info-card',
    templateUrl: './weather-info-card.component.html',
})
export class WeatherInfoCardComponent {
    @Input() label?: string;
    @Input() icon?: IconDefinition;
    @Input() value?: number;
    @Input() valueFormat?: string;
    @Input() symbol?: string;
    @Input() text?: string;
}
