//Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! //



function factorial (n) {
    let res = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        res = res * i; 
    return res;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}