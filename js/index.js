$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      $.getJSON(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude,
        function (json) {
          var celcius = Math.floor(json.main.temp) + "°C";
          var fahr = Math.floor(json.main.temp * 9 / 5 + 32) + "°F";
          $("#temp").html(celcius);
          //

          $(function () {
            $("#temp").click(function () {
              $(this).html(function (i, text) {
                return text == celcius ? fahr : celcius;
              });
            });
          });

          //
          $("#name").html(json.name + ", " + json.sys.country);
          $("#data").html(json.weather[0].main);
          if (
            json.weather[0].main == "Clouds" ||
            json.weather[0].main == "Mist"
          ) {
            $(".cloudy").css("display", "block");
          } else if (json.weather[0].main == "Rain") {
            $(".rainy").css("display", "block");
          } else if (json.weather[0].main == "Clear") {
            $(".sunny").css("display", "block");
          } else if (json.weather[0].main == "Clear") {
            $(".sunny").css("display", "block");
          } else if (json.weather[0].main == "Snow") {
            $(".flurries").css("display", "block");
          } else if (json.weather[0].main == "Thunderstorm") {
            $(".thunder-storm").css("display", "block");
          } else if (json.weather[0].main == "Drizzle") {
            $(".sun-shower").css("display", "block");
          }
        }
      );
    });
  }
});
