import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { Metier } from '../Model/metier';
import { map } from 'rxjs';


@Component({
  selector: 'app-metier-page',
  templateUrl: './metier-page.component.html',
  styleUrls: ['./metier-page.component.scss']
})
export class MetierPageComponent {
  constructor(
    private service: UniversityDetailsService,
    private univ: ActivatedRoute,
  ) {}
  getUnivIndex!: any;
  metierData!: Metier;
  // universityData!: UnivCart[];

  ngOnInit() {
    this.getUnivIndex = this.univ.snapshot.paramMap.get('id');
    if (this.getUnivIndex) {
      this.service
        .getAllMetiers()
        .pipe(
          map(
            (response: any) =>
              (response.results as Metier[])
              .filter(
                (metier) => metier.id == this.getUnivIndex
              )
          )
          // filter((response: UnivCart[]) => response.id === this.getUnivIndex)
        )
        .subscribe((response) => {
          this.metierData = response[0];
        });

      // this.univData = this.universityData.filter((value) => {
      //   return value.id == this.getUnivIndex;
      // })
    }
  }
}
