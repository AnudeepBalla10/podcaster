import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'episodes',
    loadComponent: () => import('./pages/episodes/episodes.component').then(m => m.EpisodesComponent)
  },
  {
    path: 'episodes/:id',
    loadComponent: () => import('./pages/episode-detail/episode-detail.component').then(m => m.EpisodeDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];