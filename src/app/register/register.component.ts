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

  allowedDomains: string[] = ['gmail.com', 'yahoo.com', 'outlook.com', 'gnu.ac.in', 'ganpatuniversity.ac.in'];
  onSubmit() {
    // Check if passwords match
    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Validate name length
    if (this.registerForm.name.trim().length > 32) {
      alert('Name must not exceed 32 characters');
      return;
    }
  
    // Validate username length
    if (this.registerForm.username.trim().length < 5 || this.registerForm.username.trim().length > 20) {
      alert('Username must be between 5 to 20 characters and contain only letters, numbers, and underscores');

      return;
      
    }
  
    // Validate phone number format
    if (!(/^\d{10}$/.test(this.registerForm.mobile))) {
      alert('Please enter a valid 10 digit  phone number (including country code).');
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
  
    // Submit the form if all validations pass
    console.log('Form submitted successfully:', this.registerForm);

    function validateGmail(email: string): boolean {
      // Regular expression to match the @gmail.com format
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
      // Test the email against the regex
      return gmailRegex.test(email);
    }
    
    // Example usage
    const email1 = "user@gmail.com";
     console.log(`${email1} is a valid gmail address: ${validateGmail(email1)}`); // Should log: true
    
    // const email2 = "user@example.com";
    // console.log(`${email2} is a valid gmail address: ${validateGmail(email2)}`); // Should log: false
    
    // const email3 = "user.name+tag@gmail.com";
    // console.log(`${email3} is a valid gmail address: ${validateGmail(email3)}`); // Should log: true
    
    // const email4 = "user@GMAIL.com";
    // console.log(`${email4} is a valid gmail address: ${validateGmail(email4)}`); // Should log: true, if case sensitivity is not a concern.
    
  }
  
}
