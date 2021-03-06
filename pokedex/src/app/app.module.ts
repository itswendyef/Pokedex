import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMPONENTS
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

//PIPES
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PokedexNumberFormatPipe } from './pipes/formats/pokedex-number-format/pokedex-number-format.pipe';
import { TitleCasePipe } from './pipes/formats/title-case-word/title-case.pipe';
import { DecimalPipe } from './pipes/formats/decimal/decimal.pipe';

//OTHERS
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeDetailComponent,
    FilterPipe,
    PokedexNumberFormatPipe,
    TitleCasePipe,
    DecimalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
