const axios = require('axios');

// axios.get('http://localhost:3000/ssam/dong')
//     .then(function (res) {
//         console.log(res.data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

axios({
    url: 'http://localhost:3000/users/json',
    method: 'post',
    data: {
        "userid": "kim",
        "passwd": "1234",
        "age": 30,
        "habby": ["reading", "music", "coding", "fishing"]
    }
})
    .then(function (res) {
        console.log(res.data);
    })
    .catch(function (err) {
        console.log(err);
    });