console.log("Good afternoon you all");
// 1.number data type
var num1 = 100, num2 = 0.5, num3 = 123456;
console.log(num1, num2, num3);
// 2.string
var fname = "prasanth", lname = "mani";
console.log(fname, lname);
//3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4.array
var students = ["vijay", "prasanth", "sandeep"];
var emp = ["priya", "aarthi", "malini"];
//5.tuple data: it allows user to store multiple type of data in array.
var product = [101, "laptop"];
//6. enum data:  it is used to create constant variable with value.
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thu"] = 4] = "thu";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
var data2 = days.mon;
var data3 = days.tue;
//7. union data: it allows user to store multiple type of data in single variable.
var items = 2456;
//8. any datatype: when we dont know what type of data is going to store in variable.
var futureData = true;
