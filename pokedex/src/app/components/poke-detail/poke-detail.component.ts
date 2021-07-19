import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
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
  showFirstChart: boolean = true;

  //CHART 1
  public barChartOptions: ChartOptions = {responsive: true,};
  public barChartLabels: Label[] = ['HP', 'Attack', 'Defense', 'Speed', 'Sp Atk', 'Sp Def'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  
  //CHART 2
  public radarChartOptions: RadialChartOptions = {responsive: true,};
  public radarChartLabels: Label[] = ['HP', 'Attack', 'Defense', 'Speed', 'Sp Atk', 'Sp Def'];
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartDataSets[] = [];

  constructor(
	  public ngbModal: NgbModal,
    private pokeDb: PokemonService) { }

  ngOnInit(): void {
    this.getCharts();
  }

  /* CHARTS */
  changeChart(){
    this.showSecondChart = !this.showSecondChart;
    this.showFirstChart = !this.showFirstChart;
  }
  getCharts(){
    let pokeStats = [];
    for(let i=0; i<6; i++){
      pokeStats.push(this.pokemon.stats[i].base_stat);
    }
    this.barChartData = [{ data: pokeStats, label: this.pokemon.name}];
    this.radarChartData = [{ data: pokeStats, label: this.pokemon.name}];
  }

  /* MODAL */
  modalDismiss(){
    this.ngbModal.dismissAll();
  }

}
