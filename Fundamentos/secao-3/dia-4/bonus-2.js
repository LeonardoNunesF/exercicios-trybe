function arrayOfNumbers(vector) {
    let result =[];
    for (let i =0; i < vector.length; i += 1) {
        let numbers = vector[i];
        for (let iS = 0; iS < numbers.length; iS += 1) {
            let current = numbers[iS];

        if (current % 2 === 0) { 
            result.push(current);
        }}
    }
    return result;
}
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));