import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
	pokemons: any[] = [];
  constructor(private pokeDb: PokemonService) { }

  ngOnInit(): void {
		this.pokeDb.getPokemons().subscribe((res: any) => {
			res.results.forEach((results: any) => {
				this.pokeDb.getPokemon(results.name).subscribe((pokeInfo: any) => {
					this.pokemons.push(pokeInfo);
					console.log(pokeInfo);
				})
			});
			//console.log(res);
		});
  }

}
