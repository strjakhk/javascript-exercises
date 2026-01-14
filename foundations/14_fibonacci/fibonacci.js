const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++){
        let oldCurr = curr;
        curr += prev;
        prev = oldCurr;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
