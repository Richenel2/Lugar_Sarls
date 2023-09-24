import { Metier } from './../pages/Model/metier';
import { Injectable } from '@angular/core';
import { UnivCart } from '../pages/Model/univ-cart';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

  universityData!: UnivCart[];
  metierData!: Metier[];
  
  constructor() { }

  sendMetier(data: any)
  {

    this.universityData = data.university;
    this.metierData = data.metier;
  }

  getUniv(){
    return this.universityData;
  }
  getMetier(){
    return this.metierData;
  }
}
