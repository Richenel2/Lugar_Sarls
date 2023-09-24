import { Component } from '@angular/core';
import { UnivCart } from '../Model/univ-cart';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-metiers',
  templateUrl: './metiers.component.html',
  styleUrls: ['./metiers.component.scss'],
})
export class MetiersComponent {
  universityData!: UnivCart[];
  universitySave!: UnivCart[];
  filters = '';
  constructor(private service: UniversityDetailsService) {}

  ngOnInit() {
    // this.universityData = this.service.universityDetails;
    this.service
      .getAll()
      .pipe(map((res: any) => (res.results as UnivCart[]) || []))
      .subscribe((res) => {
        this.universityData = res;
        this.universitySave = res;
      });
  }

  getSearch(filterKey: string) {
    console.log(filterKey);

    if (filterKey) {
      console.log(filterKey);
      this.universityData = this.universitySave.filter((o) =>
        Object.keys(o).some((k) =>
          JSON.stringify(o[k as keyof UnivCart])
            .toLowerCase()
            .includes(filterKey.toLowerCase())
        )
      );
    } else {
      this.universityData = [];
      this.universitySave.forEach((element) =>
        this.universityData.push(element)
      );
    }
  }
}
