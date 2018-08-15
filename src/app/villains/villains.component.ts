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

  constructor(private villainService: VillainService) { }

  ngOnInit() {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains()
    .subscribe(villains => this.villains = villains);
  }
}
