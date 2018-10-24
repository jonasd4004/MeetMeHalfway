var database = firebase.database();

$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
    $("#results_row").hide();
    $("#myProgress").hide();

    var clickCount = 0;

    var clickCount = 0;

    $("#add-address-button").on("click", function (event) {
        event.preventDefault();

        var name_input = $("#nameInput").val().trim();
        var street_input = $("#streetInput").val().trim();
        var city_input = $("#cityInput").val().trim();
        var state_input = $("#stateInput").val().trim();



        var gAPIKey = "AIzaSyCW0WYhT1udb80JnJRKChlR85AMaVgZybc"
        var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + street_input + "," + city_input + "," + state_input + "&key=" + gAPIKey;

        $.ajax({
            url: queryURL2,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var lat = response.results[0].geometry.location.lat;
            var lng = response.results[0].geometry.location.lng;
            console.log(lat);
            console.log(lng);
            var address_1 = {
                name: name_input,
                street: street_input,
                city: city_input,
                state: state_input,
                latitude: lat,
                longitude: lng,
            }

            database.ref().push(address_1);
            $("#nameInput").val("");
            $("#streetInput").val("");
            $("#cityInput").val("");
            $("#stateInput").val("");
        })

    });


    var count = 0;
    database.ref().on("child_added", function (childSnapshot) {

        var printedName = childSnapshot.val().name;
        var printedStreet = childSnapshot.val().street;
        var printedCity = childSnapshot.val().city;
        var printedState = childSnapshot.val().state;
        var storedLat = childSnapshot.val().latitude;
        var storedLng = childSnapshot.val().longitude;



        var newButton = $("#saved-addresses").append(
            $("<button id = button_" + count + " class = addressButtons>").text(printedName + ": " + printedStreet + ", " + printedCity + ", " + printedState).attr("data-latitude", storedLat).attr("data-longitude", storedLng),
        );


        count++;

    });

    var addressArr = [];

    $("#saved-addresses").on("click", "button", function () {

        if (clickCount < 2) {
            console.log(clickCount);
            var lat = $(this).data("latitude");
            var lng = $(this).data("longitude");
            clickCount++

            console.log(lat);
            console.log(lng);


            addressArr.push(lat, lng);
            console.log(addressArr);

            $("#chosen-addresses").append(this);
        } else { };

    })

    $("#resetButton").on("click", function () {
        window.location.reload();
    })



    $("#submitButton").on("click", function () {
        $("#input_row").hide();
        $("#results_row").show();
        $("#myProgress").show();

        var lat_1 = addressArr[0];
        console.log(lat_1)
        var lng_1 = addressArr[1];
        var lat_2 = addressArr[2];
        var lng_2 = addressArr[3];

        var point1 = turf.point([lat_1, lng_1]);
        var point2 = turf.point([lat_2, lng_2]);
        var midpoint = turf.midpoint(point1, point2);


        console.log(midpoint);
        var midpointLat = midpoint.geometry.coordinates[0];
        var midpointLng = midpoint.geometry.coordinates[1];


        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + midpointLat + "&longitude=" + midpointLng + "&radius=800";

        console.log(queryURL);

        move();


        $.ajax({
            url: queryURL,
            headers: {
                "Authorization": 'Bearer wmYwj06AsfngvmJGfrL_-F9ibDZpRsHgw8NBfYIrTB3NJWH9ryUxel4uAJwvmfiscBEUN7AxDaF4v0aTikUsBVRoZgLMFzcvlhUgvceIpVFG6_KRqxn3nc5qCM_HW3Yx',
            },
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);

                //appending businesses to page
                var results = data.businesses;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    var businessBtn = $("<button type=button class=businessButtons>");
                    var business = results[i].name;
                    var businessURL = results[i].url;
                    console.log(business);
                    businessBtn.text(business);
                    businessBtn.attr("href", businessURL);
                    businessBtn.on("click", function () {
                        window.open($(this).attr("href"), '_blank');
                    });
                    $(".businesses").prepend(businessBtn);



                    var businessLink = results[i].app
                }
            }

        });



    })
});


