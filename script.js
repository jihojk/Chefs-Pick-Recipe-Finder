// In case we run out of calls and need to switch API Keys...
// Brian's Spoonacular API Key:  1217e1705a7c427998470eed6fbfe388
// Dean's Spoonacular API Key:   3f49daeedf3244208518bde7bf5fe0fd
// Johns's Spoonacular API Key:  

// slick JS library stuff
$(document).ready(function(){
    $('.fadePics').slick({
      fade: true,
    });
  });

  $('.fadePics').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

// This is the key below for calling PALEO results from spoonacular api ($.007).
const queryPaleoPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=popularity&addRecipeInformation=true&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryPaleoPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=price&addRecipeInformation=true&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryPaleoFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=time&addRecipeInformation=true&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryPaleoRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=random&addRecipeInformation=true&apiKey=1217e1705a7c427998470eed6fbfe388";
// This is edamam PALEO api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
const edaPaleo = "https://api.edamam.com/search?q=steak&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=paleo"

// Here is another experimental key for calling VEGAN results from spoonacular api ($.007).
const queryVeganPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=popularity&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVeganPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=price&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVeganFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=time&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVeganRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=random&apiKey=1217e1705a7c427998470eed6fbfe388";
// This is edamam VEGAN api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
const edaVegan = "https://api.edamam.com/search?q=tofu&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=vegan"

// Here is another experimental key for calling VEGETARIAN results from spoonacular api ($.007).
const queryVegata = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=popularity&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVegataPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=price&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVegataFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=time&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryVegataRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=random&apiKey=1217e1705a7c427998470eed6fbfe388";
// This is edamam VEGATARIAN api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
const edaVegata = "https://api.edamam.com/search?q=broccoli&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=vegatarian"

// Here is another experimental key for calling OMNIVOROUS results from spoonacular api ($.007).
const queryAllPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=popularity&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryAllPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=price&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryAllFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=time&apiKey=1217e1705a7c427998470eed6fbfe388";
const queryAllRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=random&apiKey=1217e1705a7c427998470eed6fbfe388";
// This is edamam omnivore api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
const edaOmni = "https://api.edamam.com/search?q=chicken&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3"

// Need to capture each id in variable
// This is the main navbar variable capture
const paleoNav = $(".carnivore");
const veganNav = $(".vegan");
const vegataNav = $(".vegata");
const omniNav = $(".omni");
// This is the side bar variable capture for each page
// This is index side bar sort
const best_omni = $("#omni_pop");
const cheap_omni = $("#omni_price");
const fast_omni = $("#omni_time");
const rand_omni = $("#omni_rand");

// This is vegan side bar sort
const best_vegan = $("#vegan_pop");
const cheap_vegan = $("#vegan_price");
const fast_vegan = $("#vegan_time");
const rand_vegan = $("#vegan_rand");

// This is vegetarian side bar sort
const best_vegata = $("#vegata_pop");
const cheap_vegata = $("#vegata_price");
const fast_vegata = $("#vegata_time");
const rand_vegata = $("#vegata_rand");

// This is paleo side bar sort
const best_paleo = $("#paleo_pop");
const cheap_paleo = $("#paleo_price");
const fast_paleo = $("#paleo_time");
const rand_paleo = $("#paleo_rand");



// Creating an on-click event for the CARNIVORE link in the navbar 
paleoNav.on("click", function () {
    $(document).ready(function () {
        $.ajax({
            url: edaPaleo,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });
    });
});
// Creating an on-click event for the VEGAN link in the navbar 
veganNav.on("click", function () {
    $(document).ready(function () {
        $.ajax({
            url: edaVegan,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });
    });
});
// Creating an on-click event for the VEGETARIAN link in the navbar 
vegataNav.on("click", function () {
    $(document).ready(function () {
        $.ajax({
            url: edaVegata,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });
    });
});

// Creating an on-click event for the OMNIVORE link in the navbar 
omniNav.on("click", function () {
    $(document).ready(function () {
        $.ajax({
            url: edaOmni,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });
    });
});
// Creating a click event for each link in the side bar of the index page
best_omni.on("click", function () {

    $.ajax({
        url: queryAllPop,
        method: "GET"
    }).then(function (response) {

    });
});
cheap_omni.on("click", function () {

    $.ajax({
        url: queryAllPrice,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i <= 9; i++) {
            var recipeTitle = response.results[i].title;
            var recipeImage = response.results[i].image;
            var recipeImageSrc = "https://spoonacular.com/recipeImages/" + recipeImage;
            $(".medium-8 columns")
                .append($("<div>"))
                .append($("<h2>").html(recipeTitle))
                .append($("<img src=" + recipeImageSrc + ">"))


        }
    });
});
fast_omni.on("click", function () {

    $.ajax({
        url: queryAllFast,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // console.log(response.results[i].title)
        for (var i = 0; i <= 9; i++) {
            console.log(response.results[i].id)
        };
    });
});
rand_omni.on("click", function () {

    $.ajax({
        url: queryAllRand,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
// Creating a call for each link in the sidebar of the VEGAN page 
best_vegan.on("click", function () {

    $.ajax({
        url: queryVeganPop,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
cheap_vegan.on("click", function () {

    $.ajax({
        url: queryVeganPrice,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
fast_vegan.on("click", function () {

    $.ajax({
        url: queryVeganFast,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
rand_vegan.on("click", function () {

    $.ajax({
        url: queryVeganRand,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
// creating a call for each link of the sidebar of the vegetarian page
best_vegata.on("click", function () {

    $.ajax({
        url: queryVegataPop,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
cheap_vegata.on("click", function () {

    $.ajax({
        url: queryVegataPrice,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
fast_vegata.on("click", function () {

    $.ajax({
        url: queryVegataFast,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
rand_vegata.on("click", function () {

    $.ajax({
        url: queryVegataRand,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
// creating a call for each link on the sidebar of the paleo page
best_paleo.on("click", function () {

    $.ajax({
        url: queryPaleoPop,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
cheap_paleo.on("click", function () {

    $.ajax({
        url: queryPaleoPrice,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
fast_paleo.on("click", function () {

    $.ajax({
        url: queryPaleoFast,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});
rand_paleo.on("click", function () {

    $.ajax({
        url: queryPaleoRand,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
});


