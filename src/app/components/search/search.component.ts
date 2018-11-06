import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { 
  }
  
  buscar(termino: String){
    this.loading = true;

    this.spotify.getArtist(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      })
  }
}
