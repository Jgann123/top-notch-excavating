import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-rating-animation',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './rating-animation.component.html',
  styleUrl: './rating-animation.component.scss'
})
export class RatingAnimationComponent {
  lottieOptions: Object;

  constructor() {
    this.lottieOptions = {
      path: '../../../../../src/assets/Animation-Rating.json', // Path to your Lottie animation JSON file
      renderer: 'canvas', // Optional - Sets the renderer
      autoplay: true, // Optional - Sets autoplay
      loop: true // Optional - Sets loop
    };
  }

}
