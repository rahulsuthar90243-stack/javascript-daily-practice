let DATA = "secret information";

class user{
    constructor(name, email){
    this.name = name;
    this.email = email;
    }

    viewData(){
     console.log("data =", DATA);
    }
}

class Admin extends user{
    constructor(name, email){
    super(name, email);
    }


    editData(){
     DATA = "some new value";
    }
}

let student1 = new user("Rahul", "abc@gmail.com");
let student2 = new user("Mahipal", "Mp@gmail.com");

let admin1 = new Admin("Vp sight", "ap@gmail.com");