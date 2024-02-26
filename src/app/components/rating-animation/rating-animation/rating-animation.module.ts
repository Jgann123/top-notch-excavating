import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingAnimationComponent } from './rating-animation.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { CacheableAnimationLoader } from 'ngx-lottie/lib/cacheable-animation-loader/cacheable-animation-loader';



@NgModule({
  declarations: [RatingAnimationComponent],
  imports: [
    LottieAnimationViewModule.forRoot(),
    CommonModule,
    CacheableAnimationLoader
  ]
})
export class RatingAnimationModule { }


