import { Component } from '@angular/core';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { UnivCart } from '../Model/univ-cart';
import { map } from 'rxjs/operators';
import { Metier } from '../Model/metier';

@Component({
  selector: 'app-domaine-etude',
  templateUrl: './domaine-etude.component.html',
  styleUrls: ['./domaine-etude.component.scss'],
})
export class DomaineEtudeComponent {
  metierData!: Metier[];
  filters = '';
  metierSave!: Metier[];
  constructor(private service: UniversityDetailsService) {}

  ngOnInit() {
    this.service
      .getAllMetiers()
      .pipe(map((res: any) => (res.results as Metier[]) || []))
      .subscribe((res) => {
        this.metierData = res;
        console.log(res);
        console.log(this.metierData);
        this.metierSave = res;
        console.log(this.metierSave);
      });
  }
  getSearch(filterKey: string) {
    if (filterKey) {
      console.log(filterKey);
      this.metierData = this.metierSave.filter((o) =>
        Object.keys(o).some((k) =>
          JSON.stringify(o[k as keyof Metier])
            .toLowerCase()
            .includes(filterKey.toLowerCase())
        )
      );
    } else {
      this.metierData = [];
      this.metierSave.forEach((element) => this.metierData.push(element));
    }
  }
}
