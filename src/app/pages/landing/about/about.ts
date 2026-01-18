import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    const scrollPos = window.innerHeight + window.scrollY;

    elements.forEach((el: any) => {
      if (scrollPos > el.offsetTop + 100) {
        el.classList.add('active');
      }
    });
  }
}
