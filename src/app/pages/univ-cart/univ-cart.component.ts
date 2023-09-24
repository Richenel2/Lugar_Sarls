import { Component, Input } from '@angular/core';
import { UnivCart } from '../Model/univ-cart';
import { UniversityDetailsService } from 'src/app/services/university-details.service';

@Component({
  selector: 'app-univ-cart',
  templateUrl: './univ-cart.component.html',
  styleUrls: ['./univ-cart.component.scss'],
})
export class UnivCartComponent {
  constructor() {}

  @Input() university!: UnivCart;
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
    for (let i = 0; i < Math.floor(this.university.rating); i++) {
      stars.push(1);
    }
    return stars;
  }
  getHalfStars() {
    let stars: number[];
    stars = [];
    this.university.rating - Math.floor(this.university.rating) >= 0.5
      ? stars.push(1)
      : (stars = []);
    return stars;
  }
  getEmptyStars() {
    let stars: number[];
    stars = [];
    for (let i = 0; i < 5 - Math.ceil(this.university.rating); i++) {
      stars.push(1);
    }
    return stars;
  }
}
// full = Math.floor(this.university.rating);
// half = this.university.rating-this.full >= 0.5 ? 1 : 0;
// empty = 5-(this.full + this.half);
