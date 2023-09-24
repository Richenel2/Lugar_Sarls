import { Component, Input } from '@angular/core';
import { Metier } from '../Model/metier';

@Component({
  selector: 'app-metier-cart',
  templateUrl: './metier-cart.component.html',
  styleUrls: ['./metier-cart.component.scss']
})
export class MetierCartComponent {

  @Input() metier!: Metier;
  full!: number[];
  half!: number[];
  empty!: number[];

  ngOnInit() {
    this.full = this.getFullStars();
    this.half = this.getHalfStars();
    this.empty = this.getEmptyStars();
    console.log(this.full)
    console.log(this.half)
    console.log(this.empty)
  }
  getFullStars() {
    let stars: number[];
    stars = [];
    for (let i = 0; i < Math.floor(this.metier.rating); i++) {
      stars.push(1);
    }
    return stars;
  }
  getHalfStars() {
    let stars: number[];
    stars = [];
    this.metier.rating - Math.floor(this.metier.rating) >= 0.5
      ? stars.push(1)
      : (stars = []);
    return stars;
  }
  getEmptyStars() {
    let stars: number[];
    stars = [];
    for (let i = 0; i < 5 - Math.ceil(this.metier.rating); i++) {
      stars.push(1);
    }
    return stars;
  }


}
