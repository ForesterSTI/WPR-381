//resolve
//reject

//3 Phases
//1. Pending: nothing has been computed (initial stage of each Promise)
//2.Fulfilled: result is computed successfully
//3. Rejeceted: Failure occured during computation
const p = new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            if (11 > 2) {
                resolve("word");
            }else{
                reject(false);
            }
        }, 1000);
    });

   // p.then().catch();
   p.then((fromResolve) => { console.log(fromResolve)}).catch((fromReject) => { console.log(fromReject)});

   //change the code so that you use a function that returns a promise 