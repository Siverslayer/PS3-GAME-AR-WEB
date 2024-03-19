// Categories
var dropdown = document.getElementById("categories");
dropdown.style.position = "fixed";
dropdown.style.top = "100px"; 
dropdown.style.left = "23px"; 

// Search

var gamesDatabase = {
    "crash-cars.html": ["Crash Cars", "crash cars", "", ""],
    "mario-page.html": ["Mario", "mario"],
    "zelda-page.html": ["Zelda", "zelda"],
    // You can add more games here...
};

// Search function
function search() {
    var keyword = document.getElementById("searchInput").value.trim().toLowerCase(); // Get the keyword from the text field and convert it to lowercase
    if (keyword !== "") {
        var found = false;
        // Compare the entered keywords with the keywords in the database
        for (var gameUrl in gamesDatabase) {
            var keywords = gamesDatabase[gameUrl]; // Keywords for this item in the database
            for (var i = 0; i < keywords.length; i++) {
                if (keywords[i].toLowerCase().includes(keyword)) {
                    window.location.href = gameUrl; // Redirect the user to the appropriate page if a match is found
                    found = true;
                    return; // Use return to exit the function once a match is found and redirect the user to the correct page
                }
            }
        }
        if (!found) {
            alert("Game not found."); // Display a message if the game is not found
        }
    } else {
        alert("Please enter a keyword for search."); 
    }
}

