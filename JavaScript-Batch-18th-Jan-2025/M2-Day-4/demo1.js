// problem solving via recursion

// Factorial of 5
function fact(n){
    if(n == 0 || n == 1){  //0! = 1 &  1!=1
        return 1;
    }
    else{
        return n * fact(n-1);  //n! = n * (n-1)
    }
}
console.log(fact(5)); // Output: 120



