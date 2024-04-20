import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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

  allowedDomains: string[] = ['gmail.com', 'yahoo.com', 'outlook.com', 'gnu.ac.in', 'ganpatuniversity.ac.in'];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  onSubmit() {
    // Validate name is not empty
    if (!this.registerForm.name.trim()) {
      alert('Please enter your name');
      return;
    }

    // Validate name length
    if (this.registerForm.name.trim().length > 32) {
      alert('Name must not exceed 32 characters');
      return;
    }
  
    // Validate username length and format
    if (this.registerForm.username.trim().length < 5 || this.registerForm.username.trim().length > 20 ||
        !/^[a-zA-Z0-9_]+$/.test(this.registerForm.username.trim())) {
      alert('Username must be between 5 to 20 characters and contain only letters, numbers, and underscores');
      return;
    }
  
    // Validate phone number format
    if (!(/^\d{10}$/.test(this.registerForm.mobile))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.registerForm.email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Validate email domain
    const domain = this.registerForm.email.split('@')[1];
    if (!domain || !this.allowedDomains.includes(domain)) {
      alert('Please enter a valid email address with domains: ' + this.allowedDomains.join(', '));
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
  
    // Validate passwords match
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Prepare user data
    const userData = {
      firstName: this.registerForm.name.split(' ')[0],  
      lastName: this.registerForm.name.split(' ')[1] || '', 
      username: this.registerForm.username,
      mobile: this.registerForm.mobile,
      email: this.registerForm.email,
      password: this.registerForm.password
    };

    // Call the registerUser method from ApiService
    this.apiService.registerUser(userData).subscribe(
      (res) => {
        console.log('User registration successful:', res);
        alert('Registration successful! Please log in.');
        this.clearForm();
        
        // Navigate to homepage after successful registration
        this.router.navigateByUrl('/login');
      },

      (error) => {
        console.log('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  clearForm() {
    this.registerForm = {
      name: '',
      username: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '' 
    };
  }
}
