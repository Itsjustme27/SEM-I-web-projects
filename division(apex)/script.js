let result = document.querySelector("#result");

let percentage = parseInt(prompt("Enter your Percentage: "));

switch(true){
    case percentage  > 80:
        result.innerHTML = `<p>Percentage: ${percentage}</p>Your Division is Distinction`;
        break;
    case percentage < 80 && percentage > 70:
        result.innerHTML = `<p>Percentage: ${percentage}</p>Your Division is First Division`;
        break;
    case percentage < 70  && percentage > 60 :
        result.innerHTML = `<p>Percentage: ${percentage}</p> Your Division is Second Division`;
        break;
    case percentage < 60 && percentage > 50:
        result.innerHTML = `<p>Percentage: ${percentage}</p> Your Division is Third Division`;
        break;
    default:
        result.innerHTML = `<p>Percentage: ${percentage}</p> You have failed!`
        break;
}