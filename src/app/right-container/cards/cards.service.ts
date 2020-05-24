import { Card } from './card.model';

export class CardsService{
    private cardsList : Card[] = [
        new Card("Shopping Agent", 
            `Shopping agent is recommendation ML/AI system that help the customer to do ease and fast her purchase,
             by recommend him groceries that he would to by. The system learn the customer and do recommendation by using other customers habits in the system.
             Recommendation products list will contains food restrictions of the customer products that he habit to purchase with some new products for the customer that by other customer in system with the same purchases habits.
             For the learning algorithm used Matrix factorization used Python language and MS SQL database.`
            ,"https://github.com/sashastudent/ShoppingAgent/tree/master/TheLearningAgentClient/bin/Release/Scripts/LoyalCust","Go to GhitHub",
            "assets/images/shoppingAgent/general_area.png",
            ["assets/images/shoppingAgent/general_area.png","assets/images/shoppingAgent/filltesr.png"],false
            ),
        new Card("Guess whose the album Game",
                `Guess whose the album is a fun game that use iTunes apple API and powered by angular 9.Album will be displayed and you need guesses the artist,
                 choose one option from four and get 10 point, 3 consecutive guesses get you bonus of 10 points more. Start to play and have a fun.`
                ,"#","Start Game","assets/images/music-game/album_game-01.png",["assets/images/music-game/album_game-01.png"], false),
        new Card("To do list",
                `JavaEE Project use Hibernate and JSP files, contains user management and their task list. For data base used MySQL for the environment used Eclipse Java Neon.
                 To do list project made during the degree studies for learn java language.`
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
