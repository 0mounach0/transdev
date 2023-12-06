import { Line } from "./line.model";

export interface Reservation {
    uuid: string;
    lines: Line[];
    [key: string]: any;
}