const api = async() => {
    let raw = await fetch(`https://randomuser.me/api/`);
    let data = await  raw.json(); 
    console.log(data);
}

api();