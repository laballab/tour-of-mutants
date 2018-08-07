import { Component, OnInit } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})

export class VillainsComponent implements OnInit {
  villain: Villain = {
    id: 2,
    name: 'Magneto',
    power: 108
  };

  constructor() { }

  ngOnInit() {
  }

}
