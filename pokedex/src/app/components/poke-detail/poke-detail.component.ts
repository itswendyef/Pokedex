import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  @Input() public pokemon: any;
  showSecondChart: boolean = false;

  //CHART 1
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['HP', 'Attack', 'Defense', 'Speed', 'Sp Atk', 'Sp Def'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  
  constructor(
	  public ngbModal: NgbModal,
    private pokeDb: PokemonService) { }

  ngOnInit(): void {
  }

    /* CHART 1 */
    getChart1(){
      let pokeStats = [];
      for(let i=0; i<6; i++){
        
        pokeStats.push(this.pokemon.stats[i].base_stat);
        //console.log(this.pokemon.stats[i].base_stat);
      }
      console.log(pokeStats);
      this.barChartData = [{ data: pokeStats, label: this.pokemon.name}];
    }

  padLeadingZeros(num:number, size:number) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
  }

  modalDismiss(){
    this.ngbModal.dismissAll();
  }
  
  hctToKg(hct: number){
    return hct/10;
  }

  dcmToMtrs(dcm: number){
    return dcm/10;
  }

}
