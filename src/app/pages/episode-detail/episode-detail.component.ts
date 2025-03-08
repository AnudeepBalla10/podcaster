import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Episode {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  audioUrl: string;
  duration: string;
  date: Date;
  tags: string[];
}

@Component({
  selector: 'app-episode-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-slate-800 rounded-lg p-8">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-1/3">
              <img [src]="episode?.coverImage" 
                   alt="Episode Cover" 
                   class="w-full rounded-lg">
            </div>
            <div class="w-full md:w-2/3">
              <h1 class="text-3xl font-bold mb-4">{{ episode?.title }}</h1>
              <p class="text-slate-300 mb-6">
                {{ episode?.description }}
              </p>
              <div class="flex items-center space-x-4 mb-8">
                <button class="btn-primary" (click)="playEpisode()">
                  <i class="fas fa-play mr-2"></i> Play Episode
                </button>
                <button class="btn-secondary">
                  <i class="fas fa-download mr-2"></i> Download
                </button>
              </div>
              <div class="flex space-x-4">
                <button class="text-slate-400 hover:text-secondary">
                  <i class="fab fa-twitter text-2xl"></i>
                </button>
                <button class="text-slate-400 hover:text-secondary">
                  <i class="fab fa-linkedin text-2xl"></i>
                </button>
                <button class="text-slate-400 hover:text-secondary">
                  <i class="fab fa-facebook text-2xl"></i>
                </button>
                <button class="text-slate-400 hover:text-secondary">
                  <i class="fab fa-whatsapp text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EpisodeDetailComponent implements OnInit {
  episode: Episode | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const episodeId = this.route.snapshot.paramMap.get('id');
    this.loadEpisode(episodeId);
  }

  loadEpisode(id: string | null) {
    if (!id) return;

    const episodes: Episode[] = [
      {
        id: '1',
        title: 'The Future of AI Development',
        description: 'Exploring the latest developments in artificial intelligence.',
        coverImage: 'assets/episodes/ai-future.jpg',
        audioUrl: 'assets/episodes/ai-future.mp3',
        duration: '45:30',
        date: new Date('2025-01-15'),
        tags: ['AI', 'Technology']
      },
      {
        id: '2',
        title: 'Web Development Trends 2025',
        description: 'Discussion about the latest web development trends.',
        coverImage: 'assets/episodes/web-trends.jpg',
        audioUrl: 'assets/episodes/web-trends.mp3',
        duration: '38:15',
        date: new Date('2025-01-10'),
        tags: ['Web Development', 'Technology']
      }
      // Add more episodes as needed
    ];

    this.episode = episodes.find(ep => ep.id === id);
  }

  playEpisode() {
    if (this.episode) {
      const audio = new Audio(this.episode.audioUrl);
      audio.play();
    }
  }
}