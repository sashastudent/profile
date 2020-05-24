import { Component, OnInit,ViewChild } from '@angular/core';
import {Card} from '../card.model';
import { CardsService } from '../cards.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AlbumGameComponent} from '../../album-game/album-game.component';
import {GalleryModalComponent} from '../../gallery-modal/gallery-modal.component';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-cards',
  templateUrl: './slider-cards.component.html',
  styleUrls: ['./slider-cards.component.css'],
})
export class SliderCardsComponent implements OnInit {
  cardslist : Card[];
  closeResult: string;
  show = false;
  path :string;
  active : any='';

  constructor(private cardsService:CardsService,private modalService: NgbModal) { }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  ngOnInit(): void {
    this.cardslist = this.cardsService.getCards();
    console.log(this.cardslist);


  }

  onButton(cardItem: Card){
    if(cardItem.name == "Guess Artist Game"){
      this.open();
    }
  }

  open() {
    const ref = this.modalService.open(AlbumGameComponent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});

    ref.result.then((cancel)=>{
    })
/*
     this.modalService.open(AlbumGameComponent, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });  */
  }

  onImage(cardItem:Card){
     const ref= this.modalService.open(GalleryModalComponent,{ariaLabelledBy: 'modal-basic-title', size: 'xl'} );

     ref.componentInstance.imagList = cardItem.imagsList;

  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }


  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

    paused = false;
    unpauseOnArrow = false;
    pauseOnIndicator = false;
    pauseOnHover = true;

    @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

    togglePaused() {
      if (this.paused) {
        this.carousel.cycle();
      } else {
        this.carousel.pause();
      }
      this.paused = !this.paused;
    }

    onSlide(slideEvent: NgbSlideEvent) {
      if (this.unpauseOnArrow && slideEvent.paused &&
        (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
        this.togglePaused();
      }
      if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
        this.togglePaused();
      }
    }

}


