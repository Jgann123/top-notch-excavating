import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from '../image-sub-header/header/header.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    RouterLink,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    RouterModule, 
    RouterOutlet,
    MatTabsModule,
    HeaderComponent,
  ],
  templateUrl: './tn-header.component.html',
  styleUrls: ['./tn-header.component.scss']
})
export class TnHeaderComponent implements OnInit {
  isMobile: boolean = false;
  isMenuOpen: boolean = false;
  public appTitle: string;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.appTitle = "Top Notch"
  }

  callPhoneNumber(): void {
    window.location.href = 'tel:(423)307-0802';
  }
  

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      )
      .subscribe(isMobile => this.isMobile = isMobile);
  }

  toggleSidenav(): void {
    console.log("blaj")
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectedTab = 0;
  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0:
        this.router.navigate(['/']);
        break;
      case 1:
        this.router.navigate(['/about']);
        break;
      case 2:
        this.router.navigate(['/services']);
        break;
      case 3:
        this.router.navigate(['/contact']);
        break;
      default:
        break;
    }
  }

  closeSidenav(): void {
    this.isMenuOpen = false;
  }
}