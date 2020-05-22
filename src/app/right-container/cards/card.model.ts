export class Card{
    /*     public name: string;
        public imagsList : string [];
        public img: string;
        public summery: string;
        public link: string; */
    
        constructor(public name:string, public summery: string, public link: string, public stringButton: string,public img: string, public imagsList : string [], public showMore: boolean){
            this.name = name;
            this.img = img;
            this.summery = summery;
            this.link = link;
            this.stringButton = stringButton;
            this.showMore = showMore;
        }
    }