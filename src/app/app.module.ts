import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedPages/header/header.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UnivCartComponent } from './pages/univ-cart/univ-cart.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DomaineEtudeComponent } from './pages/domaine-etude/domaine-etude.component';
import { FormsModule } from '@angular/forms';
import { UnivPageComponent } from './pages/univ-page/univ-page.component';
import { QueFaireComponent } from './pages/que-faire/que-faire.component';
import { QuestionComponent } from './pages/question/question.component';
import { CareerComponent } from './pages/career/career.component';
import { MetiersComponent } from './pages/metiers/metiers.component';
import { MetierCartComponent } from './pages/metier-cart/metier-cart.component';
import { MetierPageComponent } from './pages/metier-page/metier-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    UnivCartComponent,
    SignupComponent,
    SigninComponent,
    DomaineEtudeComponent,
    UnivPageComponent,
    QueFaireComponent,
    QuestionComponent,
    CareerComponent,
    MetiersComponent,
    MetierCartComponent,
    MetierPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbRatingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
