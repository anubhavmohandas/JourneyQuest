import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = {
    name: '',
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '' 
  };

  onSubmit() {
    // Check if passwords match
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Validate name field
    if (!this.registerForm.name.trim()) {
      alert('Please enter your name');
      return;
    }

    // Validate username length
    if (this.registerForm.username.trim().length < 5 || this.registerForm.username.trim().length > 20) {
      alert('Username must be between 5 to 20 characters');
      return;
    }

    // Validate phone number format
    if (!(/^\d{10}$/.test(this.registerForm.mobile))) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    // Validate email format
    if (!(/\S+@\S+\.\S+/.test(this.registerForm.email))) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate password length and complexity
    if (this.registerForm.password.length < 8 || this.registerForm.password.length > 32 ||
        !/[a-z]/.test(this.registerForm.password) ||
        !/[A-Z]/.test(this.registerForm.password) ||
        !/\d/.test(this.registerForm.password) ||
        !/[!@#$%^&*]/.test(this.registerForm.password)) {
      alert('Password must be 8-32 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character');
      return;
    }

    // Submit the form if all validations pass
    console.log('Form submitted successfully:', this.registerForm);
  }
}
