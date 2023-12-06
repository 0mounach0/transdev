import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, map } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Reservation } from 'src/app/models/reservation.model';
import { Ticket } from 'src/app/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<Cart>({
    reservations: [],
    clients: [],
    tickets: [],
    totalPrice: 0
  });

  public cart$ = this.cartSubject.asObservable();

  constructor() { }

  public addReservation(reservation: Reservation) {
    const currentCart = this.cartSubject.value;
  
    this.cartSubject.next({
      ...currentCart,
      reservations: [...(currentCart.reservations || []), reservation]
    });

    this.calculateTotalPrice();
  }

  public addTicket(ticket: Ticket) {
    const currentCart = this.cartSubject.value;
  
    this.cartSubject.next({
      ...currentCart,
      ['tickets']: [...(currentCart['tickets'] || []), ticket]
    });
  }

  public removeReservation(reservation: Reservation) {
    this.cartSubject.next({
      ...this.cartSubject.value,
      reservations: this.cartSubject.value.reservations?.filter(r => r.uuid !== reservation.uuid)
    });

    this.calculateTotalPrice();
  }

  public editReservation(reservation: Reservation) {
    this.cartSubject.next({
      ...this.cartSubject.value,
      reservations: this.cartSubject.value.reservations?.map(r => r.uuid === reservation.uuid ? reservation : r)
    });

    this.calculateTotalPrice();
  }

  public getReservations(): Observable<Reservation[]> {
    return this.cart$.pipe(
      map((cart) => cart.reservations || [])
    );
  }

  public getTickets(): Observable<Ticket[]> {
    return this.cart$.pipe(
      map((cart) => cart['tickets'] || [])
    );
  }

  public getTotalPrice(): Observable<number> {
    return this.cart$.pipe(
      map((cart) => cart.totalPrice || 0)
    );
  }

  public calculateTotalPrice(): void {
    const currentCart = this.cartSubject.value;
    let totalPrice = 0;

    if (currentCart.reservations) {
      for (const reservation of currentCart.reservations) {
          totalPrice += reservation.line.price;
      }
    }

    this.cartSubject.next({
      ...currentCart,
      totalPrice
    });
  }

  public clearCart() {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next({
      ...currentCart,
      reservations: []
    });
}

  [Symbol.iterator]() {
    return this.cart$.subscribe();
  }
}