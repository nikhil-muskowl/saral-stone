import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header-com',
  templateUrl: './header-com.component.html',
  styleUrls: ['./header-com.component.css']
})
export class HeaderComComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    $('.nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
   
  }

}
