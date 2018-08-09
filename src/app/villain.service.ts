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

  constructor(private messageService: MessageService) { }
}
