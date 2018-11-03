import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { SharedComponent } from './component/shared/shared.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// importo rutas
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SharedComponent,
    ArtistaComponent,
    NavbarComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
