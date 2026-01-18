import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // مهم جداً للـ Form
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Submitted!', this.formData);
    alert('Thank you, Hesham will receive your message soon!');
    // هنا تقدري تربطي مع EmailJS أو أي Backend API
  }
}
