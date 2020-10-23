import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { Router } from '@angular/router';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game:Game = {
    id:0,
    title: '',
    description: '',
    image: '',
    createdAt: new Date()
  };

  gameMessage:any;

  constructor(private gamesService:GamesService, private route:Router) { }

  ngOnInit(): void {
  }

  saveNewGame(){
    delete this.game.createdAt;
    delete this.game.id;

    console.log(this.game);
    this.gamesService.saveGame(this.game)
      .subscribe(
        resp => {
          this.gameMessage = resp;
          console.log(this.gameMessage.message);
          if(this.gameMessage.message.msgError){
            console.log('AH PERRO NO TE GUARDO EN LA BASE DE DATOS POR CHISTOSITO');
            this.game.id = 0;
            this.game.createdAt = new Date();
          } else {
            this.game = {
              id:0,
              title: '',
              description: '',
              image: '',
              createdAt: new Date()
            }
            this.route.navigate(['/games']);
          }
        },
        err => console.error(err)
      );
  }
}
