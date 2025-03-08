import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
              <img src="https://via.placeholder.com/400x400" 
                   alt="Episode Cover" 
                   class="w-full rounded-lg">
            </div>
            <div class="w-full md:w-2/3">
              <h1 class="text-3xl font-bold mb-4">Episode Title</h1>
              <p class="text-slate-300 mb-6">
                Detailed episode description goes here. This will be populated with
                actual episode data once connected to a data source.
              </p>
              <div class="flex items-center space-x-4 mb-8">
                <button class="btn-primary">
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
export class EpisodeDetailComponent {
  constructor(private route: ActivatedRoute) {}
}