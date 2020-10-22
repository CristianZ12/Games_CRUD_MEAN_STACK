import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gamesObject:any;
  games:any = [];

  constructor( private GamesService:GamesService) { }

  ngOnInit(): void {
    this.GamesService.getGames().subscribe(
      res => {
        this.gamesObject = res;
        console.log(this.gamesObject.games);
        this.games = this.gamesObject.games;

      },
      err => console.error(err)
    );
  }

}
