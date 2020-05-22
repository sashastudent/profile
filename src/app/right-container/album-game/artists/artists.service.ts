import { Artist } from './artist.model';

export class ArtistsService {

    private artistList : Artist[] = [
        new Artist(1419227,"beyonce"),
        new Artist(463009,"jennifer lopez",),
        new Artist(412778295,"Ariana Grande"),
        new Artist(277293880,"lady gaga"),
        new Artist(1065981054,"Billie Eilish"),
        new Artist(320569549,"Justin Bieber"),
        new Artist(358714030,"Imagine Dragons"),
        new Artist(1798556,"Maroon 5"),
        new Artist(1488123516,"Tones and I"),
        new Artist(16407,"denise lloyd"),
        new Artist(5557599,"David Guetta"),
        new Artist(349736311,"twenty one pilots"),
        new Artist(62820413,"Arctic Monkeys"),
        new Artist(487143,"Pink Floyd"),
        new Artist(3296287,"Queen"),
        new Artist(112018,"Nirvana"),
        new Artist(602212,"Scorpions"),
        new Artist(1419227,"Bob Dylan"),
        new Artist(889780,"beyonceRed Hot Chili Peppers"),
        new Artist(111051,"Eminem"),
        new Artist(112058,"50 Cent"),
        new Artist(21769,"Snoop Dogg")

    ]

    addArtist(artist: Artist){
        this.artistList.push(artist);
    }
    
    getRandomArtist(){
        let ar = this.artistList[Math.floor(Math.random() * this.artistList.length)];
        return ar;
    }

}