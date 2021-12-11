class Person {
    constructor(name,age,work_experience,phone_number,city){
        this.name = name;
        this.age = age;
        this.work_experience = work_experience;
        this.phone_number = phone_number;
        this.city = city;
    }
    
    getDetails() {
        return  "This is " + `${this.name}` + " and I am " +  `${this.age}` + " I hail from  "+`${this.city}`+".Please Reach me at " + `${this.phone_number}`;
    }
    
    isEligibleForWork() {
        if(this.work_experience > 5){
            return "Eligible";
        }
       return "Not Eligible";
    }
}

let obj1 = new Person("Person1","20","0","9876543210","Chennai");
console.log(obj1.isEligibleForWork());
console.log(obj1.getDetails());

console.log('');
let obj2 = new Person("Person2","28","8","6541236547","Erode");
console.log(obj2.isEligibleForWork());
console.log(obj2.getDetails());
console.log('');

let obj3 = new Person("Person3","30","10","9898765463","Salem");
console.log(obj3.isEligibleForWork());
console.log(obj3.getDetails());
console.log('');

let obj4 = new Person("Person4","21","1","8978675645","Trichy");
console.log(obj4.isEligibleForWork());
console.log(obj4.getDetails());
console.log('');

let obj5 = new Person("Person5","24","0","9876598761","Madurai");
console.log(obj5.isEligibleForWork());
console.log(obj5.getDetails());
