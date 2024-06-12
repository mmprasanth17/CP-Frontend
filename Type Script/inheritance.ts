import Person from "./oops";
class Company extends Person {
    cname: string;
    gstnumber: number;
    state: string;
constructor(name:string,contact:number,address:string,single:boolean,comname:string,compGst:number,compstate:string){
    super(name,contact,address,single)
    this.cname=comname
    this.gstnumber=compGst
    this.state=compstate
}

    personDetails() {
        console.log(`Name:${this.pname} contact:${this.pcontact}  address:${this.paddress} single:${this.psingle} CompanyName:${this.cname} GST Number:${this.gstnumber} state:${this.state}`);

    }
}
let comObj = new Company("mani",94444,"delhi",true,"Changepond",25526723,"tamil nadu")
comObj.personDetails();