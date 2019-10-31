function getWether() {
    var city = document.getElementById("cityName").value;
    var city1 = document.getElementById("city");
    var data1 = document.getElementById("data");
    var status = document.getElementById("status");
    var icon = document.getElementById("icon");

    console.log(city);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f24f40b1c24505685fce3b8acd0fcffc")
        .then((response) => response.json())
        .then(function (data) {
            console.log(data);
            // Your code for handling the data you get from the API
            var d = data;//JSON.parse(data);
            if (d["cod"] == 200) {
                console.log(d);
                data1.innerHTML = Math.round(Number(d["main"]["temp"]) - 273)+ "&deg; C";
                status.innerHTML = d["weather"][0]["main"];
                city1.innerHTML = d["name"];
                icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + d["weather"][0]["icon"] + "@2x.png")
            } else {
                data1.innerHTML = "No city found";
                status.innerHTML = "";
                city1.innerHTML = "";
                icon.setAttribute('src', '');
            }

        })

        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log("error" + error)
        });
}