function getData(cBack) {
    // listener
    var xhr = new XMLHttpRequest();

    // open connection
    xhr.open('get', 'https://ci-swapi.herokuapp.com/api/');
    xhr.send();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('data').innerHTML = this.responseText;
            cBack = JSON.parse(this.responseText);
        }
    };
};

function printDataToConsole(data) {
    console.log(data);
}
// callback function
// getData(function(data) {
//     console.log(data);
// });
getData(printDataToConsole);