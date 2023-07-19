import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-weather-search',
    templateUrl: './weather-search.component.html',
})
export class WeatherSearchComponent {
    @Output() locationNameChange: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    set defaultLocationName(value: string | undefined) {
        this.searchInput.setValue(value);
    }
    
    public searchInput: FormControl = new FormControl();

    public submit(): void {
        this.locationNameChange.emit(this.searchInput.value);
    }

}
