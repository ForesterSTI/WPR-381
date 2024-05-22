// resolve and reject 


//3 phases
/*1. pending, nothing has been completed
 (initial stage of each promise)*/
 //Fulfilled result is completed
 //regect: Failure during computation 


/*const p  =new Promise((resolve,reject) =>
{  
    setTimeout(() => {
        if(11<2){
            resolve("true");
        }
        else{
            reject(false);
        }
    }, 1000);
    
});*/

const callpromise = (a,b) =>{
    const p  =new Promise((resolve,reject) =>
        {  
            setTimeout(() => {
                if(a<b){
                    resolve("true");
                }
                else{
                    reject(false);
                }
            }, 1000);
            
        });

return p.then((fromResolve) => {console.log(fromResolve)}).catch((fromReject)=>{console.log(fromReject)});
}

callpromise(10,5)