import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isCollapsed = true;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'My super app';
  }

}