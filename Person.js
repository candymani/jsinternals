function Person(name){
    this.name = name

    Person.count = 0
}

var p = new Person("mani")
console.log(p.name)