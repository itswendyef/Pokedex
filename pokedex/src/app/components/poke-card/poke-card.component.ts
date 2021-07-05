import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  constructor(private pokeDb: PokemonService) { }

  ngOnInit(): void {
	  this.getPokemons();
  }

  getPokemons(){
	this.pokeDb.getPokemons(18*(this.page - 1)).subscribe((res: any) => {
		this.totalPokemons = res.count;
		res.results.forEach((results: any) => {
			this.pokeDb.getPokemon(results.name).subscribe((pokeInfo: any) => {
				this.pokemons.push(pokeInfo);
				//console.log(pokeInfo);
			})
		});
	});
  }

}
