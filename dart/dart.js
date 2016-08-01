//amadeus API: https://sandbox.amadeus.com/travel-innovation-sandbox/apis/get/flights/inspiration-search

$("form").submit(function(event){

var $priceMax = $("input:radio[name=priceMax]:checked").val(); //target selected radio button jQuery

// var $airline = $("#airline").val();
var $origin = $("#origin").val();


var $departureDate = $("#departureDate").val(); //not required


var $duration = $("#duration").val();



event.preventDefault();

var $url = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?" + "origin=" + $origin + "&departure_date=" + $departureDate + "&duration=" + $duration + "&max_price=" + $priceMax + "&apikey=fYkwnCzOIJUJnyVRNlUMDDQXNGjqWIGL";

  $.get($url).then(function(data){

    for(var i=0; i<data.length; i++){
      var $results = $("<p>")
       console.log(data["results"][i]["destination"] +" "+ data["results"][i]["price"]);
      $results.text(data["results"][i]["price"]);
      $("#results").append($results);
    }
  })
});
