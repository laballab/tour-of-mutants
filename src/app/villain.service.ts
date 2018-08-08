import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Villain } from './villain';
import { VILLAINS } from './mock';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  getVillains(): Observable<Villain[]> {
    return of(VILLAINS);
  }

  constructor() { }
}
