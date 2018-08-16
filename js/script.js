  $(document).ready(function() {

  // Get all countries
  $.get("https://restcountries.eu/rest/v2", function(data) {
    $.each(data, function(index, value) {
   
      $("#countries").append("<option>" + value.name + "</option>");
      

    });
  });



  // Get More Information About Country
  $("#countries").change(function() {
    let c = $("#countries").val();
    $.get("https://restcountries.eu/rest/v2/name/"+c+"?fullText=true", function(data) {


        console.log(data[0]);
        // Clear Previous Output
        $("#name").empty();
        $("#capital").empty();
        $("#region").empty();
        $("#timezones").empty();
        $("#population").empty();
        $("#languages").empty();
        $("#nativeName").empty();
        $("#callingcodes").empty();
        $("#output2").empty();
        $("#output3").empty();
        $("#firstcolumn").addClass("firstcolumn");
        $("#name").append( data[0].name );
        $("#nativeName").append("Native Name : " + "<span>"+data[0].nativeName +"</span>");
        $("#capital").append("Capital : "  +"<span>"+ data[0].capital + "</span>");
        $("#region").append("Region : "  +"<span>"+ data[0].region + "</span>");
        $("#population").append("Population : "  +"<span>"+ data[0].population + "</span>");
        $("#languages").append("Languages : "  +"<span>"+ data[0].languages[0].nativeName + "</span>");
        $("#timezones").append("TimeZones : " +"<span>"+ data[0].timezones[0] + "</span>");
        $("#callingcodes").append("callingcodes : " +"<span>"+  data[0].callingCodes[0]  + "</span>");
        $("#output3").append('<img src="' + data[0].flag + '" />');

      });
  });

  $("#countries").change(function() {
     let country = $("#countries").val();
     console.log(country);
     //weather
     $.get("http://api.openweathermap.org/data/2.5/weather?q=iran&appid=94e6cc601757d2f2fbdea1a57d9ac55a&units=metric", function(data) {

    
      // Clear Previous Output
        $("#weather").empty();
        $("#description").empty();
        $("#wind").empty();
        $("#temp").empty();
        $("#humidity").empty();
        $("#visibility").empty();
        $("#weather").append("<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+"</br>");
        $("#description").append("<h2>"+ data.weather[0].description +"</h2>"+"<br />");
        $("#wind").append("Wind Speed : " + "<span>"+data.wind.speed + "</span>"+"<br />");
        $("#temp").append("<a>"+ data.main.temp + " &deg;C"+"</a>"+"<br />");
        $("#humidity ").append("Humidity: " + "<span>"+data.main.humidity + "</span>"+"<br />");
        $("#visibility").append("visibility: " +"<span>"+ data.visibility + "</span>"+"<br />");

      
  
     });
   });
});   

