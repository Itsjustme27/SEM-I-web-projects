let result = document.querySelector("#result");

let flag = 1;
let number = parseInt(prompt("Enter a number: "));

for(let i = 0; i <= number; i++){
    if(number % i == 0){
        flag = 0;
    }
}

if(flag == 1){
    result.innerHTML = `The number ${number} is prime.`;
} else {   
    result.innerHTML = `The number ${number} is not prime.`;
}