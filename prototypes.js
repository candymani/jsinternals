function Car (type) {
    this.type = type;
    this.color = "red";
}
 

Car.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' Car';
};

var honda = new Car("hatchback")

console.log(honda);
honda.getInfo();