import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/pages/search/search.component';
import { ReservationsComponent } from './components/pages/reservations/reservations.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { CartComponent } from './components/pages/cart/cart.component';

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "reservations", component: ReservationsComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "thank-you", component: ThankYouComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }