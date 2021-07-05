import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  @Input() public pokemon: any;

  constructor(
	  public ngbModal: NgbModal) { }

  ngOnInit(): void {
    console.log(this.pokemon);
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
