class Game{
    constructor(){

    }

    //get state of the game from database
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }

    //update state of the to database 
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    //start the game. Wait state.
    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    

}