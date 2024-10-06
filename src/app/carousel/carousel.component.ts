import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
    images = [
      {name:'a.jpg',caption:'1'},
      {name:'b.jpg',caption:'2'},
      {name:'c.jpg',caption:'3'}
    ];
}
