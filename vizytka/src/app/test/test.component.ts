import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

}
function myFunction() {
  var a = document.getElementById("ask1");
  console.log(a);
}
myFunction()


