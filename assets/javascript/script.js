//Create variables for game array, button generator, newly generated buttons, etc




var gameArray = ["Final Fantasy", "Mass Effect", "Gears of War", "Dark Souls", "Horizon Zero Dawn", "World of Warcraft", "Command and Conquer", "Paragon", "Fallout", "Skyrim"];

function generateButton(){
	for(var i = 0; i < gameArray.length; i++) {
		var newButton = $("<button>");
		newButton.addClass("btn");
		newButton.text(gameArray[i]);
        $("#button-container").append(newButton);
        console.log(newButton);
	}
	
}
generateButton();