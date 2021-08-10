console.log("---Welcome To Prime Number Generator---");
console.log("Method 1: Brute Force Approach ");
console.log("Method 2: Optimal Approach ");
console.log("Method 3: Using Sieve Of Eratosthenes ");

// Take Range [num1,num2] as input
var num1 = parseInt(prompt("Enter Number 1: ", "0"));
var num2 = parseInt(prompt("Enter Number 2: ", "0"));
var method = parseInt(prompt("Enter Method 1/2/3?","1"));
//brute force approach (Method-1) -> Checking each number if it is divisible by any other number or not.
if (method===1) {
    let arr = [];
    for(let i=num1;i<=num2;i++){
        // Skip when number = 1 or 0
        if(i===1 || i===0){
            continue;
        }
        let isPrime=1;
        for(let j=2;j<=(i/2);j++){
            if(i%j===0){
                isPrime=0;
                break;
            }
        }
        if(Boolean(isPrime)){
            arr.push(i);
        }
    }
    console.log("Prime numbers using method-1");
    console.log(arr);
}
// Optimal solution: only 2 is smallest even prime others are all odd ,so skip even numbers
if (method===2) {
    let arr = [];
    // Check if number is less than 2
    if(num1<=2){
        num1=2;
        if(num2>=2){
            arr.push(2);
            num1++;
        }
    }
    // Skip  is num1 is even
    if(num1%2==0){
        num1++;
    }
    for(let i=num1;i<=num2;i++){
        let isPrime=1;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=0;
                break;
            }
        }
        if(Boolean(isPrime)){
            arr.push(i);
        }
    }
        console.log("Prime numbers using method-2");
    console.log(arr);
}
// Method 3 (Most efficient): Sieve Of Eratosthenes : choose a nummber ,make a array of that range and mark all its factors to 1 , do it and after that which are unmarked will be our prime number
if (method===3) {
    let prime=Array.apply(null, Array(1000)).map(Number.prototype.valueOf,0);
    let arr = [];
    for(let i =2;i<=num2;i++){
        // If number not marked
        if(prime[i]===0){
            // Mark all its factor in prime array
            for(let j=i*i;j<=num2;j+=i){
                prime[j]=1;
            }
        }

    }
    for(let i=num1;i<=num2;i++){
        if(prime[i]===0){
            arr.push(i);
        }
    }
        console.log("Prime numbers using method-3");
    console.log(arr);
}

