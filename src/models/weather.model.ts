export interface Weather {
    name: string;
    dt: number;
    visibility: number;

    sys: {
        country: string;
    },
    main: {
        temp: number;
        sea_level?: number;
        pressure: number;
        feels_like: number;
        humidity: number
    },
    weather: {
        main: string,
        description?: string,
        icon: string
    }[];
    wind: {
        speed: number;
    }
}