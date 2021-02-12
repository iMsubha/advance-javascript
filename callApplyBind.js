const normalPerson={
    firstName: "Subha",
    lastName:"Fairuz",
    salary: 25000,
    getFullName: function(){
    return this.firstName +" "+ this.lastName;
   },
//    method inside an object
   chargeBill:function(amount, tips, tax){
      this.salary = this.salary -amount -tips -tax;
      return this.salary;
   }
}
console.log(normalPerson.firstName);
console.log(normalPerson.getFullName());
// console.log(normalPerson.chargeBill(200));

const heroPerson={
    firstName: "Subha",
    lastName:"Fairuz",
    salary: 8950
}

const friendlyPerson={
    firstName: "Rahim",
    lastName:"ALi",
    salary: 8959
}
// bind - > create new function and call that
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(950));
// console.log(heroChargeBill(200));

//call -> direct call from other object
// normalPerson.chargeBill.call(friendlyPerson, 2959);
// console.log(friendlyPerson.salary);

//apply -> direct call with Array
normalPerson.chargeBill.apply(friendlyPerson, [300,30,60])
console.log(friendlyPerson.salary);


