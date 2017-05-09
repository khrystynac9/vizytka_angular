import {Component, OnInit} from '@angular/core';
// import {Http} from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // data;

  constructor(/*private http: Http*/) {
    // this.http.get('../assets/data.json')
    //   .subscribe(res => this.data = res.json());
  }

  ngOnInit() {
  }

  getData() {
    // document.getElementById("address").innerHTML = this.data.address;
    // document.getElementById("tel").innerHTML = this.data.tel;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let clientData = JSON.parse(xhr.responseText);
        document.getElementById("address").innerHTML = clientData.address;
        document.getElementById("tel").innerHTML = clientData.tel;
      }
    };
    xhr.open('GET', '../assets/data.json', true);
    xhr.send();
  }
}
