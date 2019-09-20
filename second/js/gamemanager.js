let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "warrior" : 
            player = new Player(classType,200,0,200,100,50);
            break;
            case "rogue" : 
            player = new Player(classType,100,0,100,150,200);
            break;
            case "mage" : 
            player = new Player(classType,80,0,50,200,50);
            break;
            case "hunter" : 
            player = new Player(classType,200,0,50,200,100);
            
        }
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<img src = "img/avatar-player/' 
        + classType.toLowerCase() + '.png" class = "image-avatar"><div><h3>' 
        + classType +'<h3><p>Health: '+ player.health + '</p><p>Mana: ' 
        + player.mana + '</p><p>Strength: '+player.strength + '</p><p>Agility: '
        +player.agility + '</p><p>Speed: '+player.speed + '</p></div>';
    },
    setPreFight: function(){

    }

   /*  name: function(){
        player = new Player();
    } */
}