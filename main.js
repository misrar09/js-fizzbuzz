for (let x = 1; x <= 100; x++) {

    /* console.log(x) this command to print the number from 1 - 100 */

    // first condition, to check if there are the numbers which can are divisible by both 3 and 5, if yes then print "FizzBuzz"
    if (x % 3 === 0 && x % 5 == 0) {
        console.log("FizzBuzz")
    }
    //second condition, if a number is divisible by 5 then print "Buzz"
    else if (x % 5 == 0) {
        console.log("Buzz")
    }
    
    //thrid condition, if a number is divisible by 3 then print "Fizz"
    else if ( x % 3 == 0 ) {
        console.log("Fizz")

    }
    // fourth condition, otherwise print the value of x
    else {
        console.log(x)
    }
}





