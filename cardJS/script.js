const pfp = (callback) => {
    setTimeout(() => {
        let pfp = document.getElementById('profilePic');
        pfp.style.display = "block";
        callback(pfp);
    },1000);
}
pfp(pfp);

const fName = (callback) => {
    setTimeout(() => {
        let name = document.getElementById('name');
        name.innerHTML = "Itsjustme";
        callback(name);
    },600)
}

fName(fName);

const text = (callback) => {
    setTimeout(() => {
        let lorem = document.getElementById('lorem');
        lorem.innerHTML = "consectetur adipid Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ste Lorem ipsum dolor sit amet quoset  totam vero ullam explicabo aliquam voluptate, libero remaccusantium ratiosperiores porro nobisne inciat sapiente";
        callback(lorem);
    }, 500);
}

text(lorem);

const loadImage = (callback) => {
    setTimeout(() =>{
        let img = document.getElementById('img');
        let buffer = document.querySelector('.buffer');
        img.style.display = "unset";
        buffer.style.display = "none";
        callback(img);
    }, 2000);
}


loadImage(img);


const time = (callback) => {
    setTimeout(() => {
        let date = new Date();
        let hrs = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = document.getElementById('time');
        time.innerHTML = `${hrs}: ${minutes}: ${seconds}`;
        callback(time);
    }, 600);
}

time(time);