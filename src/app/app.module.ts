import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './atoms/scroll-to-top/scroll-to-top.component';
import { NavigationBarComponent } from './molecules/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './pages/cart/cart.component';
import { SearchBtnComponent } from './atoms/search-btn/search-btn.component';
import { SearchInputComponent } from './atoms/search-input/search-input.component';
import { SearchMolecComponent } from './molecules/search-molec/search-molec.component';
import { SearchOrgComponent } from './organisms/search-org/search-org.component';
import { ResultsOrgComponent } from './organisms/results-org/results-org.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ReservationsComponent,
    CheckoutComponent,
    ThankYouComponent,
    ScrollToTopComponent,
    NavigationBarComponent,
    CartComponent,
    SearchBtnComponent,
    SearchInputComponent,
    SearchMolecComponent,
    SearchOrgComponent,
    ResultsOrgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
