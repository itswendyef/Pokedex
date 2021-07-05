import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(offset: number){
    return this.http.get<any>(`${this.baseUrl}/pokemon?limit=18&offset=${offset}`);
  }

  getPokemon(name: string){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }

  getPokemonStats(id: number){
    return this.http.get<any>(`${this.baseUrl}/stat/${id}`);
  }
}
