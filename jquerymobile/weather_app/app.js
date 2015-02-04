$(document).on('pageinit', '#index', function(){       
    $(document).on('click', '#city-search-btn', function(){
        var cityName = $('#city-search').val();
        if(cityName.length > 0) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&amp;units=metric';   
            $.ajax({
                url: url,
                dataType: "jsonp",
                async: true,
                beforeSend: function() {
                    // This callback function will trigger before data is sent
                    $.mobile.loading('show', {theme:"a", text:"Please wait...", textonly:true, textVisible: true}); // This will show AJAX spinner
                },
                complete: function() {
                    // This callback function will trigger on data sent/received complete
                    $.mobile.loading('hide'); // This will hide AJAX spinner
                },               
                success: function (result) {
                    ajax.parseJSONP(result);
                },
                error: function (request,error) {
                    alert('Network error has occurred please try again!');
                }
            });         
        } else {
            alert('Please enter city name!');
        }      
    });
});

var ajax = { 
    parseJSONP:function(result){  //CREA DIV MAP y cambia la página
        weatherData.response = result;
        var mapPage    =   $('<div>').attr({'id':'map','data-role':'page'}).appendTo('body');
        var mapHeader  = $('<div>').attr({'data-role':'header', 'data-theme' : 'b','id':'map-header'}).appendTo(mapPage);
        $('<h3>').html(weatherData.response.name + ' weather').appendTo(mapHeader);
        $('<a>').attr({'href':'#index', 'class' : 'ui-btn-righ'}).html('Back').appendTo(mapHeader);
        var mapContent = $('<div>').attr({'data-role':'content'}).appendTo(mapPage);
        $('<div>').attr({'id':'map_canvas', 'style':'height:100%'}).appendTo(mapContent);
        $.mobile.changePage( "#map", { transition: "slide"});
    }
}
 
var weatherData = {
    response : null
}

$(document).on('pagehide', '#map', function(){  
    $(this).remove();
});

$(document).on('pageshow', '#map',function(e,data){  
    var minZoomLevel = 12;
     
    var myLatLng = new google.maps.LatLng(weatherData.response.coord.lat, weatherData.response.coord.lon);
     
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
     
    var image = {
        url: 'http://openweathermap.org/img/w/'+weatherData.response.weather[0].icon+'.png'
    };
     
    infoWindow = new google.maps.InfoWindow();
    infoWindow.setOptions({
        content: "<div class='info-window'><div class='icon-holder'><img src='http://openweathermap.org/img/w/"+weatherData.response.weather[0].icon+".png'/></div><div class='info-holder'><span class='info-text'>City:</span><br/>"+weatherData.response.name+"<br/><span class='info-text'>Min. Temp:</span><br/>"+weatherData.response.main.temp_min+" °C<br/><span class='info-text'>Temp:</span><br/>"+weatherData.response.main.temp+" °C<br/><span class='info-text'>Max. Temp:</span><br/>"+weatherData.response.main.temp_max+" °C</div></div>",
        position: myLatLng,
    });
    infoWindow.open(map);    
     
});