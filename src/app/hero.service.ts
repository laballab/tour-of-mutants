import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService
      .add('HeroService: Heroes fetched!');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
