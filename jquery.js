var playing = false;
var score;
var trialsLeft;
var step;
var action; //used for setIinterval
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function(){
    
    //click on start reset button
    $("#startreset").click(function(){
        
        //we are playing
        if(playing == true){
            
            //reload page
            location.reload();
           } else {
               
                //we are not playing
                playing = true; //game initiated 
               
                //set score to 0
                score = 0; //set score to 0
                $("#scorevalue").html(score);
            
                //show trials left
                $("#trialsLeft").show();
                trialsLeft = 3;
                addHearts();
               
                //hide game over box
                $("#gameOver").hide();
               
                //change button text to "reset game"      
                $("#startreset").html("Reset Game");
               
                //start sending fruits
                startAction();
           }
    });



//click on start reset button
    //are we playing?
        //yes
            //reload page
                //no
                    //show trials left
                    //change button text to "reset game"
                    //1.create a random fruit
                    //define a random step (every new fruit we will send down will have different speed)
                    //2.move fruit down one step every 30sec
                        //is fruit too low?
                            //no-> repeat nb2
                            //yes-> any trials left?
                                //yes: repeat nb1
                                //no: show game over, change button text: start game

//slice a fruit
    //play sound 
    //explode fruit

 $("#fruit1").mouseover(function(){
     score++;
     $("#scorevalue").html(score);  //update score
//     document.getElementById("slicesound").play();
     $("#slicesound")[0].play(); //play sound
     
     //stop fruit going down and hiding it
//     stopAction();
    clearInterval(action);
     
     //hide fruit through animation 
     $("#fruit1").hide("explode", 500); //slice fruits
     
     //send new fruit
//     startAction();
     setTimeout(startAction, 500);
 });   
    
//functions

function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

//start sending fruits

function startAction(){
    
    //generate a fruit
    
//    $("#fruitsContainer").append('<img src="images/apple.png" class="fruit">'); 
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
//    $("#fruit1").css({'left' : 300, 'top' : -50});
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
    //random position
    
    //generate a random step (every new fruit we will send down will have different speed)
    step = 1+ Math.round(5*Math.random()); //change step
    
    //move fruit down one step every 10ms
    action = setInterval(function(){
       
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step); 
        
        //check if fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){ 
            //check if we have any trials left
            if(trialsLeft > 1 ){
         //generate a fruit

        //    $("#fruitsContainer").append('<img src="images/apple.png" class="fruit">'); 
            $("#fruit1").show();
            chooseFruit(); //choose a random fruit
        //    $("#fruit1").css({'left' : 300, 'top' : -50});
            $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
            //random position

            //generate a random step (every new fruit we will send down will have different speed)
            step = 1+ Math.round(5*Math.random()); //change step
                
                //reduce the number of trials by one
                trialsLeft --;
                
                //populate trialsLeft box
                addHearts();
                
            } else { //game over
                playing = false; //we are not playing anymore 
                $("#startreset").html("Start Game"); //change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
           }
    }, 10);
}

//generate a random fruit

function chooseFruit(){
//    $("#fruit1").attr('src' , 'images/apple.png');
//    $("#fruit1").attr('src' , 'images/' + fruits[0] + '.png');
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] + '.png');

}

//stop dropping fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});
