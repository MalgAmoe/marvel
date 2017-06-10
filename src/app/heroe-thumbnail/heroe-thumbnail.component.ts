import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-heroe-thumbnail',
  templateUrl: './heroe-thumbnail.component.html',
  styleUrls: ['./heroe-thumbnail.component.scss'],
  providers: [ ApiService ]
})
export class HeroeThumbnailComponent implements OnInit {

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
