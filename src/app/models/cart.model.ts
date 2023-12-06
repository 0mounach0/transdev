import { Reservation } from "./reservation.model";

export interface Cart {
    uuid: string;
    reservations: Reservation[];
    totalPrice: number;
    [key: string]: any;
}