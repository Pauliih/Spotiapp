import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
  }

  getQuery( query: String) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD2x50iXyuAlV6_qKeYhXRcGdyv8RrgANMmpr1dDhKPTkLLWK_n0Y5ya5yeVZ3jD2qbKnBTCS0YsqJ61qY'
    });
    return this.http.get( url, {headers});
  }

  getNewReleases (){
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: String) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map (data => data['artists'].items));
  }
}
