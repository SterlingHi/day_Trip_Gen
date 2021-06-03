 var yourDestination = ["Maui", "Florida", "Germany"]
    var random = Math.floor(Math.random() * yourDestination.length);
        

        var destinQuestion = prompt("Would you like travel?");
        if (destinQuestion === "yes")
            
         console.log("Your destination is " + yourDestination[random] + " congrats");


var yourFood = ["italian", "Sushi", "Hamburgers"]
 var randomAgain = Math.floor(Math.random() * yourFood.length);

        var foodQuestion = prompt("Would you like to eat as well?"); 
        if (foodQuestion === "yes") 
            console.log( yourFood[randomAgain] + " has been chosen for you");

var yourTranspo = ["Flight", "Boat", "Train"]
 var randomTranspo = Math.floor(Math.random() * yourTranspo.length);

    var transpoQuestion = prompt("Would you like your means of travel randomly chosen?"); 
        if (transpoQuestion === "yes")
            console.log(yourTranspo[randomTranspo] + "has been chosen for you");

            