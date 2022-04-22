//const baseURL = "https://ci-swapi.herokuapp.com/api/";
function getData(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<th>${key}</th>`)
    })
    return `<thead><tr>${tableHeaders}</tr></thead>`
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onClick="writeToDocument('${prev}')">Previous</button>
        <button onClick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onClick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onClick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    var tableRows = [];
    var element = document.getElementById("data");
    //element.innerHTML = '';

    getData(url, function(data) {
        var pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }
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
        element.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g,""); // / shows it is a regular expression, g means all, empty space is what is being replaced with.
    });
}
