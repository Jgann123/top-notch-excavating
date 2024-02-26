// home.page.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/image-sub-header/header/header.component';
import { ContentCardListComponent } from '../../components/content-card-list/content-card-list/content-card-list.component';
import { ContentTextSectionComponent } from '../../components/content-text-section/content-text-section.component';
import { RatingAnimationComponent } from '../../components/rating-animation/rating-animation/rating-animation.component';
import { RatingsSectionComponent } from '../../components/ratings-component/ratings-section/ratings-section.component';
import { ContentTextImageSectionComponent } from '../../components/content-text-image/content-text-image-section/content-text-image-section.component';
import { AppFooterComponent } from "../../components/ap-footer/app-footer/app-footer.component";
import { ServiceImagesComponent } from "../../components/service-images/service-images/service-images.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: 'home.html',
    styleUrls: ['home.scss'],
    imports: [
        HeaderComponent,
        RatingAnimationComponent,
        ContentCardListComponent,
        ContentTextSectionComponent,
        ContentTextImageSectionComponent,
        RatingsSectionComponent,
        AppFooterComponent,
        ServiceImagesComponent
    ]
})
export class HomePage {
  public header = "Excellence Guaranteed"
  public content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  public Services = "Services"
  constructor() {}

  // Add any logic or functions relevant to the home page here

}
