import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { ImgProfileComponent } from './left-container/img-profile/img-profile.component';
import { PersonalDitailsComponent } from './left-container/personal-ditails/personal-ditails.component';
import { SkillsListComponent } from './left-container/skills-list/skills-list.component';
import { CardsComponent } from './right-container/cards/cards.component';
import { TextBoxComponent } from './right-container/text-box/text-box.component';
import {SkillsListService} from './left-container/skills-list/skills-list.service';
import { SliderCardsComponent } from './right-container/cards/slider-cards/slider-cards.component';
import {CardsService} from './right-container/cards/cards.service';
import { AlbumGameComponent } from './right-container/album-game/album-game.component';
import { AlbumsComponent } from './right-container/album-game/albums/albums.component';
import { ArtistsComponent } from './right-container/album-game/artists/artists.component';
import { ScoreComponent } from './right-container/album-game/score/score.component';
import { AnsOptionsArtistsComponent } from './right-container/album-game/artists/ans-options-artists/ans-options-artists.component';
import {ApiRequestsService} from './right-container/album-game/shared/api-requests-service';
import {ArtistsService} from './right-container/album-game/artists/artists.service';
import {RoundService} from './right-container/album-game/shared/round.service';
import {ScoreService} from './right-container/album-game/score/score.service';
import { GalleryModalComponent } from './right-container/gallery-modal/gallery-modal.component';
import { CopyrightComponent } from './left-container/copyright/copyright.component';
import { IconsComponent } from './left-container/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent,
    ImgProfileComponent,
    PersonalDitailsComponent,
    SkillsListComponent,
    CardsComponent,
    TextBoxComponent,
    SliderCardsComponent,
    AlbumGameComponent,
    AlbumsComponent,
    ArtistsComponent,
    ScoreComponent,
    AnsOptionsArtistsComponent,
    GalleryModalComponent,
    CopyrightComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    NgbModule,
    HttpClientModule

  ],
  providers: [SkillsListService,CardsService,ApiRequestsService,RoundService,ArtistsService,ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
