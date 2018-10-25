import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../../services/testimonial/testimonials.service';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  result;
  public model: any[] = [];

  constructor(
    private testimonialsService: TestimonialsService
  ) {
    this.getTestimonials();
  }

  ngOnInit() {
    jQuery('.testimonial-home').owlCarousel({
      loop: true,
      autoplay: false,
      margin: 80,
      nav: false,
      dots: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        991: {
          items: 2
        }
      }
    });
  }

  getTestimonials() {
    this.model = [];
    this.testimonialsService.getData().subscribe(
      response => {
        for (let index = 0; index < response.data.length; index++) {
          this.model.push({
            id: response.data[index].id,
            author: response.data[index].author,
            image: response.data[index].image,
            role: response.data[index].role,
            text: response.data[index].text,
          });         
        }

        //console.log(this.model);
      },
      err => {
        console.error(err)
      },
    );
  }

}
