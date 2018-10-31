import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.about-us-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      margin:30,
      nav:true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      items:1,
      dots: false,
    });

    window.scrollTo(0, 0);
  }

}
