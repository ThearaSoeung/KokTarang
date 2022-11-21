import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  developer: any = [
    {
      name: "Bro Ro",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://images.teamtalk.com/content/uploads/2022/10/31115902/man-utd-striker-cristiano-ronaldo.jpg'
    },
    {
      name: "Bro Ra",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://media.cnn.com/api/v1/images/stellar/prod/220605164634-messi-estonia-5-goals.jpg?c=original'
    },
    {
      name: "Bro Ro",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://images.teamtalk.com/content/uploads/2022/10/31115902/man-utd-striker-cristiano-ronaldo.jpg'
    },
    {
      name: "Bro Ro",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://images.teamtalk.com/content/uploads/2022/10/31115902/man-utd-striker-cristiano-ronaldo.jpg'
    },
    {
      name: "Bro Ro",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://images.teamtalk.com/content/uploads/2022/10/31115902/man-utd-striker-cristiano-ronaldo.jpg'
    },
    {
      name: "Bro Ro",
      position: "Designer",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed velit nobis molestiae',
      img: 'https://images.teamtalk.com/content/uploads/2022/10/31115902/man-utd-striker-cristiano-ronaldo.jpg'
    },
  ]
}
