import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';// ضيفي ده
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header{
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // لو المستخدم نزل أكتر من 50 بكسل، غير الحالة
    this.isScrolled = window.scrollY > 50;
  }
}
