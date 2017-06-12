import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  providers: [ ApiService ]
})
export class HeroesListComponent implements OnInit {
  characters: Array<{}> = [];

  constructor(private client: ApiService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.client.fetchCharacters()
      .subscribe(
        characters => {
          characters.forEach(character => {
            this.characters.push({
              name: character.name,
              image: `${character.thumbnail.path}.${character.thumbnail.extension}`
            });
          });
        },
        err => {
          console.log(err);
        }
      );
  }
}
