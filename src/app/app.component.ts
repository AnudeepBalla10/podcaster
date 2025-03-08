import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AudioPlayerComponent, CommonModule],
  template: `
    <app-navbar></app-navbar>
    <main class="min-h-screen pt-16 pb-24">
      <router-outlet></router-outlet>
    </main>
    <app-audio-player
      *ngIf="currentEpisode"
      [audioUrl]="currentEpisode.audioUrl"
      [title]="currentEpisode.title"
      [coverImage]="currentEpisode.coverImage">
    </app-audio-player>
  `
})
export class AppComponent {
  currentEpisode: any = null;

  // Logic to set the current episode
}