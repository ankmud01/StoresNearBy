$(document).ready(function () {
    $(function () {
        $("#foodsearch").keyup(function () {
            if ($(this).val() == '') {
                $('.enableOnInput').prop('disabled', true);

            } else {
                $('.enableOnInput').prop('disabled', false);
                $('#cuisineoption').prop('disabled', true);
                $("#dietoption").prop('disabled', true);
            }
        })
        $('#cuisineoption').click(function (event) {
            if ($(this).val() == '') {
                $('.enableOnInput').prop('disabled', true)
            } else {
                $('.enableOnInput').prop('disabled', false)
                $("#dietoption").prop('disabled', true);
                $("#foodsearch").prop('disabled', true);
            }
        })
        $('#dietoption').click(function (event) {
            if ($(this).val() == '') {
                $('.enableOnInput').prop('disabled', true)
            } else {
                $('.enableOnInput').prop('disabled', false)
                $("#cuisineoption").prop('disabled', true);
                $("#foodsearch").prop('disabled', true);
            }
        })
    });

    var searchtext = $("#foodsearch");
    var searchcuisine = $("#cuisineoption");
    var searchdiet = $("#dietoption");

    $("#userinputinfo").submit(function (event) {
        event.preventDefault();
        $("#searchresult").html('');
        var foodsearched = searchtext.val();
        console.log(foodsearched);
        var cuisineselected = searchcuisine.val();
        console.log(cuisineselected);
        var dietselected = searchdiet.val();
        console.log(dietselected);


        foodListArr = [];
        foodListObj = {};
        var foodURL = "https://api.spoonacular.com/recipes/search?apiKey=95ae78eaca0d4ab7832f91cbb104fb11&query=" + foodsearched + "&number=10"
        if (foodsearched === '' && cuisineselected === null) {
            foodURL = "https://api.spoonacular.com/recipes/search?apiKey=95ae78eaca0d4ab7832f91cbb104fb11&diet=" + dietselected + "&number=10";
        } else if (foodsearched === '' && dietselected === null) {
            foodURL = "https://api.spoonacular.com/recipes/search?apiKey=95ae78eaca0d4ab7832f91cbb104fb11&cuisine=" + cuisineselected + "&number=10";
        }
        $.ajax({
            url: foodURL,
            method: "GET",
            success: (function (foodResponse) {
                console.log(foodURL);
                console.log(foodResponse);
                for (var i = 0; i < foodResponse.results.length; i++) {
                    foodListObj = {
                        id: foodResponse.results[i].id,
                        title: foodResponse.results[i].title,
                        foodimage: foodResponse.baseUri + foodResponse.results[i].id + "-" + "480x360.jpg"
                    };
                    console.log(foodListObj);
                    foodListArr.push(foodListObj);
                }
                appendFood(foodListArr);
                $("#foodsearch").val('');
                $("#cuisineoption").val('');
                $("#dietoption").val('');

            }),
            error: (function (err) {
                console.log("ERROR - " + err);
            })
        });
    });

    //This is eventbinding where instructions class is dynamically created to in order for event to be associated to it i had to add it to the event with a class or id that is not dynamic which is searchresult
    $("#searchresult").on("click", ".modal-trigger", function (event) {
        event.preventDefault();
        var selectedid = $(this).attr("id")     //This get the value inside the id attribute
        console.log(selectedid);
        // $(".modal-content").text('');

        var instructionURL = "https://api.spoonacular.com/recipes/" + selectedid + "/analyzedInstructions?apiKey=95ae78eaca0d4ab7832f91cbb104fb11";
        //  nutritionURL =  "https://api.spoonacular.com/recipes/" + selectedid + "/information?apiKey=95ae78eaca0d4ab7832f91cbb104fb11&includeNutrition=false";
        // ingredientsURL = "https://api.spoonacular.com/recipes/" + selectedid + "/ingredientWidget.json?apiKey=95ae78eaca0d4ab7832f91cbb104fb11";
        $.ajax({
            url: instructionURL,
            method: "GET",
            success: (function (instructionResponse) {
                console.log(instructionResponse);
                            for (var i=0; i<instructionResponse[0].steps.length; i++){
                            var foodSteps = $("<li>").text("Step "+ instructionResponse[0].steps[i].number + " - " + instructionResponse[0].steps[i].step);
                            console.log(foodSteps);

                            $(".modal-content").append(foodSteps);
                } 
            }),
            error: (function (err) {
                console.log("ERROR - " + err);
            })
        });
    });

    function appendFood(list) {
        var resultfood = $("#foodsearchedfor")
        var searchvaluefood = searchtext.val();
        if (searchtext.val() === '' && searchcuisine.val() === null) {
            searchvaluefood = $("#dietoption").val();
        } else if (searchtext.val() === '' && searchdiet.val() === null) {
            searchvaluefood = $("#cuisineoption").val();
        }
        resultfood.text("Retsults : " + searchvaluefood);
        for (var i = 0; i < list.length; i++) {
            // var searchdiv = $("<div>").attr("id","searchresult")
            var cols12m6 = $("<div>").attr("class", "col s12 m6");
            var fooditem = $("<div>").attr("class", "card singleitem");
            var imagediv = $("<div>").attr("class", "card-image");
            var foodimage = $("<img>").attr("src", list[i].foodimage);
            var morefood = $("<a>").attr({
                href: "#m-" + list[i].id,
                rel: "modal:open",
                class: "modal-trigger btn-floating halfway-fab waves-effect waves-light red",
                id: list[i].id
            });
            var moreicon = $("<i>").attr("class", "material-icons");
            moreicon.text("more_horiz");
            var foodnamediv = $("<div>").attr("class", "card-content")
            var foodname = $("<span>").attr("class", "card-title")
            foodname.text(list[i].title);

            var modaldiv = $("<div>").attr({
                id: "m-" + list[i].id,
                class: "modal"
            })
            var modalcontent = $("<div>").attr("class", "modal-content");
            var foodcontent = $("<p>")
            foodcontent.text("How to make - " + list[i].title)
            foodcontent.css({
                "font-weight": "Bolder",
                "font-size": "Medium"
            });
            modalcontent.append(foodcontent);

            foodnamediv.append(foodname);
            morefood.append(moreicon);
            imagediv.append(morefood);
            imagediv.append(foodimage);
            fooditem.append(imagediv);
            fooditem.append(foodnamediv);
            cols12m6.append(fooditem);

            modaldiv.append(modalcontent);
            $("#searchresult").append(modaldiv);
            $("#searchresult").append(cols12m6);
            // $("#newrow").append(searchdiv);
        }
    }
});
