import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactUsComponent {
  message = {
    name: '',
    email: '',
    subject: '',
    content: ''
  };

  onSubmit() {
   alert('Form submitted:');

   this.clearForm();
  }

  clearForm() {
    this.message = {
      name: '',
      email: '',
      subject: '',
      content: ''
    };
  }
}
