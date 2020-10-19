// jest -c {}; // adds npm -c {} is short for con4
'use strict';
// in reality the function would be in a different file
function factorsOf(n) {
    const factors = [];
    // for (let i = 0; i < n; i++) {
    //     if(n/i === Math.floor(n/i)){
    //         factors.push(i);
    //     }
    // }
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
            if(n%i === 0){
                factors.push(i, n/i);
            }
        }
    return factors.sort((a,b) => a - b);
}

test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1, 2, 3, 4, 6, 12]);
}); 