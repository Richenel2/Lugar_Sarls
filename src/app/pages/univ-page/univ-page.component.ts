import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { UnivCart } from '../Model/univ-cart';
import { map } from 'rxjs';

@Component({
  selector: 'app-univ-page',
  templateUrl: './univ-page.component.html',
  styleUrls: ['./univ-page.component.scss'],
})
export class UnivPageComponent {
  constructor(
    private service: UniversityDetailsService,
    private univ: ActivatedRoute
  ) {}
  getUnivIndex!: any;
  univData!: UnivCart;
  // universityData!: UnivCart[];

  ngOnInit() {
    this.getUnivIndex = this.univ.snapshot.paramMap.get('id');
    if (this.getUnivIndex) {
      this.service
        .getAll()
        .pipe(
          map(
            (response: any) =>
              (response.results as UnivCart[])
              .filter(
                (univ) => univ.id == this.getUnivIndex
              )
          )
          // filter((response: UnivCart[]) => response.id === this.getUnivIndex)
        )
        .subscribe((response) => {
          this.univData = response[0];
        });

      // this.univData = this.universityData.filter((value) => {
      //   return value.id == this.getUnivIndex;
      // })
    }
  }
}
