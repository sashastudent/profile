import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoundService } from './shared/round.service';
import { ScoreService } from './score/score.service';

@Component({
  selector: 'app-album-game',
  templateUrl: './album-game.component.html',
  styleUrls: ['./album-game.component.css']
})
export class AlbumGameComponent implements OnInit {

  constructor(public modal : NgbActiveModal, private roundService: RoundService, private scoreService: ScoreService) { }

  ngOnInit(): void {
 
  }

  stopGame(){
     this.roundService.stopGame();
     this.scoreService.score=0;
  }

}
