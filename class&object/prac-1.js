
let Data = "secret information";
class user{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log(Data)
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    changeData(){
        Data = "new information";
    }
}

let student1= new user("dev","dev@email.com");

let admin1=new admin ("admin","admin@email.com");