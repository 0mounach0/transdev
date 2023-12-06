import { PaymentType } from "../enums/payementType";
import { Reservation } from "./reservation.model";

export interface Ticket {
    uuid: string;
    reservation: Reservation;
    payement: PaymentType;
    [key: string]: any;
}