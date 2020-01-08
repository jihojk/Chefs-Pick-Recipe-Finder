
// This is my experimental key below for calling PALEO results.
var queryPaleo = "https://api.spoonacular.com/recipes/search?diet=Paleo&apiKey=3f49daeedf3244208518bde7bf5fe0fd";

// Here is another experimental key for calling VEGAN results.
var queryVegan = "https://api.spoonacular.com/recipes/search?diet=Vegan&apiKey=3f49daeedf3244208518bde7bf5fe0fd";

// Here is another experimental key for calling VEGETARIAN results.
var queryVegetarian = "https://api.spoonacular.com/recipes/search?diet=Vegetarian&apiKey=3f49daeedf3244208518bde7bf5fe0fd";

// Here is another experimental key for calling OMNIVOROUS results.
var queryAll = "https://api.spoonacular.com/recipes/search?diet=Whole30&apiKey=3f49daeedf3244208518bde7bf5fe0fd";


// Creating an on-click event for the CARNIVORE link in the navbar 
$("#carnivore").on("click", function () {
    
    $.ajax({
        url: queryPaleo,
        method: "GET"
    }).then(function (response) {
        console.log(queryPaleo);
        console.log(response);
    });
});

// Creating an on-click event for the VEGAN link in the navbar 
$("#vegan").on("click", function () {
    
    $.ajax({
        url: queryVegan,
        method: "GET"
    }).then(function (response) {
        console.log(queryVegan);
        console.log(response);
    });
});

// Creating an on-click event for the VEGETARIAN link in the navbar 
$("#vegetarian").on("click", function () {
    
    $.ajax({
        url: queryVegetarian,
        method: "GET"
    }).then(function (response) {
        console.log(queryVegetarian);
        console.log(response);
    });
});

// Creating an on-click event for the OMNIVORE link in the navbar 
$("#onmivore").on("click", function () {
    
    $.ajax({
        url: queryAll,
        method: "GET"
    }).then(function (response) {
        console.log(queryAll);
        console.log(response);
    });
});

