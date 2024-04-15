import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  teamMembers = [
    {
      name: 'Anubhav Mohandas',
      role: 'Founder',
      bio: 'A passionate entrepreneur of the tech industry.'
    },
    {
      name: 'Saniya Shaikh',
      role: 'Co - Founder',
      bio: 'A skilled developer who loves creating innovative solutions.'
    }
  ];

  mission = 'Our mission is to provide high-quality products and services to our customers, ensuring customer satisfaction and innovation in everything we do.';

  vision = 'Our vision is to become a leading company in the tech industry, recognized for our commitment to excellence, innovation, and customer satisfaction.';

  constructor() { }
}
