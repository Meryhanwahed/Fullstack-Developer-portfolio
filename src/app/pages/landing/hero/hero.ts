import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  @ViewChild('typewriterText') typewriterElement!: ElementRef<HTMLHeadingElement>;

  // النصوص اللي هتظهر بالـ Typewriter effect
  roles = ["Fullstack Developer", "Angular Specialist", ".NET Core Expert", "Web Enthusiast"];
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100; // سرعة الكتابة بالملي ثانية
  deletingSpeed = 50; // سرعة المسح
  delayBetweenRoles = 2000; // التأخير قبل ما يبدأ يكتب دور جديد

  ngAfterViewInit(): void {
    this.type();
  }

  type(): void {
    const currentRole = this.roles[this.roleIndex];
    const currentText = this.typewriterElement.nativeElement.innerText;

    if (!this.isDeleting) {
      // لو لسه بيكتب
      this.typewriterElement.nativeElement.innerText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.delayBetweenRoles);
        return;
      }
    } else {
      // لو بيمسح
      this.typewriterElement.nativeElement.innerText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    setTimeout(() => this.type(), speed);
  }
}

