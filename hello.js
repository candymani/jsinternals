g = 10;
var x = 5;
var y = 7;

function add(a, b)
{
    return a + b;
}

console.log("the sum of " + x + " and " + y + " is " + add(x, y));

var fcla = { id: 1, name: "mani"};
var scla = Object.create(fcla);

console.table(fcla);

function ppm()
{
    console.log("hello")
}

ppm();

function ppm(msg)
{
    console.log(msg);
}

ppm("Second");

console.log(fcla);

