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

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    })
    return `<tr>${tableHeaders}</tr>`
}

function writeToDocument(type) {
    var tableRows = [];
    var element = document.getElementById("data");
    element.innerHTML = '';
    getData(type, function(data) {
        //console.dir(data);
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        data.forEach(item => {
            var dataRow = [];
            Object.keys(item).forEach(key => {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                // dataRow.push(`<td>${item[key]}</td>`);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
            //element.innerHTML += '<p>' + item.name + '</p>';
        });
        element.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}
