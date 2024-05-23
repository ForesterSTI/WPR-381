

function calculate(a, b, cb)
{
   
   switch (cb) {
    case "addition":
         return a + b;
        break;
    case "subtract":
        return a - b;
    break;
    default:
        return "no values given";
        break;
   }
}

function add(a,b) {
    return a+b;
}
module.exports = {add, calculate};
