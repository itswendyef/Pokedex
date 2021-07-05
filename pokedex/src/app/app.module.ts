import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTS
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

//PIPES
import { FilterPipe } from './pipes/filter.pipe';

//OTHERS
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PaginationComponent,
    PokeDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
