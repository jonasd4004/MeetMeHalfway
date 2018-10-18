var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=chicago";

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

var queryURL2 = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + APIKey;
var APIKey = "AIzaSyCW0WYhT1udb80JnJRKChlR85AMaVgZybc"

$.ajax({
    url: queryURL2,
    method: "GET",
}).then(function (response) {
    console.log(response);
})