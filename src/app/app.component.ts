import { Component } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Toronto Waste Lookup';

  searchTerm: string;
  webData = data;
  result = [];

  find(){
    const textSearch = this.searchTerm.toString().toLowerCase(); // calculate this once
    this.result = this.webData.filter(e =>
      (e.title.toLowerCase().indexOf(textSearch) > 0) ||
      (e.keywords.toLowerCase().indexOf(textSearch) > 0) ||
      (e.body.toLowerCase().indexOf(textSearch) > 0)
    );
  }

  // Only delete results if searchbar is empty
  deleteResults() {
    if(!this.searchTerm || this.searchTerm === ""){
      this.result.length = 0;
    }
  }
}
