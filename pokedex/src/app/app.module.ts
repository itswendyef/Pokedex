import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    SearchbarComponent,
    PaginationComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
