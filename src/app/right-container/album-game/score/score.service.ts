import {EventEmitter, Injectable} from '@angular/core';
import { RoundService } from '../shared/round.service';
import { Artist } from '../artists/artist.model';
import { ApiRequestsService } from '../shared/api-requests-service';
import {soundsEnum} from '../shared/sounds.enum'

@Injectable()
export class ScoreService {
    score: number = 0;
    sequenceCorrectANS = 0;
    MaxSequenceCorrectANS =4;
    //MAX_BAD_TRYS = 3;
    scoursPerRoundInQU : number[] = [10,5,2,-5];
    scoreUpdated = new EventEmitter<number>();

    constructor(private roundService : RoundService){
    }
 

    checkAnsware(selectedAns: Artist, rightAnsware: number){
        if(selectedAns.id === rightAnsware){
            this.correctAsn();
          }
          else{
            this.wrongAsn();
          }
    }

    correctAsn(){
        if(this.roundService.roundNum_in_qu == 1){
            this.sequenceCorrectANS++;
        }
        if(this.sequenceCorrectANS === this.MaxSequenceCorrectANS){
            this.sequenceCorrectANS=0;
        }

        let scoursRound = this.scoursPerRoundInQU[this.roundService.roundNum_in_qu-1]; 
        if(this.sequenceCorrectANS==3){
            scoursRound = scoursRound+10;
            this.roundService.updateFeedback("10+");
            this.roundService.playAudio(soundsEnum.bonus);
        }

        this.roundService.playAudio(soundsEnum.correctAns);
        this.calculatePoints(scoursRound);
        this.roundService.isBadAnsUpdate(false);
        this.roundService.nextQuestion();
        
    }
    
    calculatePoints(scoreToAdd){
        this.score = this.score +scoreToAdd;
        this.updateScore();
    }


    wrongAsn(){
        this.sequenceCorrectANS = 0;
        //this.roundService.roundNum_in_qu++;
        if(this.roundService.roundNum_in_qu === this.roundService.MAX_ROUNDS_IN_QU){
             let scoursRound = this.scoursPerRoundInQU[this.roundService.MAX_ROUNDS_IN_QU]; 
             this.calculatePoints(scoursRound);    
             //this.roundService.updateFeedback("Bad Answare!"); 
             this.roundService.isBadAnsUpdate(true);
             this.roundService.nextQuestion();                     
        }else{
            this.roundService.isBadAnsUpdate(true);
            //this.roundService.updateFeedback("Try Egain");
        }

        this.roundService.playAudio(soundsEnum.wrongAns);
        this.updateScore();
    }

  
    
    updateScore(){
        this.scoreUpdated.emit(this.score);
    }

}