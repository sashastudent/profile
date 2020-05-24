import { Component, OnInit } from '@angular/core';
import {Album} from './album.model';
import {ApiRequestsService} from '../shared/api-requests-service';
import {RoundService} from '../shared/round.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album = new Album();
  startGame :Boolean = false;

  constructor(private apiRequestsService: ApiRequestsService, private roundService: RoundService) { }

  ngOnInit(): void {
    this.album.artworkUrl100 = "assets/images/music-game/record-album-02.jpg";

    this.roundService.qAlbomEmit.subscribe((qAlbum:Album)=>{
      this.album = qAlbum;
    });
  }

  onStart(){
    this.startGame = true;
     this.apiRequestsService.fetchAlbum()
    .subscribe(albomRes =>
      {
          console.log(albomRes);
          this.album = this.roundService.setQalbum(albomRes);
      });

  }
}
