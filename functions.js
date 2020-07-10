function add(a,b)
{
    return a+b;
}

function Employee(id, name) 
{
    this.id = id;
    this.name = name;

    Employee.count = 1;
    Employee.prototype.baseSalary = 50000;

    this.print = function(){
        console.log(`id=${this.id} , name=${this.name}`);
    }
}


let mani = new Employee(1, "Mani");
mani.print();
Employee.count = 4;
console.log(mani.baseSalary);
console.log(Employee.count);