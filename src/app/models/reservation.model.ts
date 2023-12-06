import { Client } from "./client.model";
import { Line } from "./line.model";

export interface Reservation {
    uuid: string;
    lines: Line[];
    client: Client[];
    [key: string]: any;
}