import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokeDetailComponent } from '../poke-detail/poke-detail.component';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
	pokemons: any[] = [];
	page = 1;
	totalPokemons: number = 1118;
	pokemonFilter: string = '';
	indexs: number[] = [];
	sortPokemons: any[] = [];

  constructor(
	  private pokeDb: PokemonService,
	  private ngbModal: NgbModal
	) { }

  ngOnInit(): void {
	  this.getPokemons();
  }

  getPokemons(){
	this.pokeDb.getPokemons(18*(this.page - 1)).subscribe((res: any) => {
		this.totalPokemons = res.count;
		res.results.forEach((results: any) => {
			this.pokeDb.getPokemon(results.name).subscribe((pokeInfo: any) => {
				this.pokemons.push(pokeInfo);
			})
		});
		
	});
  }

  padLeadingZeros(num:number, size:number) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

	capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
  }

  openModal(pokemon: any){
	const modalRef= this.ngbModal.open(PokeDetailComponent, {size: 'md', backdrop: 'static'});	
	modalRef.componentInstance.pokemon = pokemon;
}

}
