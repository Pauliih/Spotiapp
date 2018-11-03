import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("spotify service listo");
    
  }

  getNewReleases (){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBPF94UFMw4tEjLvq-cPDkQrWK2x1y8KJrvtNWfHb9oWBYcjibyDGpvkP10Tfi7-c09irRgUmNP0Zwc6gY'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data =>{
        console.log(data);
      })
  }
}
