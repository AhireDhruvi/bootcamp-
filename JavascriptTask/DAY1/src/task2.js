
//Day 1 Task 2
// Write a javascript function to create a copy of an object. 
// The function will take input and an object and return a copy of the same object
// The copy should take care of any common references 
let userDetails = {
    name:"dhruvi",
    age:20,
    gender:"female",
    shopping:"makeup",
    activities :{
        reading:"book",
        skincare:{
            firststep:"toner",
            secondstep:"serum",
        },
    }
}


let randomdetails = userDetails;
randomdetails.address = "palghar";
//1 spread operator
let ud1 = {...userDetails}

//2 object.assign
let randomDetails2 = Object.assign({},userDetails);
randomDetails2.name = "niklaus";


// json.parse stringify
let randomdetails3 = JSON.parse(JSON.stringify(userDetails));
randomdetails3.name = "hope";
randomdetails3.activities.skincare.firststep = "facewash";


//copy check
let copyCheck = userDetails === randomdetails;
console.log(copyCheck);
let copyCheck2 = ud1 === randomdetails3;
console.log(copyCheck2);

//log
console.log(randomDetails2);
console.log(randomdetails3);
