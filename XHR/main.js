// listener
var xhr = new XMLHttpRequest();
var data;

// open connection
xhr.open('get', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

// set returned data to object and assign variable
function setData(jsonData) {
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
        setData(JSON.parse(this.responseText)); 
        //console.log(data);
        // console.log(typeof(this.responseText)); checks type of data returned
        // console.log(typeof(JSON.parse(this.responseText))); parse data into a object
        // console.log(JSON.parse(this.responseText)); log the json to console
    }
};

/**
 * Notes: while the json data has moved out of xhr into a setData variable, the problem of data is not available anywhere else remains, timeouts may solve this.
 */