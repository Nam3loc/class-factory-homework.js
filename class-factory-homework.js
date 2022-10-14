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

// let elon = new Person();
// console.log(elon);
// console.log(elon.getName());
// console.log(elon.getAge());
// console.log(elon.getWeight());
// elon.greet("Bill Gates");
// elon.eat();
// elon.exercise();
// elon.ageUp();
// elon.buyHamster(hampy);
// console.log(elon);

// ========== STORY WITH PERSON CLASS ========== \\

let timmy = new Person("Timmy", 5, 48/*inches*/, 70, 0, 0, 0);
// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();
for(let i = 0; i < 5; i++){
    timmy.eat();
}

// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
for(let i = 0; i < 5; i++){
    timmy.exercise();
}

// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
for(let i = 0; i < 9; i++){
    timmy.ageUp();
}

let gus = new Hamster("Timmy", "Gus")

timmy.buyHamster(gus);

// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
for(let i = 0; i < 15; i++){
    timmy.ageUp();
}

// timmy.eat();
// timmy.eat();
for(let i = 0; i < 2; i++){
    timmy.eat();
}

// timmy.exercise();
// timmy.exercise();
for(let i = 0; i < 2; i++){
    timmy.exercise();
}

// console.log(timmy);

// ========== CHEF MAKE DINNERS ========== \\

class Dinner {
    constructor(appetizer, entrees, dessert){
        this.appetizer = appetizer,
        this.entrees = entrees,
        this.dessert = dessert
    }
}

class Factory {
    constructor(name, restaurant){
        this.name = name,
        this.restaurant = restaurant
    }
    newDinner(dinner){
        return (`Voila! The house specialty: ${dinner.appetizer}, ${dinner.entrees}, ${dinner.dessert}!`);
    }
}

const gordonRamsey = new Factory("Gordon Ramsey", "Gordon Ramsey Steak");
let steak = new Dinner("salad", "steak and potatoes", "lava cake");
let fish = new Dinner("chardonnay", "swordfish", "bread pudding");
let pasta = new Dinner("salad", "chicken parm", "baked alaska");

console.log(gordonRamsey.newDinner(steak));
console.log(gordonRamsey.newDinner(fish));
console.log(gordonRamsey.newDinner(pasta));