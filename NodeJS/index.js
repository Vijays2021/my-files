function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
process.argv.forEach((val) =>{ // argv (inbuilt api) of process module
    console.log(primeFactorsTo(val));
});



/*console.log(primeFactorsTo(5));

console.log(primeFactorsTo(15));*/
