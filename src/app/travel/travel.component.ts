import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Trip {
  tripName: string;
  tripDescription: string;
  destination: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  transportation: string;
  departureCity: string;
  departureDate: string;
  returnDate: string;
  accommodationType: string;
  accommodationName: string;
  bookingConfirmation: string;
  activities: string;
  attractions: string;
  totalBudget: string;
  dailyBudget: string;
  notes: string;
  packingList: string;
  status: string; 
  isCompleted: boolean;
}


@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
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
    packingList: '',
    status: '',
    isCompleted: false
  };

  trips: Trip[] = [];
  selectedTrip: Trip | null = null;

  planTrip() {
    // Validation
    if (this.newTrip.tripName.trim() === '') {
      alert('Please enter a trip name.');
      return;
    }

    // Add the isCompleted property to the newTrip object
    this.newTrip.isCompleted = false;

    // Add the new trip to the trips list
    this.trips.push(this.newTrip);
    // this.sortTrips();

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
      packingList: '',
      status: '',
      isCompleted: false
    };
  }

  showTripDetails(trip: Trip) {
    // this.selectedTrip = trip;
    this.newTrip = trip;
  }

  deleteTrip(index: number) {
    this.trips.splice(index, 1);
  }
}