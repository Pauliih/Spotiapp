import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) { 
    let data = [];
    console.log("Constructor de home");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (response: any) => {
          console.log(response[0].name);
          this.data = response;
          console.log(response);
        }
      )
  }

  ngOnInit() {
  }

}
