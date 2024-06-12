"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class
var Person = /** @class */ (function () {
    // constructor
    function Person(name, contact, address, single) {
        //data-member
        this.pname = "prasanth";
        this.pcontact = 546765;
        this.paddress = "chennai";
        this.psingle = true;
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    //member-function
    Person.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " contact:").concat(this.pcontact, " single:").concat(this.psingle, " address:").concat(this.paddress));
    };
    return Person;
}());
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
exports.default = Person;
