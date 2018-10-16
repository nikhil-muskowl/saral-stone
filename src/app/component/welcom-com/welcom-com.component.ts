import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-welcom-com',
  templateUrl: './welcom-com.component.html',
  styleUrls: ['./welcom-com.component.css']
})
export class WelcomComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.home-carousel-1').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
      //center: true,
      nav: false,
      dots: true,
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
