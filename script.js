var button = document.getElementById('btn');
button.addEventListener('click', searchItem);

function searchItem(e) {
    e.preventDefault();
    var item = document.getElementById('filter');
    const xhr = new XMLHttpRequest;
    xhr.onload = function() {
        let getdata = this.response;


        var data = JSON.parse(getdata);
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            var newItem = document.createElement('img');
            newItem.src = `${obj.show.image.medium}`;
            document.getElementById('movie-container').appendChild(newItem);
        }
    }

    xhr.onerror = function() {

    }

    const URL = `https://api.tvmaze.com/search/shows?q=${item.value}`;

    xhr.open("GET", URL);

    xhr.send();
}