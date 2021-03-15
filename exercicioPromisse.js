const loginApi = (username, password) => new Promise((resolve, reject) => {
    if ((username === "william" && password == "123456") ||
        (username === "victor" && password == "654321") ||
        (username === "karina" && password == "558877")) {
        resolve('login.ok.' + username);
    } else {
        reject('invalid.password.for.' + username);
    }
})

const loginsOk = [];
const loginsError = [];

const william = {
    username: "william",
    password: "123456",
};

const victor = {
    username: "william",
    password: "548712",
};

const karina = {
    username: "karina",
    password: "558877",
};

/***
 *   Chamar a loginApi para os usuarios william, victor, karina
 *
 *   se o login der certo adicionar no array loginsOk o retorno da promisse
 *   se o login der errado adicionar no array loginsError o retorno da promisse
 *
 *   APÓS chamar a api para os 3 users fazer um console.log nos arrays
 *
 * ****/


loginApi(william.username, william.password).then((result) => {
    return loginsOk.push(result);
}).catch((err) => {
    return loginsError.push(err);
});


loginApi(victor.username, victor.password).then((result) => {
    return loginsOk.push(result);
}).catch((err) => {
    return loginsError.push(err);
});

loginApi(karina.username, karina.password).then((result) => {
    return loginsOk.push(result);
}).catch((err) => {
    return loginsError.push(err);
});


function waitPush() {
    setTimeout(() => {
        console.log(loginsOk);
        console.log(loginsError);
    }, 2000)
}

waitPush();


