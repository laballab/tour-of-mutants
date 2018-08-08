import { Component, OnInit } from '@angular/core';
import { VillainService } from '../villain.service';
import { Villain } from '../villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit {
  villains: Villain[];
  selectedVillain: Villain;

  constructor(private villainService: VillainService) { }

  ngOnInit() {
    this.getVillains();
  }


  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

  getVillains(): void {
    this.villainService.getVillains()
    .subscribe(villains => this.villains = villains);
  }

}
