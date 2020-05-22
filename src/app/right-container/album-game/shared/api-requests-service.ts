import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,catchError} from 'rxjs/operators';
import { Album } from '../albums/album.model';
import { ArtistsService } from '../artists/artists.service';

@Injectable({ providedIn: 'root'})
export class ApiRequestsService{
    constructor (private http: HttpClient,  private artistService: ArtistsService){}

    fetchAlbum(){
        let randomArtistId = this.artistService.getRandomArtist().id;
        let _params = new HttpParams();
        _params = _params.append('id',randomArtistId.toString());
        _params = _params.append('entity','album');
        _params = _params.append('limit','1');
        _params = _params.append('sort','recent');

        return this.http
        .get<{resultCount:number, results: Album[]}>('https://itunes.apple.com/lookup?',{params:_params})
        .pipe(map(responseData =>{
            const albumArr: Album[]=[];
            if(responseData.resultCount > 0 ){
                for(let al in responseData.results){
                    albumArr.push(responseData.results[al]);
                    console.log(albumArr)
                }
            }
            return albumArr;
        } )) 
 
   
     };
      
    
}