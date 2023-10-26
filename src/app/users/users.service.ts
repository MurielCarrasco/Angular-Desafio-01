import { Injectable } from '@angular/core';
import { Observable, delay, interval, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
}
export interface Country {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getCounter(): Observable<number> {
    return interval(1000);
  }

  getColors(): Observable<string[]> {
    return of(['verde', 'rojo', 'azul']).pipe(delay(5000));
  }
  getCountries(): Observable<Country[]> {
    return of([
      {
        id: 1,
        name: 'Chile',
      },
      {
        id: 2,
        name: 'Argentina',
      },
    ]).pipe(delay(2000));
  }

  getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'Maria',
        },
        {
          id: 2,
          name: 'Jacinta',
        },
      ]);
      subscriber.complete();
    });
  }
}
