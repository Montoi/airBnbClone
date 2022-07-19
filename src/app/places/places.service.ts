import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Mangattan Mansion',
      'In the heart of new york city',
      'https://ellisdownhome.com/wp-content/uploads/2019/08/shutterstock_695847865.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujous',
      'A romantic place in paris',
      'https://tse1.mm.bing.net/th?id=OIP.9zouQQd8rxm-2dBlL1GA4wHaEo&pid=Api&P=0',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://tse3.mm.bing.net/th?id=OIP.CJE0lDxbWE1TB6sTtBKqqwHaFS&pid=Api&P=0',
      99.99
    ),
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string){
    return {...this.places.find(p => p.id === id)};
  }
}
