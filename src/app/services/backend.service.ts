import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getListOfSongs() {
    return [
      { id: 1, name: 'Lemon' },
      { id: 1, name: 'Lemon2' },
    ];
  }
}
