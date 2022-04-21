// listener
var xhr = new XMLHttpRequest();
var data;

// open connection
xhr.open('get', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
        data = JSON.parse(this.responseText);
    }
};
// adding a timeout now allows the data to be ready when console.log is called, so json.parse can be added back to the original call.
setTimeout(function(){
    console.log(data);
}, 500);
