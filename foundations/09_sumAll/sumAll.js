const sumAll = function(...range) {
    range = range.sort((a, b) => a - b);

    const a = range[0];
    const b = range[1];
    
    if (typeof a == "string" || typeof b == "string") return "ERROR";
    if (a % 1 != 0 || b % 1 != 0) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    let sum = 0;
    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
