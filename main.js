// An object can represent a real life thing in code
// Create an object that defines you to someone you're meeting for the first time. 


// What properties describe you? Name? Hair color? Myers-Briggs personality?

// After you create the JS object version of you, make one for someone else you know
//  using the same keys, but values unique to them.

// Bonus: Make one of the properties an action you can take, ie a method.
const zach = {
    firstName: "Zach",
    lastName: "Roark",
    hairColor: "brown",
    myersBriggs: "INTP",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
    }

const valorie = {
    firstName: "Valorie",
    lastName: "Carrol",
    hairColor: "brown",
    myersBriggs: "INFP",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
}

console.log(`object names are ${zach.fullName()} and ${valorie.fullName()}`)
