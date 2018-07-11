//Create an array of video games to start with

      var gameArray = ["Final Fantasy", "Mass Effect", "Gears of War", "Dark Souls", "Horizon Zero Dawn", "World of Warcraft", "Command and Conquer", "Paragon", "Fallout", "Skyrim"];

// Create a function to display the game buttons

      function renderButtons() {

        $("#games-view").empty();

// Create a loop to run through the array of games to generate buttons for each index in the array.

        for (var i = 0; i < gameArray.length; i++) {
          var a = $("<button>");
          a.addClass("game");
          a.attr("data-name", gameArray[i]);
          a.text(gameArray[i]);
          $("#games-view").append(a);
        }
      }

// Create a function to handle button click events

      $("#add-game").on("click", function(event) {
        event.preventDefault();
        var game = $("#game-input").val().trim();
        gameArray.push(game);
        renderButtons();
      });

      renderButtons();