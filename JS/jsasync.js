function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register end");
            resolve();
        }, 5000)
    })


}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Email sent end");
            resolve();
        }, 1000)
    })


}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end");
            // resolve();
            reject("login fail");
        }, 3000)
    })


}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data end");
            resolve();
        }, 2000)
    })


}
function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data displayed end");
            resolve();
        }, 5000)
    })


}

//callback ;- better but not understandable :- callback HEll 
// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData();
//             });
//         });
//     });
// });


//using promises
// state:- resolve , pending,reject

// const pr=new promise((resolve,reject)=>{----  resolve();
// });
// pr.then()
//.catch((err)=>caonsole.log("Error":+err));


// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch((err)=>{console.log('error:'+err)})
// .finally(()=>{console.log('inside finally')})

async function f1() {

    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    }
    catch (err) {
        console.log('Error :' + err);
    }
}
f1();

console.log("All tasks done");