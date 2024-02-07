let a = parseInt(prompt("Enter the value of a"));
let print = document.querySelector('#test');
if (a < 5){
    console.log("The  value of a is less than 5");
    document.writeln("The  value of a is less than 5"); 
    print.innerHTML = "The  value of a is less than 5";
}else{
    console.log("The value is greater");
    document.writeln("The value is greater");
    print.innerHTML = "The value is greater";
}