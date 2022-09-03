class persondetail{
    constructor(name,age,dob,gender,ph)
    {
        this.name=name
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.ph=ph;
        
    }}

    class person1detail extends persondetail{
constructor(name,age,dob,gender,ph){
    super(name,age,dob,gender,ph)
}
    person1(){
        console.log("person1");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
    }}
class person2detail extends persondetail{
    constructor(name,age,dob,gender,ph){
        super(name,age,dob,gender,ph)
    }
person2(){
    console.log(" ")
        console.log("person2");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
}
}
const p1 = new person1detail("palani","32","2-02-1982","male","6324795321");
const p2 = new person2detail("ashok","33","1-07-1986","male","8856779991");
p1.person1();
p2.person2();