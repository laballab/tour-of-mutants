import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 16, name: 'RubberMan', power: 35 },
      { id: 14, name: 'Celeritas', power: 40 },
      { id: 11, name: 'Mr. Nice', power: 60 },
      { id: 13, name: 'Bombasto', power: 40 },
      { id: 15, name: 'Magneta', power: 35  },
      { id: 20, name: 'Tornado', power: 35 },
      { id: 17, name: 'Dynama', power: 35  },
      { id: 12, name: 'Narco', power: 35  },
      { id: 18, name: 'Dr IQ', power: 35  },
      { id: 19, name: 'Magma', power: 35  },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
