let customer = [{Job: "",year: 0,spouse: '',kids: 0}];

 function getCustomer (name,cb) {

    setTimeout(() => {
                        customer.push(name);
                        cb();
    }, 5000);
    
 }

 const printCustomer = () => {
                        
                                console.log(`You will be a ${customer[1].Job} in ${customer[1].year} and married to ${customer[1].spouse} with ${customer[1].kids} kids`)
                          
 }

 getCustomer({Job: "Chemist",year: 2069, spouse: "Thato",  kids: 2 }, printCustomer);