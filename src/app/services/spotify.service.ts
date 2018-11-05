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
      'Authorization': 'Bearer BQDAxTnRKJXJpEDt2aAywq9GXuQjhKrrkCeCIfODlW4hR1Mze4c6bqE5E_SjhvO4iWoS1n8r8o2Gbh1obdQ'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(termino: String) {
    const headers = new HttpHeaders({
      // el authorization expira!
      'Authorization': 'Bearer BQDAxTnRKJXJpEDt2aAywq9GXuQjhKrrkCeCIfODlW4hR1Mze4c6bqE5E_SjhvO4iWoS1n8r8o2Gbh1obdQ'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
