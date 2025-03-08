import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-slate-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a routerLink="/" class="flex items-center space-x-2">
            <i class="fas fa-podcast text-2xl text-secondary"></i>
            <span class="font-orbitron text-xl font-bold gradient-text">TechCast</span>
          </a>
          
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" routerLinkActive="text-secondary" 
               [routerLinkActiveOptions]="{exact: true}"
               class="hover:text-secondary transition-colors">Home</a>
            <a routerLink="/episodes" routerLinkActive="text-secondary" 
               class="hover:text-secondary transition-colors">Episodes</a>
            <a routerLink="/about" routerLinkActive="text-secondary"
               class="hover:text-secondary transition-colors">About</a>
            <a routerLink="/contact" routerLinkActive="text-secondary"
               class="hover:text-secondary transition-colors">Contact</a>
          </div>

          <button class="md:hidden text-2xl" (click)="toggleMenu()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMenuOpen" class="md:hidden bg-background/95 backdrop-blur-sm">
        <div class="px-4 py-2 space-y-4">
          <a routerLink="/" class="block hover:text-secondary transition-colors">Home</a>
          <a routerLink="/episodes" class="block hover:text-secondary transition-colors">Episodes</a>
          <a routerLink="/about" class="block hover:text-secondary transition-colors">About</a>
          <a routerLink="/contact" class="block hover:text-secondary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}