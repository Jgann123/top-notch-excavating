import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-phone-tab',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './phone-tab.component.html',
  styleUrl: './phone-tab.component.scss'
})
export class PhoneTabComponent {


  callPhoneNumber(): void {
    window.location.href = 'tel:(423)307-0802';
  }
}
