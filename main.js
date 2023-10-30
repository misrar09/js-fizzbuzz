
//styling Body
const bodyEl = document.querySelector("body")
bodyEl.style.backgroundColor = "#083b4c"
bodyEl.style.fontFamily = "sans-serif"

//styling Heading
const heading = document.querySelector("h1");
heading.style.textAlign = "center";
heading.style.color = "white"
heading.style.fontSize = "3rem"

//Creating and styling container
const container = document.createElement("div");
document.body.appendChild(container);

container.style.display = "flex"; 
container.style.flexWrap = "wrap"; 
container.style.padding = "5rem"


//Loop with conditions + styling

for (let x = 1; x <= 100; x++) {

    const text = document.createElement("div");
    container.append(text);

    //styling the text divs
    text.style.width = "6rem";
    text.style.height = "6rem";
    text.style.textAlign = "center";
    text.style.lineHeight = "6rem";
    text.style.margin = "1rem";
    
    

    // first condition, to check if there are the numbers which can are divisible by both 3 and 5, if yes then print "FizzBuzz"
    if (x % 3 === 0 && x % 5 == 0) {
        
        text.innerHTML = `FizzBuzz`
        text.style.backgroundColor = "#f0466f"
        text.style.fontWeight = "555"
    }
    //second condition, if a number is divisible by 5 then print "Buzz"
    else if (x % 5 == 0) {
        text.innerHTML = `Buzz`
        text.style.backgroundColor = "#ffd166"
        text.style.fontWeight = "555"
    }
    
    //thrid condition, if a number is divisible by 3 then print "Fizz"
    else if ( x % 3 == 0 ) {
        text.innerHTML = `Fizz`
        text.style.backgroundColor = "#0cd6a1"
        text.style.fontWeight = "555"

    }
    // fourth condition, otherwise print the value of x
    else {
        text.innerHTML = `${x}`
        text.style.backgroundColor = "#1389b2"
        text.style.fontWeight = "555"
    }



}








