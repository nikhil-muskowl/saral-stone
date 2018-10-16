import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-our-clients-com',
  templateUrl: './our-clients-com.component.html',
  styleUrls: ['./our-clients-com.component.css']
})
export class OurClientsComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.home-client-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 2
        },
        480: {
          items: 3
        },
        767: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    });
  }

}
