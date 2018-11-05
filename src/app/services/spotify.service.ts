import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    
  }

  getNewReleases (){
    const headers = new HttpHeaders({
      // el authorization expira!
      'Authorization': 'Bearer BQB1Dwy3EfYgbFkpQmwi1Pj79bp765iDmaLupJvLdBHEhL4F4nnFc9TEvxdCUQXHMCnsvdA0I6yYrrG-NSo'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: String) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB1Dwy3EfYgbFkpQmwi1Pj79bp765iDmaLupJvLdBHEhL4F4nnFc9TEvxdCUQXHMCnsvdA0I6yYrrG-NSo'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map (data => data['artists'].items));
  }
}
