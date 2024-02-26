import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TnHeaderComponent } from './components/tn-header/tn-header.component';
import { Router } from '@angular/router';
import { routes } from './app.routes';
import { AppFooterComponent } from './components/ap-footer/app-footer/app-footer.component';
import { ServiceImagesComponent } from "./components/service-images/service-images/service-images.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AppFooterComponent, TnHeaderComponent, RouterLink, RouterLinkActive, ServiceImagesComponent]
})
export class AppComponent {
  constructor() {

  }
  title = 'top-notch';
}
