import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  // imports: [Router],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Add properties for username and password if needed
  username: string = '';
  password: string = '';

  // constructor(private router: Router) { }

  onSubmit() {
    // Implement login logic here
    // This example just navigates to another route for demonstration
    //this.router.navigate(['/dashboard']); // Replace with your desired route after successful login
  }
}
