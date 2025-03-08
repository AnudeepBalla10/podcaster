import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero min-h-[80vh] relative flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
      <div class="container mx-auto px-4 z-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 opacity-0" #heroTitle>
            Where Technology
            <span class="gradient-text block">Meets Innovation</span>
          </h1>
          <p class="text-lg md:text-xl mb-8 text-slate-300 opacity-0" #heroText>
            Join us as we explore the cutting edge of tech, featuring in-depth discussions
            with industry leaders and innovators.
          </p>
          <a routerLink="/episodes" 
             class="btn-primary inline-flex items-center space-x-2 opacity-0" 
             #heroButton>
            <span>Listen Now</span>
            <i class="fas fa-headphones"></i>
          </a>
        </div>
      </div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div *ngFor="let i of [1,2,3,4,5]" 
             class="absolute bg-primary/10 rounded-full"
             [ngStyle]="{
               'width.px': 100 + i * 100,
               'height.px': 100 + i * 100,
               'left.%': 20 + i * 10,
               'top.%': 10 + i * 15
             }">
        </div>
      </div>
    </section>

    <section class="featured-episode py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Latest Episode</h2>
        <div class="podcast-card">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/3">
              <img src="https://via.placeholder.com/400x400" 
                   alt="Latest Episode" 
                   class="rounded-lg w-full">
            </div>
            <div class="w-full md:w-2/3">
              <h3 class="text-2xl font-bold mb-2">The Future of AI Development</h3>
              <p class="text-slate-300 mb-4">
                In this episode, we dive deep into the latest developments in AI
                and discuss their implications for the future of technology.
              </p>
              <div class="flex items-center space-x-4">
                <button class="btn-primary">
                  <i class="fas fa-play mr-2"></i> Play Episode
                </button>
                <span class="text-slate-400">
                  <i class="fas fa-clock mr-1"></i> 45:30
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="topics py-16 bg-slate-900/50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Popular Topics</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div *ngFor="let topic of topics" 
               class="p-6 rounded-lg bg-slate-800 text-center hover:bg-slate-700 
                      transition-colors cursor-pointer">
            <i [class]="'fas ' + topic.icon + ' text-3xl text-secondary mb-3'"></i>
            <h3 class="font-bold">{{ topic.name }}</h3>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent implements OnInit {
  topics = [
    { name: 'AI & ML', icon: 'fa-robot' },
    { name: 'Web Dev', icon: 'fa-code' },
    { name: 'Cybersecurity', icon: 'fa-shield-alt' },
    { name: 'Cloud Computing', icon: 'fa-cloud' },
  ];

  ngOnInit() {
    this.initializeAnimations();
  }

  private initializeAnimations() {
    gsap.from('.hero .absolute.bg-primary', {
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power3.out'
    });

    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
    
    tl.to('#heroTitle', { opacity: 1, y: 0, duration: 1 })
      .to('#heroText', { opacity: 1, y: 0 }, '-=0.6')
      .to('#heroButton', { opacity: 1, y: 0 }, '-=0.4');
  }
}