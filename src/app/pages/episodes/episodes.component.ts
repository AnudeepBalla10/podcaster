import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <!-- Search and Filter Section -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <div class="relative">
              <input type="text" 
                     [(ngModel)]="searchQuery"
                     placeholder="Search episodes..."
                     class="w-full bg-slate-800 border border-slate-700 rounded-lg 
                            px-4 py-2 pl-10 focus:outline-none focus:border-secondary">
              <i class="fas fa-search absolute left-3 top-3 text-slate-500"></i>
            </div>
          </div>
          <div class="flex gap-2">
            <select [(ngModel)]="selectedTag"
                    class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 
                           focus:outline-none focus:border-secondary">
              <option value="">All Topics</option>
              <option *ngFor="let tag of tags" [value]="tag">{{ tag }}</option>
            </select>
            <select [(ngModel)]="sortBy"
                    class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 
                           focus:outline-none focus:border-secondary">
              <option value="date">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="title">A-Z</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Episodes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let episode of filteredEpisodes" 
             class="podcast-card group cursor-pointer"
             [routerLink]="['/episodes', episode.id]">
          <div class="relative">
            <img [src]="episode.coverImage" 
                 [alt]="episode.title"
                 class="w-full rounded-lg mb-4">
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                        transition-opacity rounded-lg flex items-center justify-center">
              <button class="btn-primary">
                <i class="fas fa-play mr-2"></i> Play
              </button>
            </div>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ episode.title }}</h3>
          <p class="text-slate-400 text-sm mb-3">{{ episode.description }}</p>
          <div class="flex items-center justify-between text-sm text-slate-500">
            <span>
              <i class="fas fa-clock mr-1"></i>
              {{ episode.duration }}
            </span>
            <span>
              <i class="fas fa-calendar mr-1"></i>
              {{ episode.date | date }}
            </span>
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <span *ngFor="let tag of episode.tags" 
                  class="text-xs px-2 py-1 rounded-full bg-slate-700">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EpisodesComponent {
  searchQuery: string = '';
  selectedTag: string = '';
  sortBy: string = 'date';
  
  tags: string[] = ['AI', 'Web Development', 'Cloud', 'Security', 'Mobile', 'DevOps'];
  
  episodes = [
    {
      id: '1',
      title: 'The Future of AI Development',
      description: 'Exploring the latest developments in artificial intelligence.',
      coverImage: 'https://via.placeholder.com/400x400',
      audioUrl: '/assets/episodes/ai-future.mp3',
      duration: '45:30',
      date: new Date('2025-01-15'),
      tags: ['AI', 'Technology']
    },
    {
      id: '2',
      title: 'Web Development Trends 2025',
      description: 'Discussion about the latest web development trends.',
      coverImage: 'https://via.placeholder.com/400x400',
      audioUrl: '/assets/episodes/web-trends.mp3',
      duration: '38:15',
      date: new Date('2025-01-10'),
      tags: ['Web Development', 'Technology']
    },
    // Add more episodes as needed
  ];

  get filteredEpisodes() {
    return this.episodes
      .filter(episode => {
        const matchesSearch = episode.title.toLowerCase()
          .includes(this.searchQuery.toLowerCase()) ||
          episode.description.toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        
        const matchesTag = !this.selectedTag || 
          episode.tags.includes(this.selectedTag);
        
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => {
        switch (this.sortBy) {
          case 'date':
            return b.date.getTime() - a.date.getTime();
          case 'title':
            return a.title.localeCompare(b.title);
          case 'popular':
            // Implement popularity sorting logic here
            return 0;
          default:
            return 0;
        }
      });
  }
}