import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-text-image-section',
  standalone: true,
  imports: [],
  templateUrl: './content-text-image-section.component.html',
  styleUrl: './content-text-image-section.component.scss'
})
export class ContentTextImageSectionComponent {
  @Input()  headerContent: string | undefined
  @Input() textContent: string | undefined
}
