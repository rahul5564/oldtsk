var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    for(var i in data){
        try{
            var cname = data[i].name;
            var latlong = data[i].latlng;
            if(latlong===0) throw new error("this place not found");
            print(cname,...latlong);
        }
    catch(e){
         console.log("an error dude" + cname + " " + e.message);
    }
  }  
};

var print = function(cname,lat,long){
    var key = 'ca0d4a5f74122736dd0893d9beeb805c';
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
    var weather = new XMLHttpRequest();
    weather.open('GET',url,true);
    weather.send();
    weather.onload = function(){
        try{
            var result = JSON.parse(this.response);
            console.log(`${cname}:${result.main.temp}`);
        }catch(e){
            console.log("invalid response from server",cname + " " + e.message);
        }
    }
}
