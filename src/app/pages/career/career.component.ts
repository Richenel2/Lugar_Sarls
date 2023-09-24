import { Component } from '@angular/core';
import { UnivCart } from '../Model/univ-cart';
import { UniversityDetailsService } from 'src/app/services/university-details.service';
import { MetierService } from 'src/app/services/metier.service';
import { Metier } from '../Model/metier';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  univData!: UnivCart[];
  careerData!: Metier[];
constructor(private service: MetierService){}

ngOnInit(){
  this.univData=this.service.getUniv();
  this.careerData=this.service.getMetier();
}

}
