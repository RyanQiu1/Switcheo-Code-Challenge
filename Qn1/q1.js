var sum_to_n_a = function(n) {
    let count = 0;
    for (let x = 1; x <= n; x++) {
        count+=x;
    }
    return count;// your code here
};

var sum_to_n_b = function(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + sum_to_n_b(n-1);
    }
    // your code here
};

var sum_to_n_c = function(n) {
    var res = (n * (n+1)) / 2;
    return res;  // your code here
};

