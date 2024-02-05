let p = document.querySelector("#show");
const laptop = {
    brand : "Dell",
    processor: "i5",
    ram : 1,
    price: "ok"
}

p.innerHTML = `laptop brand is ${laptop.brand}` + "processor: " + laptop.processor;



// console.log(laptop);

// //add property to object
// p.addEventListener("mouseover", function(){
//     p.innerHTML = laptop.ram;
// })