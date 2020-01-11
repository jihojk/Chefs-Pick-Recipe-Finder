// In case we run out of calls and need to switch API Keys...
// Brian's Spoonacular API Key:  1217e1705a7c427998470eed6fbfe388
// Dean's Spoonacular API Key:   3f49daeedf3244208518bde7bf5fe0fd
// Johns's Spoonacular API Key:  


$(document).ready(function() {
    // This is the key below for calling PALEO results from spoonacular api ($.007).
    var queryPaleoPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=popularity&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryPaleoPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=price&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryPaleoFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=time&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryPaleoRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Paleo&number=3&type=main+course&sort=random&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    // This is edamam PALEO api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
    var edaPaleo = "https://api.edamam.com/search?q=steak&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=paleo"

    // Here is another experimental key for calling VEGAN results from spoonacular api ($.007).
    var queryVeganPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=popularity&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVeganPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=price&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVeganFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=time&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVeganRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegan&number=3&type=main+course&sort=random&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    // This is edamam VEGAN api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
    var edaVegan = "https://api.edamam.com/search?q=tofu&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=vegan"

    // Here is another experimental key for calling VEGETARIAN results from spoonacular api ($.007).
    var queryVegataPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=popularity&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVegataPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=price&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVegataFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=time&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryVegataRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Vegetarian&number=3&type=main+course&sort=random&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    // This is edamam VEGATARIAN api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
    var edaVegata = "https://api.edamam.com/search?q=broccoli&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3&Health=vegatarian"

    // Here is another experimental key for calling OMNIVOROUS results from spoonacular api ($.007).
    var queryAllPop = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=popularity&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryAllPrice = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=price&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryAllFast = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=time&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    var queryAllRand = "https://api.spoonacular.com/recipes/complexSearch?diet=Whole30&number=3&type=main+course&sort=random&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd";
    // This is edamam omnivore api key (DO NOT EXCEED MORE THAN 10 CALLS PER MINUTE).
    var edaOmni = "https://api.edamam.com/search?q=chicken&app_id=00c46abe&app_key=2e68c484c12e4ddcf68cd4c939cef6e0&from=0&to=3"

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
    paleoNav.on("click", function() {
        $(document).ready(function() {
            $.ajax({
                url: edaPaleo,
                method: "GET"
            }).then(function(response) {
                console.log(response)

            });
        });
    });
    // Creating an on-click event for the VEGAN link in the navbar 
    veganNav.on("click", function() {
        $(document).ready(function() {
            $.ajax({
                url: edaVegan,
                method: "GET"
            }).then(function(response) {
                console.log(response)
            });
        });
    });
    // Creating an on-click event for the VEGETARIAN link in the navbar 
    vegataNav.on("click", function() {
        $(document).ready(function() {
            $.ajax({
                url: edaVegata,
                method: "GET"
            }).then(function(response) {
                console.log(response);

            });
        });
    });

    // Creating an on-click event for the OMNIVORE link in the navbar

    //We need to create a variable to capture each child node we need to occupy the webpage


    omniNav.on("click", function() {
        $(document).ready(function() {
            $.ajax({
                url: edaOmni,
                method: "GET"
            }).then(function(response) {
                console.log(response);

            });
        });
    });
    // Creating a click event for each link in the side bar of the index page

    //We need to create a variable to capture each child node we need to occupy the webpage

    // Ingredients are going to need it's own function to return desired value
    const ingred = "";

    // I am looking at why this didn't work.
    // function allPop_info(list) {
    //     var listOf_ingredients = "";
    //     for (var j = 0; j < list.length; j++) {
    //         let ingredient = list[j].ingredients;
    //         var groceries = [];
    //         if (ingredient.length === 0) {
    //             return null
    //         } else {
    //             for (var k = 0; k < ingredient.length; k++) {
    //                 groceries += ingredient[k];
    //                 if (ingredient[k] === groceries) {
    //                     return null
    //                 } else {
    //                     listOf_ingredients += groceries
    //                 }
    //             }
    //             return listOf_ingredients
    //         }
    //     }
    // }

    best_omni.on("click", function() {

        $.ajax({
            url: queryAllPop,
            method: "GET"
        }).then(function(response) {
            // I  have commented out all console.log so you don't waste any api calls. 
            // Feel free to uncomment and look at the results, but beware;
            // For every API call that we use our up our free trial time.
            // Be sure to read through entire for loop.

            console.log(response);
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;

                // This is the variable you will need to use to access the list of ingredients

                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")

                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }


            // This is code for appending the desired results







        });
    });
    cheap_omni.on("click", function() {

        $.ajax({
            url: queryAllPrice,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                console.log("analyzed" + response.results[indexOfResults].analyzedInstructions[0])
                if (response.results[indexOfResults].analyzedInstructions[0]) {}
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")



                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    fast_omni.on("click", function() {

        $.ajax({
            url: queryAllFast,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    rand_omni.on("click", function() {

        $.ajax({
            url: queryAllRand,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }
        });
    });
    // Creating a call for each link in the sidebar of the VEGAN page 
    best_vegan.on("click", function() {

        $.ajax({
            url: queryVeganPop,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }
        });
    });
    cheap_vegan.on("click", function() {

        $.ajax({
            url: queryVeganPrice,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    fast_vegan.on("click", function() {

        $.ajax({
            url: queryVeganFast,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    rand_vegan.on("click", function() {

        $.ajax({
            url: queryVeganRand,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }

        });
    });
    // creating a call for each link of the sidebar of the vegetarian page
    best_vegata.on("click", function() {

        $.ajax({
            url: queryVegataPop,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                    // }
                    // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                    let listOf_ingredients = listTheI.toString()
                        // console.log("*** final list");
                        // console.log(listOf_ingredients);
                    let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                    // console.log("**** url's");
                    // console.log(srcUrl);
                    // console.log("  ")




                    blog_post = $("<div class = 'blog-post'>" +
                        "<h3>" + title + "</h3>" +
                        "<img class = 'thumbnail' src = " + imageSource + ">" +
                        "<p>" + listOf_ingredients + "</p>" +
                        "<div class='callout'>" +
                        "<ul class='menu simple'>" +
                        "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                        "<li></ul>" +
                        "</div>" +
                        "</div>");
                    for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                        $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                        console.log(blog_post)
                    }

                }


            };
        })
    });
    cheap_vegata.on("click", function() {

        $.ajax({
            url: queryVegataPrice,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }

        });
    });
    fast_vegata.on("click", function() {

        $.ajax({
            url: queryVegataFast,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    rand_vegata.on("click", function() {

        $.ajax({
            url: queryVegataRand,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")



                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }

        });
    });
    // creating a call for each link on the sidebar of the paleo page
    best_paleo.on("click", function() {

        $.ajax({
            url: queryPaleoPop,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")



                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }

        });
    });
    cheap_paleo.on("click", function() {

        $.ajax({
            url: queryPaleoPrice,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }

            }

        });
    });
    fast_paleo.on("click", function() {

        $.ajax({
            url: queryPaleoFast,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                    }
                }
                // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                let listOf_ingredients = listTheI.toString()
                    // console.log("*** final list");
                    // console.log(listOf_ingredients);
                let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                // console.log("**** url's");
                // console.log(srcUrl);
                // console.log("  ")




                var blog_post = $("<div class = 'blog-post'>" +
                    "<h3>" + title + "</h3>" +
                    "<img class = 'thumbnail' src = " + imageSource + ">" +
                    "<p>" + listOf_ingredients + "</p>" +
                    "<div class='callout'>" +
                    "<ul class='menu simple'>" +
                    "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                    "<li></ul>" +
                    "</div>" +
                    "</div>");
                for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                    $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                    console.log(blog_post)
                }
            }

        });
    });
    rand_paleo.on("click", function() {

        $.ajax({
            url: queryPaleoRand,
            method: "GET"
        }).then(function(response) {
            $("div.medium-8.columns").html("");
            for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                let title = response.results[indexOfResults].title.toString();
                // console.log("* name")
                // console.log(title)
                let imageSource = response.results[indexOfResults].image.toString();
                // console.log("** image source")
                // console.log(imageSource)


                // This is the variable you will need to use to access the list of ingredients
                let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                let listTheI = [];

                for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                    // console.log(step[ii]);
                    for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                        // console.log(step[ii].ingredients[iii].name);
                        if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                            listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                        }

                        //     }
                        // }
                        // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                        let listOf_ingredients = listTheI.toString()
                            // console.log("*** final list");
                            // console.log(listOf_ingredients);
                        let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                        // console.log("**** url's");
                        // console.log(srcUrl);
                        // console.log("  ")




                        var blog_post = $("<div class = 'blog-post'>" +
                            "<h3>" + title + "</h3>" +
                            "<img class = 'thumbnail' src = " + imageSource + ">" +
                            "<p>" + listOf_ingredients + "</p>" +
                            "<div class='callout'>" +
                            "<ul class='menu simple'>" +
                            "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                            "<li></ul>" +
                            "</div>" +
                            "</div>");
                        for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                            $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                            console.log(blog_post)
                        };

                    };
                }
            };
        });
        var allIngredients = [];

        $("#add-ingredient").on("click", function() {
            var userInput = $("#userInput").val();
            $("#fridge").append("<p>" + userInput + "</p>");
            allIngredients.push(userInput);
            console.log(allIngredients);
            $("#userInput").val("");

        });

        // Find Recipes button will recognize a click, take the allIngredients array and find recipes with those goodies in it.
        $("#find-recipes").on("click", function() {

            console.log(allIngredients.toString())
            $.ajax({
                url: "https://api.spoonacular.com/recipes/complexSearch?query=" + allIngredients.toString() + "&apiKey=1217e1705a7c427998470eed6fbfe388",
                method: "GET"
            }).then(function(response) {
                $("div.medium-8.columns").html("");
                for (var indexOfResults = 0; indexOfResults < response.results.length; indexOfResults++) {
                    let title = response.results[indexOfResults].title.toString();
                    // console.log("* name")
                    // console.log(title)
                    let imageSource = response.results[indexOfResults].image.toString();
                    // console.log("** image source")
                    // console.log(imageSource)


                    // This is the variable you will need to use to access the list of ingredients
                    let step = response.results[indexOfResults].analyzedInstructions[0].steps;
                    let listTheI = [];

                    for (var indexOfStep = 0; indexOfStep < step.length; indexOfStep++) {
                        // console.log(step[ii]);
                        for (var indexOfIngredients = 0; indexOfIngredients < step[indexOfStep].ingredients.length; indexOfIngredients++) {
                            // console.log(step[ii].ingredients[iii].name);
                            if (listTheI.indexOf(step[indexOfStep].ingredients[indexOfIngredients].name) === -1) {
                                listTheI.push(step[indexOfStep].ingredients[indexOfIngredients].name)
                            }

                        }
                    }
                    // This is the variable you will need to use to access the list of ingredients:listOf_ingredients
                    let listOf_ingredients = listTheI.toString()
                        // console.log("*** final list");
                        // console.log(listOf_ingredients);
                    let srcUrl = response.results[indexOfResults].sourceUrl.toString();
                    // console.log("**** url's");
                    // console.log(srcUrl);
                    // console.log("  ")




                    var blog_post = $("<div class = 'blog-post'>" +
                        "<h3>" + title + "</h3>" +
                        "<img class = 'thumbnail' src = " + imageSource + ">" +
                        "<p>" + listOf_ingredients + "</p>" +
                        "<div class='callout'>" +
                        "<ul class='menu simple'>" +
                        "<li><a href=" + srcUrl + ">Click here for full recipe</a>" +
                        "<li></ul>" +
                        "</div>" +
                        "</div>");
                    for (var indexOf_blogPost = 0; indexOf_blogPost < blog_post.length; indexOf_blogPost++) {
                        $("div.medium-8.columns").append(blog_post[indexOf_blogPost]);
                        console.log(blog_post)
                    }
                }

            });



        });

    });
});