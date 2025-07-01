//Ternary Operator
// let age = 12;
// let result = age > 18 ? 'Adult' : 'Kid';
// console.log(result);

//Guard Operator
//let age =4;
// let finalAge = age || 18;
// console.log(age);
// console.log(finalAge);

// Default Operator

//let age ;
// let finalAge = age ?? 18;
// console.log(age);
// console.log(finalAge);

                                    //Practice Execise

    let age = 12;
    let gender = 'Female';
    let finalDiscount;

    if(age <= 5){
        finalDiscount = 100;
    }else if(gender === 'Female'){
        finalDiscount = 50;
    }else if(age <= 8){
        finalDiscount = 50;
    }else if (age >= 65){
        finalDiscount = 30;
    }else{
        finalDiscount = 0;
    }
    console.log(`final discount is ${finalDiscount}`);