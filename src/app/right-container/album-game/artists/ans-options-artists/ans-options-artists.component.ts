import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist.model';
import {Album} from '../../albums/album.model';
import {RoundService} from '../../shared/round.service';
import {ScoreService} from '../../score/score.service';
import {ApiRequestsService} from '../../shared/api-requests-service';



@Component({
  selector: 'app-ans-options-artists',
  templateUrl: './ans-options-artists.component.html',
  styleUrls: ['./ans-options-artists.component.css']
})
export class AnsOptionsArtistsComponent implements OnInit {
  optionsList: Artist[] =[];
  optinsNum: number = 4;
  aswerArtistId : number = 0;
  active : any='';
  gameOver :boolean =  false;
  isBadAns :boolean =  false;
  score : number;


  constructor(private roundService: RoundService, private apirequestService:ApiRequestsService, private scoreService: ScoreService) { }

  ngOnInit() {
     this.roundService.qAlbomEmit.subscribe((qAlbum:Album)=>{
     this.aswerArtistId = qAlbum.artistId;
     this.optionsList = this.roundService.getRandomOptionArtistList(qAlbum);
     this.active = '';
   });

   this.roundService.isBadAnsEmit.subscribe((isBadAns : boolean)=>{
     this.isBadAns = isBadAns;
   })

   this.roundService.isGameOverEmit.subscribe((isGameOver)=>{
      this.gameOver = isGameOver;
   })
   
   this.scoreService.scoreUpdated.subscribe((s:number)=>{
    this.score = s;
  });

  }

  onAnswer(selectedAns: Artist){
    let isMaxRounds = this.roundService.checkIfMaxRound();
    if(!isMaxRounds){
      if(this.roundService.roundNum_in_qu < this.roundService.MAX_ROUNDS_IN_QU ){
        this.roundService.roundNum_in_qu++;
        this.scoreService.checkAnsware(selectedAns, this.aswerArtistId);
      }else{
        this.roundService.nextQuestion();
        this.active = '';
      }
    }
    else{
      this.gameOver = true;
    }
   
  }
}
