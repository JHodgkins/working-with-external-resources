// listener
var xhr = new XMLHttpRequest();
var data;

// open connection
xhr.open('get', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

// set returned data to object and assign variable
// function setData(jsonData) {
//     data = jsonData;
//     console.log(data);
// }

xhr.onreadystatechange = function() {
    // console.log(this.readyState); // see what the ready state is doing
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
        data = JSON.parse(this.responseText);
        //setData(JSON.parse(this.responseText)); 
        //console.log(data);
        // console.log(typeof(this.responseText)); checks type of data returned
        // console.log(typeof(JSON.parse(this.responseText))); parse data into a object
        // console.log(JSON.parse(this.responseText)); log the json to console
    }
};
// adding a timeout now allows the data to be ready when console.log is called, so json.parse can be added back to the original call.
setTimeout(function(){
    console.log(data);
}, 500);
