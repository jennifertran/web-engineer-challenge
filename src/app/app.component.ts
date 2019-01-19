import { Component } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Toronto Waste Lookup';

  searchTerm = "";

  webData = data;

  find(){
    console.log("term is " + this.searchTerm);
  }
}
