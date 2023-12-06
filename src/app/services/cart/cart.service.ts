import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, map } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Reservation } from 'src/app/models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<Cart>({
    reservations: [],
    clients: [],
    tickets: []
  });

  public cart$ = this.cartSubject.asObservable();

  constructor() { }

  public addReservation(reservation: Reservation) {
    const currentCart = this.cartSubject.value;
  
    this.cartSubject.next({
      ...currentCart,
      reservations: [...(currentCart.reservations || []), reservation]
    });
  }

  public removeReservation(reservation: Reservation) {
    this.cartSubject.next({
      ...this.cartSubject.value,
      reservations: this.cartSubject.value.reservations?.filter(r => r.uuid !== reservation.uuid)
    });
  }

  public editReservation(reservation: Reservation) {
    this.cartSubject.next({
      ...this.cartSubject.value,
      reservations: this.cartSubject.value.reservations?.map(r => r.uuid === reservation.uuid ? reservation : r)
    });
  }

  public getReservations(): Observable<Reservation[]> {
    return this.cart$.pipe(
      map((cart) => cart.reservations || [])
    );
  }

  public clearCart() {
    this.cartSubject.next({
      reservations: [],
      clients: [],
      tickets: []
    });
  }

  [Symbol.iterator]() {
    return this.cart$.subscribe();
  }
}