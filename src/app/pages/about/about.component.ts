import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 gradient-text">About TechCast</h1>
        
        <div class="bg-slate-800 rounded-lg p-8 mb-8">
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-slate-300 mb-6">
            TechCast is dedicated to bringing you the latest insights and discussions
            about cutting-edge technology. Our podcast series features in-depth
            conversations with industry leaders, innovators, and experts who are
            shaping the future of tech.
          </p>
        </div>

        <div class="bg-slate-800 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">The Host</h2>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="w-48 h-48 rounded-full overflow-hidden">
              <img src="https://via.placeholder.com/200x200" 
                   alt="Host" 
                   class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">John Doe</h3>
              <p class="text-slate-300">
                With over 15 years of experience in the tech industry, John brings
                a wealth of knowledge and insight to each episode. His passion for
                technology and innovation drives engaging discussions that help
                listeners stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}