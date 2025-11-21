function getAllData(url, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/${url}`);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4 &&
            request.status >= 200 &&
            request.status < 300
        ) {
            let datajson = request.response;
            let data = JSON.parse(datajson);
            callback(data);
        }
    }
}
