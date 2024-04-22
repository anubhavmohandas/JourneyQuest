import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})  
export class LoginComponent {

  loginForm = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  onSubmit() {
    console.log("working")
    // Validate username and password
    if (!this.loginForm.username.trim() || !this.loginForm.password.trim()) {
      alert('Please enter both username and password');
      return;
    }

    const userData = {
      username: this.loginForm.username,
      password: this.loginForm.password
    };

    // Call the loginUser method from ApiService
    this.apiService.loginUser(userData).subscribe(
      (res) => {
        console.log('Login successful:', res);
        alert('Login successful!');
        this.apiService.setUser(userData.username)
        // Navigate to homepage or dashboard after successful login
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log('Error during login:', error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
