import { Route } from '@angular/router';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { ServicesPage } from './pages/servicespage/services';

export const routes: Route[] = [
    {path: '', loadComponent: () => import('./pages/home/home').then(mod => mod.HomePage)},
    {path: 'about', loadComponent: () => import('./pages/about/about').then(mod => mod.AboutPage)},
    {path: 'contact', loadComponent: () => import('./pages/contact/contact').then(mod => mod.ContactPage)},
    {path: 'services', loadComponent: () => import('./pages/servicespage/services').then(mod => mod.ServicesPage)},
    // {
    //     path: '',
    //     component: HomePage,
    //   },
    // {
    //   path: 'contact',
    //   component: ContactPage,
    // },
    // {
    //     path: 'services',
    //     component: ServicesPage,
    //   },
    //   {
    //     path: 'about',
    //     component: AboutPage,
    //   },
    // {
    //   path: '**',
    //   redirectTo: '',
    // },
];
