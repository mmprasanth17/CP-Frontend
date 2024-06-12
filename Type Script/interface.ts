// use of interface
interface IResult{

    totalMarks();
    percentage();

}

class Students implements IResult{
    phy:number;
    che:number;
    math:number;
    total:number;

    constructor(p:number,c:number,m:number){
        this.phy=p
        this.che=c
        this.math=m
    }

    totalMarks() {
        return this.total=this.phy+this.che+this.math
    }
    percentage() {
        return (this.total/300)*100;
    }
    studentsResult(){
        console.log(`Physics:${this.phy}, Chemistry:${this.che} Maths:${this.math} Total:${this.totalMarks()} Percentage:${this.percentage()}`)
    }

}
let stdObj = new Students(95,92,85)
stdObj.studentsResult();