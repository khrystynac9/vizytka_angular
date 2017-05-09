import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  //selector:'',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     jQuery(document).ready(function(){
       jQuery( ".item1" ).click(function() {
         jQuery(".pojawa1").toggle( "slow", "swing" );
       });
       jQuery( ".item2" ).click(function() {
         jQuery(".pojawa2").toggle( "slow", "swing" );
       });
       jQuery( ".item3" ).click(function() {
         jQuery(".pojawa3").toggle( "slow", "swing" );
       });
    });
  };
}
