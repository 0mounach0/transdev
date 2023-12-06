import { Reservation } from "./reservation.model";

export interface Cart {
    reservations?: Reservation[] | undefined;
    totalPrice?: number;
    [key: string]: any;
}