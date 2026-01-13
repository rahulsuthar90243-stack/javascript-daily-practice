// inheritance

class parent {
    hello(){
    console.log("hello");
    }
}

class child extends parent{}

let obj = new child();


class person {
    constructor(){
    this.species = "homo species";
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("solve problems, build something");
    }
}

class Docter extends person{
   work(){
   console.log("treat patients");
   }
}

let Rahul = new Engineer();
let Mahipal = new Docter();
let Vp = new person();



// inheritance super keyword

class people{
    constructor(name){
     this.best = "Good Student";
     this.name = name;
    }
    eating(){
    console.log("eating");
    }

    sleeping(){
      console.log("sleeping");
    }
}

class student1 extends people{
    constructor(name){
    super(name);
    }
  work(){
    super.eating();
    console.log("Study");
  }
}

let BCA = new student1("Rahul");