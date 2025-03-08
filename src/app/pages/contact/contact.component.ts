import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-8 gradient-text">Get in Touch</h1>
        
        <div class="bg-slate-800 rounded-lg p-8">
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input type="text" 
                     id="name" 
                     [(ngModel)]="formData.name" 
                     name="name"
                     class="w-full bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input type="email" 
                     id="email" 
                     [(ngModel)]="formData.email" 
                     name="email"
                     class="w-full bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" 
                        [(ngModel)]="formData.message" 
                        name="message"
                        rows="4"
                        class="w-full bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full">Send Message</button>
          </form>

          <div class="mt-8 pt-8 border-t border-slate-700">
            <h2 class="text-xl font-bold mb-4">Subscribe to Updates</h2>
            <div class="flex gap-2">
              <input type="email" 
                     placeholder="Enter your email"
                     class="flex-1 bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <button class="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Handle form submission
  }
}