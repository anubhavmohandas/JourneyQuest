import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  teamMembers = [
    {
      name: 'Anubhav Mohandas',
      role: 'Founder',
      bio: 'A passionate entrepreneur of the tech industry.',
      photoUrl:"./assets/Images/male2.jpeg"
    },
    {
      name: 'Saniya Shaikh',
      role: 'Co - Founder',
      bio: 'A skilled developer who loves creating innovative solutions.',
      photoUrl:"./assets/Images/fem.jpg"
    }
  ];

  mission = "Our mission is to empower individuals to dream, plan, and achieve their life's adventures through our intuitive and user-friendly digital bucket list and travel planning platform." ;

  vision = "Our vision is to be the go-to platform for individuals worldwide seeking to organize, prioritize, and realize their travel aspirations, creating memorable experiences that enrich their lives.";

}
