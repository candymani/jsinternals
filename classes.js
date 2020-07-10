//JS 5 syntax
//Think of this as a constructor
//class Person
//{

function Person(id, name){
    this.id = id;
    this.name = name;

    var balance = 0; //closure variable

    function inner(){}//private function

    //Wasteful goes into every object
    // this.print = function(){
    //     console.log(`id=${id}, name=${name} `);
    // }

    Person.prototype.print = function () {
        console.log(`id=${this.id}, name=${this.name}`);
        balance += 100;
        inner();
    }
}
//}

var eich = new Person(1, "brendan");
eich.print();


