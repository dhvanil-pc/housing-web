import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties :Array<any> =[
    {
    "id": 1,
    "Type" : "House",
    "Name" : "Birla House",
    "Price" : 12000,
    },
     {
      "id": 2,
      "Type" : "House",
      "Name" : "Eros House",
      "Price" : 16000,
      },
      {
        "id": 3,
        "Type" : "House",
        "Name" : "White House",
        "Price" : 19000,
        },
        {
          "id": 4,
          "Type" : "House",
          "Name" : "Perl Villa",
          "Price" : 21000,
          },
          {
            "id": 5,
            "Type" : "House",
            "Name" : "Adani House",
            "Price" : 18000,
            },
            {
              "id": 6,
              "Type" : "House",
              "Name" : "Ambani House",
              "Price" : 30000,
              },

]

  constructor() { }

  ngOnInit() {
  }

}
