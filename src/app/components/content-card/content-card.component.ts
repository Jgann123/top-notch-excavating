import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'content-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {

  @Input() imageUrl: string | 'https://material.angular.io/assets/img/examples/shiba1.jpg' | undefined;
  @Input() title: string | undefined;
  @Input() content: string | undefined;

}
