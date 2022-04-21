// listener
var xhr = new XMLHttpRequest();
var data;

// open connection
xhr.open('get', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
        data = this.responseText;
        console.log(data);
        // console.log(typeof(this.responseText)); checks type of data returned
        // console.log(typeof(JSON.parse(this.responseText))); parse data into a object
        // console.log(JSON.parse(this.responseText)); log the json to console
    }
};