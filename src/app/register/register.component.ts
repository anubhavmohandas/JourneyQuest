import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule],
})
export class RegisterComponent {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  registerForm = {
    firstName: '',
    lastName: '',
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '' // Added confirmPassword field
  };

  onSubmit(formData: any) {
    // Send registration data to backend
    this.http.post<any>(`${this.apiUrl}/register`, formData)
      .subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          // Handle successful registration (e.g., show success message)
        },
        (error: any) => {
          console.error('Registration error:', error);
          // Handle registration error (e.g., display error message to user)
        }
      );
  }
}
