$(document).ready(function(){
    $('#weather-form').submit(function(event){
        event.preventDefault();
        var city = $('#city-input').val();
        var apiKey = '61836991d070867681db97c41bd90662'; // Replace with your OpenWeatherMap API key
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: function(response) {
                $('#city-name').text(response.name);
                $('#temperature').text(`${response.main.temp}°C`);
                $('#condition').text(response.weather[0].description);
                var iconUrl = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
                $('#weather-icon').attr('src', iconUrl);
            },
            error: function() {
                $('#city-name').text('City not found');
                $('#temperature').text('');
                $('#condition').text('');
                $('#weather-icon').attr('src', '');
            }
        });
    });
});
