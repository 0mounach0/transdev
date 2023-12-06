import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/pages/search/search.component';
import { ReservationsComponent } from './components/pages/reservations/reservations.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ThankYouComponent } from './components/pages/thank-you/thank-you.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToTopComponent } from './components/atoms/scroll-to-top/scroll-to-top.component';
import { NavigationBarComponent } from './components/molecules/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './components/pages/cart/cart.component';
import { SearchBtnComponent } from './components/atoms/search-btn/search-btn.component';
import { SearchInputComponent } from './components/atoms/search-input/search-input.component';
import { SearchMolecComponent } from './components/molecules/search-molec/search-molec.component';
import { SearchOrgComponent } from './components/organisms/search-org/search-org.component';
import { ResultsOrgComponent } from './components/organisms/results-org/results-org.component';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './components/atoms/badge/badge.component';
import { TripCardComponent } from './components/molecules/trip-card/trip-card.component';
import { PaginationComponent } from './components/organisms/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { DebouceKeyupDirective } from './directives/debouce-keyup.directive';
import { ConfirmModalComponent } from './components/molecules/confirm-modal/confirm-modal.component';
import { NgxPayPalModule } from 'ngx-paypal';

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
    ResultsOrgComponent,
    BadgeComponent,
    TripCardComponent,
    PaginationComponent,
    DebouceKeyupDirective,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,  
    HttpClientModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
