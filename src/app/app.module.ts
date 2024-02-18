import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentCardListComponent } from './components/content-card-list/content-card-list/content-card-list.component';
import { TnHeaderComponent } from './components/tn-header/tn-header.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  // Define your routes here
];

@NgModule({
  declarations: [
    AppComponent,
    ContentCardListComponent,
    ContentCardComponent,
    TnHeaderComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
