// star-rating.component.ts
import { Component, Input } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Current rating (e.g., 3)
  @Input() maxStars: number = 5; // Total stars to display

  get starsArray(): boolean[] {
    return Array(this.maxStars).fill(false).map((_, i) => i < this.rating);
  }
}
