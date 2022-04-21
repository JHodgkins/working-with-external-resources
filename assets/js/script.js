const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    var element = document.getElementById("data");
    element.innerHTML = '';
    getData(type, function(data) {
        //console.dir(data);
        data = data.results;
        data.forEach(item => {
            element.innerHTML += '<p>' + item.name + '</p>';
        });
    });
}
