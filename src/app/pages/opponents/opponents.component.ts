import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponents',
  templateUrl: './opponents.component.html',
  styleUrls: ['./opponents.component.css']
})
export class OpponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  action: boolean = false;
  popUp() {
    this.action = !this.action;
  }

}
