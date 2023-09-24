import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DomaineEtudeComponent } from './pages/domaine-etude/domaine-etude.component';
import { UnivPageComponent } from './pages/univ-page/univ-page.component';
import { QueFaireComponent } from './pages/que-faire/que-faire.component';
import { CareerComponent } from './pages/career/career.component';
import { MetiersComponent } from './pages/metiers/metiers.component';
import { MetierPageComponent } from './pages/metier-page/metier-page.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'metier', component: DomaineEtudeComponent},
  {path:'university/:id', component: UnivPageComponent},
  {path:'metier/:id', component: MetierPageComponent},
  {path:'que-faire', component: QueFaireComponent},
  {path:'career', component: CareerComponent},
  {path:'university', component: MetiersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
