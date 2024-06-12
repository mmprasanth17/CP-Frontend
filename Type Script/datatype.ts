console.log("Good afternoon you all")

// 1.number data type

let num1: number = 100, num2: number = 0.5, num3: number = 123456;
console.log(num1, num2, num3);

// 2.string
let fname: string = "prasanth", lname: string = "mani";
console.log(fname, lname);

//3.boolean
let cond1: boolean = true, cond2: boolean = false;
console.log(cond1, cond2);

//4.array
let students: string[] = ["vijay", "prasanth", "sandeep"];
let emp: Array<string> = ["priya", "aarthi", "malini"]

//5.tuple data: it allows user to store multiple type of data in array.
let product:[number,string]=[101,"laptop"]

//6. enum data:  it is used to create constant variable with value.
enum days{sun,mon,tue,wed,thu,fri,sat};
let data1 = days.sun;
let data2 = days.mon;
let data3 = days.tue;

//7. union data: it allows user to store multiple type of data in single variable.
let items:string | number = 2456

//8. any datatype: when we dont know what type of data is going to store in variable.
let futureData:any=true;
