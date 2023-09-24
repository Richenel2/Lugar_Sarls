import { Component } from '@angular/core';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { UnivCart } from '../Model/univ-cart';
import { map } from 'rxjs/operators';
import { Metier } from '../Model/metier';
// import { MetierDetailsService } from 'src/app/services/metier-details.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  universityData!: UnivCart[];
  metiersData!: Metier[];
  constructor(private service: UniversityDetailsService) {}

  ngOnInit() {
    this.service
      .getAll()
      .pipe(map((response: any) => (response.results as UnivCart[]) || []))
      .subscribe((response) => {
        this.universityData = response;
      });

    this.service
      .getAllMetiers()
      .pipe(map((response: any) => (response.results as Metier[]) || []))
      .subscribe((response) => {
        this.metiersData = response;
      });
  }
}
