import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
  }

  getNewReleases (){
    const headers = new HttpHeaders({
      // el authorization expira!
      'Authorization': 'Bearer BQDGfP2YDYwsvqnNoeA28JusW1uD4h42Iyg678kl2eV-qkHOyb8L9_AEXq_2uj9dmlr65glLV3XjleIbf1c'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

      
  }
}
