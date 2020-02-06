import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private games:any[] = [
    {
      id: 1,
      name: "Dragon Ball Z Kakarot",
      type: "RPG Fighting",
      value: "3.5 / 5"
    },
    {
      id: 2,
      name: "Fornite",
      type: "Shooter",
      value: "3.3 / 5"
    },
    {
      id: 3,
      name: "Dota",
      type: "MOBA",
      value: "4.1 / 5"
    },
    {
      id: 4,
      name: "World of Warcraft",
      type: "MMORPG",
      value: "4.2 / 5"
    },
    {
      id: 5,
      name: "Fifa 20",
      type: "Sport",
      value: "4.4 / 5"
    },
    {
      id: 6,
      name: "Hearthstone",
      type: "Card",
      value: "3.9 / 5"
    },
    {
      id: 7,
      name: "The Sims",
      type: "Simulator",
      value: "3.4 / 5"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
