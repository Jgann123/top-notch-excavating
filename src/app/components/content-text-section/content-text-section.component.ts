import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-text-section',
  standalone: true,
  imports: [],
  templateUrl: './content-text-section.component.html',
  styleUrl: './content-text-section.component.scss'
})
export class ContentTextSectionComponent {
  @Input()  headerContent: string | undefined
  @Input() textContent: string | undefined

}
