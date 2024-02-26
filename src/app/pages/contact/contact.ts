// contact.page.ts
import { Component } from '@angular/core';
import { ContentTextImageSectionComponent } from "../../components/content-text-image/content-text-image-section/content-text-image-section.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: 'contact.html',
    styleUrls: ['contact.scss'],
    imports: [ContentTextImageSectionComponent]
})
export class ContactPage {

  public header = "Excellence Guaranteed"
  public content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  constructor() {}

  // Add any logic or functions relevant to the contact page here

}
