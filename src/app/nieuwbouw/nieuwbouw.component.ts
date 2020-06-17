import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwbouw',
  templateUrl: './nieuwbouw.component.html',
  styleUrls: ['./nieuwbouw.component.css']
})
export class NieuwbouwComponent implements OnInit {
  xitest = [
    '../assets/nieuwbouwimg/2020-02-13_2 - Photo.jpg',
    '../assets/nieuwbouwimg/2020-02-13_1 - Photo.jpg',
    '../assets/nieuwbouwimg/2020-02-13_5 - Photo.jpg',
    '../assets/nieuwbouwimg/2020-02-13_7 - Photo.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
