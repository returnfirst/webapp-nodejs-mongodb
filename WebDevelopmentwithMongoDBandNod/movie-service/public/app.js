function viewMovie() {
    // alert('버튼 눌렀어요');

    axios({
        url: 'http://localhost:4000/api/movie/starwars',
        method: 'get'

    }).then(function (fromServer){
        var serverData = JSON.stringify(fromServer.data);
        alert(serverData);
    }).catch(function(err){
        alert(err);
    });
}