import { Injectable } from '@angular/core';
import { Villain } from './villain';
import { VILLAINS } from './mock';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  getVillains(): Villain[] {
    return VILLAINS;
  }

  constructor() { }
}
