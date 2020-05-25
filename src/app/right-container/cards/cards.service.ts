import { Card } from './card.model';

export class CardsService{
    private cardsList : Card[] = [
        new Card("Shopping Agent","Shopping Agent is a recommendation ML/AI system that can help customers make faster and easier purchases by recommending which products to buy. The system learns customer preferences and makes recommendations based on the customer's buying habits and history. The learning algorithm uses Matrix Factorization, the language is Python and MS SQL is utilised for data storage."
            ,"https://github.com/sashastudent/ShoppingAgent/tree/master/TheLearningAgentClient/bin/Release/Scripts/LoyalCust","Go to GhitHub",
            "assets/images/shoppingAgent/general_area.png",
            ["assets/images/shoppingAgent/general_area.png","assets/images/shoppingAgent/filltesr.png"],false
            ),
        new Card("Guess the Artist game","Guess the Artist is a fun game that asks players to select the correct artist by looking at album covers. It uses the ITunes API and is powered by angular 9."
                ,"#","Start Game","assets/images/music-game/album_game-01.png",["assets/images/music-game/album_game-01.png"], false),
        new Card("To do list","To do list is a JavaEE project that uses Hibernate and JSP files, contains user management and a task list function. For database used MySQL for the environment used Eclipse Java Neon. I developed the To do list during my university studies to learn Java."
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
