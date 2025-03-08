import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img [src]="coverImage" alt="Episode Cover" class="w-12 h-12 rounded">
          <div>
            <h4 class="text-sm font-semibold">{{ title }}</h4>
            <div class="text-xs text-slate-400">{{ currentTime }} / {{ duration }}</div>
          </div>
        </div>
        
        <div class="flex items-center space-x-4">
          <button (click)="rewind()" class="text-xl hover:text-secondary transition-colors">
            <i class="fas fa-backward"></i>
          </button>
          <button (click)="togglePlay()" class="text-2xl hover:text-secondary transition-colors">
            <i [class]="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
          </button>
          <button (click)="forward()" class="text-xl hover:text-secondary transition-colors">
            <i class="fas fa-forward"></i>
          </button>
        </div>
        
        <div class="hidden md:block w-1/3">
          <input type="range" 
                 [value]="progress" 
                 (input)="onSeek($event)"
                 class="w-full"
                 min="0"
                 max="100">
        </div>
      </div>
    </div>
  `
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  @Input() audioUrl: string = '';
  @Input() title: string = '';
  @Input() coverImage: string = '';
  
  audio: HTMLAudioElement | null = null;
  isPlaying: boolean = false;
  currentTime: string = '0:00';
  duration: string = '0:00';
  progress: number = 0;

  ngOnInit() {
    this.audio = new Audio(this.audioUrl);
    this.setupAudioEvents();
  }

  ngOnDestroy() {
    this.audio?.pause();
    this.audio = null;
  }

  private setupAudioEvents() {
    if (!this.audio) return;

    this.audio.addEventListener('timeupdate', () => {
      if (!this.audio) return;
      this.currentTime = this.formatTime(this.audio.currentTime);
      this.progress = (this.audio.currentTime / this.audio.duration) * 100;
    });

    this.audio.addEventListener('loadedmetadata', () => {
      if (!this.audio) return;
      this.duration = this.formatTime(this.audio.duration);
    });

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
    });
  }

  togglePlay() {
    if (!this.audio) return;
    
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  rewind() {
    if (!this.audio) return;
    this.audio.currentTime -= 10;
  }

  forward() {
    if (!this.audio) return;
    this.audio.currentTime += 10;
  }

  onSeek(event: Event) {
    if (!this.audio) return;
    const target = event.target as HTMLInputElement;
    const time = (Number(target.value) / 100) * this.audio.duration;
    this.audio.currentTime = time;
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}