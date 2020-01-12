import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student = {
    fN: 'Jon',
    lN: 'Stewart',
    sN: 'something',
    nN: 'John',
    hob: 'Being Called !John ? Jon : !John ? Jon: Jon'
  };

   private studentData: Student[] = [
    {
      fN: 'Jon',
      lN: 'Stewart',
      sN: 'something',
      nN: 'John',
      hob: 'Being Called !John ? Jon : !John ? Jon: Jon'
    },
    {
      fN: 'Esteban',
      lN: 'Zaragoza',
      sN: 'Esteban Z',
      nN: 'uB Darkness',
      hob: 'chillin'
    },
    {
      fN: 'Deon',
      lN: 'Simmons Jr.',
      sN: 'Deon',
      nN: 'N/A',
      hob: 'Rolling Characters with 5 Bookmarks'
    },
  ];
  constructor() { }
  
  getStudent(): Student[] {
    return this.studentData;
  }

  setCardData(person: Student) {
    // Save student data for Card
    this.cardData = person;
  }

  getCardData(): Student {
    // Retrieve student data for Card
    return this.cardData;
  }
}
