import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, RouterLink,RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  currentSlide = 0;

  ngOnInit(): void {
    this.showSlides(this.currentSlide);
  }

  plusSlides(n: number): void {
    this.showSlides(this.currentSlide += n);
  }

  currentSlideIndex(n: number): void {
    this.showSlides(this.currentSlide = n);
  }

  showSlides(n: number): void {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length - 1) { this.currentSlide = 0; }
    if (n < 0) { this.currentSlide = slides.length - 1; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.currentSlide].style.display = "block";
    dots[this.currentSlide].className += " active";
  }
}