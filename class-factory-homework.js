class Hamster {
    constructor(owner, name, price = 15){
        this.owner = owner,
        this.name = name,
        this.price = price
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}

let hampy = new Hamster("Hannah", "Hampy");
    // console.log(hampy);
    // hampy.wheelRun();
    // hampy.eatFood();
    // console.log(hampy.getPrice());

class Person {
    constructor(name = "Bill", age = 0, height = 0, weight = 0, mood = 0, hamsters, bankAccount = 0){
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight,
        this.mood = mood,
        this.hamsters = hamsters = [],
        this.bankAccount = bankAccount
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(otherName){
        console.log(`Hi, ${otherName}!`);
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamsterObj){
        this.hamsters.push(hamsterObj);
        this.mood += 10;
        this.bankAccount -= hamsterObj.getPrice()
    }
}

let elon = new Person();
// console.log(elon);
console.log(elon.getName());
console.log(elon.getAge());
console.log(elon.getWeight());
elon.greet("Bill Gates");
elon.eat();
elon.exercise();
elon.ageUp();
elon.buyHamster(hampy);
console.log(elon);