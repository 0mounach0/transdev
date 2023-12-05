export interface Line {
    uuid: string;
    busNum: string;
    nPlaces: number;
    startTime: string;
    startCity: string;
    startStation: string;
    endCity: string;
    endStation: string;
    price: number;
    [key: string]: any;
}