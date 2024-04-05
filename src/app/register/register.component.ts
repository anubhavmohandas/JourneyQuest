import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, HttpClientModule],
  standalone: true
})
export class RegisterComponent {

  private apiUrl = 'http://localhost:8000/register';


  registerForm = {
    userId: '',
    firstName: '',
    lastName: '',
    username: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '' 
  };
  constructor(private http: HttpClient) { }
  onSubmit(formData: any) {
    // Validate password match
    console.log(formData.password, formData.confirmPassword)
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post<any>(`${this.apiUrl}/register`, formData)
      .subscribe(
        (response: any) => {
          console.log('Registration successful:', response);
          // Handle successful registration (e.g., show success message)
          // You can potentially reset the form here
          this.registerForm = { // Reset form after submission
            userId: '',
            firstName: '',
            lastName: '',
            username: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
          };
        },
        (error: any) => {
          console.error('Registration error:', error);
          // Handle errors (e.g., display error message to user)
          // You can access the error status and message from error.status and error.error.message
          alert('Registration failed: ' + error.error.message); // Example error message display
        }
      );
  }
}
