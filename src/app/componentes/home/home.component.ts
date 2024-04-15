import { Component, HostListener, OnInit } from '@angular/core';

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {

  }

  // Carousel
  products = [
    {source: 'assets/imagens/carrosel/foto2.jpg', alt: 'Description for Image 2', title: 'Title 2'},
    {source: 'assets/imagens/carrosel/foto3.jpg', alt: 'Description for Image 3', title: 'Title 3'},
    {source: 'assets/imagens/carrosel/foto4.jpg', alt: 'Description for Image 4', title: 'Title 4'},
  ]

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
 
}
