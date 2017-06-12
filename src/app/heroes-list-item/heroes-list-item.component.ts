import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-list-item',
  templateUrl: './heroes-list-item.component.html',
  styleUrls: ['./heroes-list-item.component.scss']
})
export class HeroesListItemComponent implements OnInit {
  @Input()
  character: {};

  constructor() { }

  ngOnInit() {
  }

}
