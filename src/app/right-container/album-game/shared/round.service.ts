import { Injectable, Output, EventEmitter } from '@angular/core';
import { Artist } from '../artists/artist.model';
import { Album } from '../albums/album.model';
import { ArtistsService } from '../artists/artists.service';
import { ApiRequestsService } from './api-requests-service';
import {soundsEnum} from '../shared/sounds.enum';
import { ScoreService } from '../score/score.service';

@Injectable({ providedIn: 'root'})
export class RoundService{
    question: number = 0;
    MAX_QUESTIONS: number = 10;

    roundNum_in_qu: number = 0;
    MAX_ROUNDS_IN_QU  = 3;

    isBadAns = false;
    isBadAnsEmit = new EventEmitter<boolean>();

    artistOptions : Artist[] = [];

    qAlbum : Album;
    qAlbomEmit = new EventEmitter<Album>();

    bonus: string="";
    bonusEmit = new EventEmitter<string>();

    isGameOver :boolean = false;
    isGameOverEmit = new EventEmitter<boolean>();

    constructor(private artistService: ArtistsService, private apiRequestsService: ApiRequestsService){}

    setQalbum(_albums: Album[]){
        let albums: Album[] = _albums;
        for(let al in albums){
         if(albums[al].wrapperType === "collection"){
            this.qAlbum = albums[al];
         }  
        } 
        this.qAlbomEmit.emit(this.qAlbum);
        return this.qAlbum;
    }

    checkIfMaxRound(){
        if(this.question < this.MAX_QUESTIONS){
            return false;
        }else{
            return true;
        }
        
    }

    createRound(){
        this.question++;
        this.roundNum_in_qu = 0;
    }

    createRoundInQU(){
        if(this.roundNum_in_qu < this.MAX_ROUNDS_IN_QU){
            this.roundNum_in_qu++;
            return true;
        }else{
            return false;
        }
    }

    async nextQuestion(){
        if( (this.question+1) == this.MAX_QUESTIONS){
            this.isGameOver = true;
            this.isGameOverEmit.emit(this.isGameOver);
            return;
        }
        else{
            await new Promise(r => setTimeout(r, 500));
            this.apiRequestsService.fetchAlbum()
                .subscribe(albomRes => 
                  {
                      this.setQalbum(albomRes);
            });
        }
       
    }

    getQalbum(){
        return this.qAlbum;
    }

    getRandomOptionArtistList(qAlbum:Album){
        this.createRound();
        const artistId = +this.qAlbum.artistId;
        const artistName = this.qAlbum.artistName;
        this.artistOptions = [];
        this.artistOptions.push(new Artist(artistId,artistName));

         while(this.artistOptions.length < 4){
            const artist = this.artistService.getRandomArtist();

            if(this.artistOptions.indexOf(artist) === -1) {
                this.artistOptions.push(artist);
            }
         }

        let shuffledArtistOptionsArray = this.shuffle(this.artistOptions);
        return shuffledArtistOptionsArray;
    }


    shuffle(sourceArray) {
         for (var i = 0; i < sourceArray.length - 1; i++) {
             var j = i + Math.floor(Math.random() * (sourceArray.length - i));
             var temp = sourceArray[j];
             sourceArray[j] = sourceArray[i];
             sourceArray[i] = temp;
          }
        return sourceArray;
    }

    isBadAnsUpdate(_isBadAns : boolean){
        this.isBadAns = _isBadAns;
        this.isBadAnsEmit.emit(this.isBadAns);
    }

    updateFeedback(bonus:string){
        this.bonus = bonus;
        this.bonusEmit.emit(this.bonus);
    }

    playAudio(fidback: soundsEnum){
        let audio = new Audio();
        audio.src = fidback;
        audio.load();
        audio.play();
      
      }

    stopGame(){
        this.question=0;
        this.roundNum_in_qu=0;
    } 

}