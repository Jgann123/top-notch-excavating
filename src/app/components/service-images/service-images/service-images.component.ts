import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-service-images',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './service-images.component.html',
  styleUrl: './service-images.component.scss'
})
export class ServiceImagesComponent {
  boxes: { imageUrl: string, title: string }[] = [
    { imageUrl: '../../../../assets/bob.jpeg', title: 'Excavating' },
    { imageUrl: '../../../../assets/Yanmar.jpeg', title: 'Drainage Solutions' },
    { imageUrl: '../../../../assets/orangecavator.png', title: 'Land & Tree Clearing' },
    { imageUrl: '../../../../assets/kubota.avif', title: 'Demolition' },
    { imageUrl: '../../../../assets/exca2.jpeg', title: 'Gravel Driveway Installs ' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  expandBox(box: any): void {
    // You can implement expansion logic here
  }

  shrinkBox(box: any): void {
    // You can implement shrink logic here
  }

}
