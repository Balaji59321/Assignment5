class Uber {
    constructor(from_loc,to_loc,distance,city,is_metro){
        this.from_loc = from_loc;
        this.to_loc = to_loc;
        this.distance = distance;
        this.city = city;
        this.is_metro = is_metro;
    }
    
    getFair(name) {
        if(this.is_metro)
            return  name + " cost is " + this.distance * 15;
        return name + " cost is " + this.distance * 12;
    }
    
}

let obj1 = new Uber("Marina Beach","Manapakkam",15,"Chennai",true);
console.log(obj1.getFair("Person1"));
console.log('');

let obj2 = new Uber("Velachery","Guindy",5,"Chennai",true);
console.log(obj2.getFair("Person2"));
console.log('');

let obj3 = new Uber("Thindal","Erode Bus stand","10","Erode",false);
console.log(obj3.getFair("Person3"));
console.log('');
