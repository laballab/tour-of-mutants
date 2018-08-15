import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Villain } from './villain';
import { VILLAINS } from './mock';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  getVillains(): Observable<Villain[]> {
    this.messageService
      .add('VillainService: Villains fetched!');
    return of(VILLAINS);
  }

  getVillain(id: number): Observable<Villain> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`VillainService: fetched villain id=${id}`);
    return of(VILLAINS.find(villain => villain.id === id));
  }

  constructor(private messageService: MessageService) { }
}
