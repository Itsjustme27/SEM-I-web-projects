let dell = document.querySelector('#dell');
let hp = document.querySelector('#hp');
let apple = document.querySelector('#apple');
let acer = document.querySelector('#acer');

let laptops = ['dell', 'hp', 'apple', 'acer'];

let i;

const table = () => {
    for(i = 0; i < laptops.length; i++){
        if(laptops[i] === laptops[0]){
            dell.innerHTML = laptops[i];
        }else if(laptops[i] === laptops[1]){
            hp.innerHTML = laptops[i];
        }else if(laptops[i] === laptops[2]){
            apple.innerHTML = laptops[i];
        }else if(laptops[i] === laptops[3]){
            acer.innerHTML = laptops[i];
        }else{
            break;
        }
    }
}

table();
//TODO: use a button for toggling the values.