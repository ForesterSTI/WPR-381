function calculate(a,b,cb) {
    switch (cb) {
        case "+":
            return a+b;
            break;
        case "-" :
            return a-b;
            break;
        default:
            return "no values";
            break;
    }
}
//ecport
module.exports = calculate;