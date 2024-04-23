import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

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
  constructor(private apiService: ApiService) {} 
  onSubmit() {
    alert('Form submitted:');
    console.log(this.message);
 
    this.clearForm();
   }

  // onSubmit() {
  //   const formData = {
  //     name: this.message.name,
  //     email: this.message.email,
  //     subject: this.message.subject,
  //     content: this.message.content,
  //   };

  //   // Call the insertContact method from ApiService
  //   this.apiService.insertContact(formData).subscribe(
  //     (res) => {
  //       console.log('Contact message sent successfully:', res);
  //       alert('Your message has been sent successfully!');
  //       this.clearForm();
  //     },
  //     (error) => {
  //       console.log('Error sending contact message:', error);
  //       alert('An error occurred while sending your message. Please try again.');
  //     }
  //   );
  // }

  clearForm() {
    this.message = {
      name: '',
      email: '',
      subject: '',
      content: ''
    };
  }
}
