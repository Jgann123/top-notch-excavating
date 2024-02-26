import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingsSectionComponent } from '../ratings-component/ratings-section/ratings-section.component';
import { ContentTextImageSectionComponent } from "../content-text-image/content-text-image-section/content-text-image-section.component";

@Component({
    selector: 'app-content-text-section',
    standalone: true,
    templateUrl: './content-text-section.component.html',
    styleUrl: './content-text-section.component.scss',
    imports: [MatButtonModule, MatIconModule, RatingsSectionComponent, ContentTextImageSectionComponent]
})
export class ContentTextSectionComponent {
  public header = "Excellence Guaranteed"
  @Input()  headerContent: string | undefined
  @Input() textContent: string | undefined

}
