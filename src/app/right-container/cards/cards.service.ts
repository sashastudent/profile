import { Card } from './card.model';

export class CardsService{
    private cardsList : Card[] = [
        new Card("Shopping Agent", 
            `Shopping agent is recomdation ML/AI system thet help the custumer to do ease and fast her purchase by reccomand him groceries thet he would to by.
             the system learn the cusomer and do recomendation by using other castumers habits in the system.
             recomndation products list will contains food restrictions of the customer products that he habit to purch with some new products for the cutomer that by other customer in system with the same purchases habits.
             For the learning algorithm used Matrix factorization 
             used Python language and MS SQL database.`
            ,"https://github.com/sashastudent/ShoppingAgent/tree/master/TheLearningAgentClient/bin/Release/Scripts/LoyalCust","Go to GhitHub",
            "assets/images/shoppingAgent/general_area.png",
            ["assets/images/shoppingAgent/general_area.png","assets/images/shoppingAgent/filltesr.png"],false
            ),
        new Card("Guess whose the album Game",
                `Guess whose the album is a fun game that use itunes apple API and coded used by angular 9.
                album be displayed and you need gusses the arttist,
                choose one option from four and get 10 point for correct guess and Bonus of 10 points for 3 consecutive guesses.
                start to play and have a fun.`
                ,"#","Start Game","assets/images/music-game/album_game-01.png",["assets/images/music-game/album_game-01.png"], false),
        new Card("To do list",
                `JavaeEE Project use Hibernate and JSP fiels, contains user management and their task list. For data base used MySQL
                 for the envirement used Eclipse Java Neon.
                 To do list project made during the degree studies for learn java language.`
                ,"https://github.com/sashastudent/ToDoList","Go to GhitHub","assets/images/TodoList/todolist-01.png",["assets/images/TodoList/todolist-01.png"], false)
    ]


    setCards(){
        //read from file descriptions and set this
    }

    getCards(){
        console.log(this.cardsList);
        return this.cardsList;
    }

}
