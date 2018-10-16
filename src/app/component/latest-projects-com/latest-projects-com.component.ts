import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-latest-projects-com',
  templateUrl: './latest-projects-com.component.html',
  styleUrls: ['./latest-projects-com.component.css']
})
export class LatestProjectsComComponent implements OnInit {
  public owlAnimateFilter;
  constructor() {
    this.owlAnimateFilter = 1;
  }

  ngOnInit() {
    var owl = jQuery('.owl-carousel-filter').owlCarousel({
      loop: false,
      autoplay: true,
      margin: 20,
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
        580: {
          items: 2
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        },
        1152: {
          items: 4
        },
        1360: {
          items: 4
        },
        1366: {
          items: 5
        }
      }
    })

    /* Filter Nav */

    jQuery('.btn-filter-wrap').on('click', '.btn-filter', function (e) {
      var filter_data = jQuery(this).data('filter');

      /* return if current */
      if (jQuery(this).hasClass('btn-active')) return;

      /* active current */
      jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

      /* Filter */
      owl.owlFilter(filter_data, function (_owl) {
        jQuery(_owl).find('.item').each(this.owlAnimateFilter);
      });
    })
  }

}
