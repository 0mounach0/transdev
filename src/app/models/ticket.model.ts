import { PaymentType } from "../enums/payementType";
import { Reservation } from "./reservation.model";

export interface Ticket {
    uuid: string;
    reservations: Reservation[];
    payement: PaymentType;
    totalPrice: number;
    [key: string]: any;
}