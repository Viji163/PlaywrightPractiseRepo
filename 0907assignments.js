//Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25


  function printOddNumbers() {
    for (let i = 1; i < 25; i++) {
            if (i%2!=0) {
               console.log(i,"odd number");  
        }  
          else {
            console.log(i,"Even number"); 
        }
    
  }
}

printOddNumbers()

//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.
function checkTheNumberType() {
    let number = 0 
     //let number = -2
     //let number = 3

            if (number>0) {
               console.log(number,"Its a Positive number");  
        } else if (number<0) {
            console.log(number," Its a Negative number"); 
        } 
          else {
            console.log(number,"Its a Neutral number"); 
        }
    
  }

checkTheNumberType()


// else if condition 
function browserLaunch() {
    let browserName = "chrome"
    if (browserName==="chrome") {
        console.log("Chrome browser is launched Sucessfully");
        
    }else {
       console.log("Safari browser is launched Sucessfully");
    }
    
}
browserLaunch()

// Testtype declaration switch method
function runTestType() {
    let testType = "smoke"

switch (testType) {
    case "smoke":
         console.log("Smoke test running successfully");
         
        break;
         case "sanity,":
            console.log("Sanity test running successfully");
        
        break;
         case "regression,":
            console.log("Regression test running successfully");
        
        break;
    default:
        console.log("Default Smoke test running successfully");
        break;
}
    
}
runTestType() 


 
        



    
    
