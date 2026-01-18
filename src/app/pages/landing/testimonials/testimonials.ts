import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Ahmed Salem',
      role: 'CEO at TechNova',
      quote: 'Hesham is a highly skilled developer. He delivered our e-commerce platform ahead of schedule with top-notch quality.',
      image: 'assets/images/client1.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      quote: 'The attention to detail in the Angular frontend work Hesham did was impressive. Highly recommended for complex projects.',
      image: 'assets/images/client2.jpg'
    },
    {
      name: 'Khaled Omar',
      role: 'Startup Founder',
      quote: 'Solid .NET backend skills. He helped us scale our API to handle thousands of requests per second smoothly.',
      image: 'assets/images/client3.jpg'
    }
  ];
}
