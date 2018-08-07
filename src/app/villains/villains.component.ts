import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';
import { VILLAINS } from '../mock';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit {
  villains: Villain[] = VILLAINS;
  selectedVillain: Villain;

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

  constructor() { }

  ngOnInit() {
  }

}
