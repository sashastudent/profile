import { Component, OnInit} from '@angular/core';
import {ScoreService} from '../score/score.service';
import {RoundService} from '../shared/round.service';
import { trigger,style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  animations:[
    trigger('bonus', [
      state('normal', style({
        opacity:1,
        color:'#EFCE4A',
        transform:'translateY(0)'
      })),
      state('hidden',style({
        transform:'translateY(-40px)',
         color: '#EFCE4A',
         'font-size': 'xx-large',
         opacity: 0
      })),
      transition('normal => hidden' , animate(300))
    ]),
  ]
})
export class ScoreComponent implements OnInit {
  score: number;
  bonus: string ='';
  path:string ='assets/images/music-game/star.svg';
  state = 'normal';


  constructor(private scoreService: ScoreService, private roundService: RoundService) {
    this.score = this.scoreService.score;
  }

  ngOnInit(): void {
    this.scoreService.scoreUpdated.subscribe((s:number)=>{
      this.score = s;
    });

    this.roundService.bonusEmit.subscribe((bonus :string)=>{
      this.bonus = bonus;
      if(this.state == 'normal'){
        this.state = 'hidden';
      }
    })

  }
  bonusHidden(event){
    this.state = 'normal';
  }


}
