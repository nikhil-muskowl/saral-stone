import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-who-we-are-com',
  templateUrl: './who-we-are-com.component.html',
  styleUrls: ['./who-we-are-com.component.css']
})
export class WhoWeAreComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.home-carousel-2').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        767: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

}
