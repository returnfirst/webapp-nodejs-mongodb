window.onload = function() {
    axios({
        url: 'http://localhost:4000/api/movie/starwars',
        method: 'get'
    }).then(function(fromServer) {
        var starwars = fromServer.data;
        //alert(JSON.stringify(fromServer.data));
        var title = starwars.items[0].title;
        var director = starwars.items[0].director;
        var score = starwars.items[0].userRating;

        document.getElementById('title').innerHTML = title;
        document.getElementById('direc').innerHTML = director;
        document.getElementById('score').innerHTML = score;

    }).catch(function(err) {
        alert(err);
    });
};

