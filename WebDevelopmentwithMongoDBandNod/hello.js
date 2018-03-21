console.log('hello');

let a = 1;
let e = 3.14;

let b = '3'; // "3"

let c = true;
let d = false;

console.log(typeof a);
console.log(typeof e);
console.log(typeof b);
console.log(typeof d);

let f = [1,2,3,4,5,6];
f.reverse();
console.log(f);

let h = function() {
    console.log('hi');
};

h();

myFunc(); //함수 선언전에 사용가능 (함수 호이스팅)

function myFunc() {
    console.log('camel case');
};

// Ojbect, JSON
const o = {
    name: 'Kim soongon',
    addr: 'seoul',
    home: 'gyoung-ju',
    age: 40,
    friend: {
        name: 'hong',
        age: 40
    },
    hobby: ['music', 'coding', 'reading'],
    singASong: function() {
        console.log('song song...');
    }
};

console.log(o['name']);
console.log(o.name);
o.singASong();

o.hobby.push('drinking');

o.hobby.forEach(function(item) {
    console.log(item);
});


