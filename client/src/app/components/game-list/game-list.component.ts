import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games:any = [];

  constructor( private GamesService:GamesService) { }

  ngOnInit(): void {
    this.GamesService.getGames().subscribe(
      res => {
        this.games = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
