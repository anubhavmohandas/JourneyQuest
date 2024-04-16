import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  newTrip = {
    tripName: '',
    tripDescription: '',
    destination: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
    transportation: '',
    departureCity: '',
    departureDate: '',
    returnDate: '',
    accommodationType: '',
    accommodationName: '',
    bookingConfirmation: '',
    activities: '',
    attractions: '',
    totalBudget: '',
    dailyBudget: '',
    notes: '',
    packingList: ''
  };

  planTrip() {
    // Logic to handle trip planning
    console.log('Planning trip:', this.newTrip);
    
    // Clear the form after submission
    this.clearForm();
  }

  clearForm() {
    this.newTrip = {
      tripName: '',
      tripDescription: '',
      destination: '',
      country: '',
      city: '',
      startDate: '',
      endDate: '',
      transportation: '',
      departureCity: '',
      departureDate: '',
      returnDate: '',
      accommodationType: '',
      accommodationName: '',
      bookingConfirmation: '',
      activities: '',
      attractions: '',
      totalBudget: '',
      dailyBudget: '',
      notes: '',
      packingList: ''
    };
  }
}
