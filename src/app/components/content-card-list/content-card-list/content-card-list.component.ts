import { Component } from '@angular/core';
import { ContentCardComponent } from '../../content-card/content-card.component';

@Component({
  selector: 'card-list',
  standalone: true,
  imports: [ContentCardComponent],
  templateUrl: './content-card-list.component.html',
  styleUrl: './content-card-list.component.scss'
})
export class ContentCardListComponent {

}
