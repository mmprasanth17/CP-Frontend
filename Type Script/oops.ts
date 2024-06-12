// export class
class Person{
    //data-member
    pname:string="prasanth";
    pcontact:number=546765;
    paddress:string="chennai";
    psingle:boolean=true

// constructor
constructor(name:string, contact:number, address:string, single:boolean){
    this.pname = name;
    this.pcontact = contact;
    this.paddress = address
    this.psingle = single;
}

    //member-function
    personDetails(){
        console.log(`Name:${this.pname} contact:${this.pcontact} single:${this.psingle} address:${this.paddress}`);
    }
}


// how to create object of class
// let personObj = new person("prasanth",8534,"kerala",true);
// console.log(personObj.pname);
// personObj.personDetails();

// let personObj1 = new person("vijay",9323,"Goa",true);
// console.log(personObj1.pname);
// personObj1.personDetails();

// let personObj2 = new person("sandeep",720,"odisha",true);
// console.log(personObj2.pname);
// personObj2.personDetails();

export default Person;