import { Component, OnInit } from '@angular/core';
import { Case } from '../case.model';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css']
})
export class CaseListComponent implements OnInit {

  cases: Case[] = [
    new Case('1', 'MISSING MAMMAL CASE', 'The Missing mammals are fifteen Zootopian residents who have gone missing in Zootopia.'),
    new Case('2', 'MOLDY ONION ROBBERY', 'A scurry weasel came into the flower shop in 3rd street and stole a duffle bag full of moldy onions.')
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
