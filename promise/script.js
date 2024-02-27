const p1 = new Promise((resolve, _reject) => {
    return resolve("Uthinxa");
}).then((data) => {
    console.log(data);
    return new Promise((resolve, _reject) => {
        return resolve("kapada Layinxa");
    });
}).then((data) => {
    console.log(data);
    return new Promise((resolve, _reject) => {
        return resolve("Gadi Chadinxa");
    })
}).then((data) => {
    console.log(data);
    return new Promise((resolve, _reject) => {
        return resolve("College aayinxa");
    })
}).then((data) => {
    console.log(data);
    return new Promise((resolve, _reject) => {
        return resolve("halla garinxa");
    });
}).catch((err) => {
    console.log("error : ", err)
})