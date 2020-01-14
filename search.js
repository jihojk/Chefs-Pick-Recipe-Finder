$(document).ready(function(){
   
    var edaOmni = "https://api.edamam.com/search?q=random&app_id=00c46abe&app_key=3f49daeedf3244208518bde7bf5fe0fd&from=0&to=3"
           
                $.ajax({
                    url: edaOmni,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    for (var indexOfHits = 0; indexOfHits < response.hits.length; indexOfHits++) {

                        // Add the recipe title
                        var title = response.hits[indexOfHits].recipe.label;
                        var titleP = $("<p id='random-titles'>").html(title);
                        $(".random-titles").append(titleP);
                        console.log(title);

                        // Add the recipe image (still shows up as objects)
                        var image = response.hits[indexOfHits].recipe.image;
                        var recipePic = image.toString();
                        // Adding CSS to the image variable above
                        var recipeImg = $("<img>");
                        recipeImg.attr("src", recipePic);
                        recipeImg.css("width", "180px");
                        recipeImg.css("height", "180px");
                        // append image to page
                        $(".random-titles").append(recipeImg);

                        // Add recipe url to
                        let srcUrl = response.hits[indexOfHits].recipe.url
                        $("#srcUrlSpot").attr("href", srcUrl);

                        // Turn the image into a link for the recipe directions 
                        var a = $("<a  target='_blank' href=" + srcUrl + "></a>");
                        console.log(a);

                        let listTheI = response.hits[indexOfHits].recipe.ingredientLines.toString()
                        // console.log("** List of ingredients")
                        console.log(listTheI)
                        $("#listTheIngr").html(listTheI);

                    }
                });

    

      var allIngredients = [];
    $("#add-ingredient").on("click", function() {
        var userInput = $("#userInput").val();
        $("#fridge").append("<p id='ingredients'>" + userInput + "</p>");
        allIngredients.push(userInput);
        console.log(allIngredients);
        $("#userInput").val("");

    });


    $("#find-recipes").on("click", function() {
        $(".blog-post").html("");

        $.ajax({
            url: "https://api.spoonacular.com/recipes/complexSearch?query=" + allIngredients.toString() + "&addRecipeInformation=true&apiKey=3f49daeedf3244208518bde7bf5fe0fd",
            method: "GET"
        }).then(function(response) {
            console.log(response);

            if (response.results.length === 0){
                alert("No results!")
            } else {
                for (var i = 0; i < response.results.length; i++) {
                    var recipeTitle = response.results[i].title;
                    var recipeImageUrl = response.results[i].image;
                    var recipeUrl = response.results[i].sourceUrl
                    // var listTheI = response.results[i].winePairing.productMatches[i].description
                    console.log(recipeUrl);
                    console.log(recipeImageUrl);

                    var blog_post = $("<div class = 'blog-post'>" +
                        "<h3>" + recipeTitle+ "</h3>" +
                        "<img class = 'thumbnail' src = " +recipeImageUrl+ ">" +
                        // "<p>" + listTheI + "</p>" +
                        "<div class='callout'>" +
                        "<ul class='menu simple'>" +
                        "<li><a href=" + recipeUrl + ">Click here for full recipe</a>" +
                        "<li></ul>" +
                        "</div>" +
                        "</div>");
                }
                    console.log(response.results.length)
                    for (var i = 0; i < blog_post.length; i++){
                    $("div.medium-8.columns").append(blog_post[i]);
                    console.log(blog_post[i]);
               
                }

            

            }

        });


});

});