$("#add-address-button").on("click", function (event) {
    event.preventDefault();

    var street_input = $("#streetInput").val().trim();
    var city_input = $("#cityInput").val().trim();
    var state_input = $("#stateInput").val().trim();

    console.log(street_input);
    console.log(city_input);
    console.log(state_input);

    var newParagraph = $("#saved-addresses").append(
        $("<p>").text(street_input + ", " + city_input + ", " + state_input),
    )

})


var latitude = 41.8841049992939;
var longitude = -87.6479440725005;

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + latitude + "&longitude=" + longitude;

console.log(queryURL);

$.ajax({
    url: queryURL,
    headers: {
        "Authorization": 'Bearer wmYwj06AsfngvmJGfrL_-F9ibDZpRsHgw8NBfYIrTB3NJWH9ryUxel4uAJwvmfiscBEUN7AxDaF4v0aTikUsBVRoZgLMFzcvlhUgvceIpVFG6_KRqxn3nc5qCM_HW3Yx',
    },
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
});




var streetName = "1600+Amphitheatre+Parkway";
var city = "Mountain + View";
var state = "CA";

var gAPIKey = "AIzaSyCW0WYhT1udb80JnJRKChlR85AMaVgZybc"
var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + streetName + "," + city + "," + state + "&key=" + gAPIKey;

$.ajax({
    url: queryURL2,
    method: "GET",
}).then(function (response) {
    console.log(response);
})
