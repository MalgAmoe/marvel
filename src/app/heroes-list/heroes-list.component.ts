import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  providers: [ ApiService ]
})
export class HeroesListComponent implements OnInit {
  characters: {};

  constructor(private client: ApiService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.client.fetchCharacters()
      .subscribe(
        characters => {
          this.characters = characters;
        },
        err => {
          console.log(err);
        }
      );
  }
}
