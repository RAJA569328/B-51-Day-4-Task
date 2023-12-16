//Print odd numbers in an array

(function (inputQ1) {
    let outputQ1 = []
for(let i=0; i<inputQ1.length;i++){
    if(inputQ1[i]%2 != 0){
        outputQ1.push(inputQ1[i])
    }    
}
console.log('Q1 Output: ', outputQ1)
})([5,6,7,8,9,1,2,4,6,7]);
//____________________________________________________________________

//Convert all the strings to title caps in a string array
(function(inputQ2){
    for(let i=0;i<inputQ2.length;i++){
        let Output = inputQ2[i].split('')
        let X = Output[0].toUpperCase()
         Output.splice(0,1,X)
        console.log('Q2' ,Output.join(''))
        }
})(['raja','ramanathan','rrr']);

//__________________________________________________________________________
//Sum of all numbers in an array
(function (inputQ3){
    let output = 0
for(let i=0; i<inputQ3.length;i++){
    output = output + inputQ3[i]
}
console.log('Q3' ,output)
})([5,6,7,8,9,1,2,4,6,7]);

//__________________________________________________________________________
//Return all the prime numbers in an array
(function (inputQ4){
    let outputQ4 = []
    for(let i=0;i<inputQ4.length;i++){
        if(inputQ4[i]==1||inputQ4[i]==4){
        }else if(inputQ4[i]==2||inputQ4[i]==3||inputQ4[i]==5){
            outputQ4.push(inputQ4[i])
        }else if(inputQ4[i]%2 != 0&& inputQ4[i]%3 != 0 && inputQ4[i]%5 != 0){
            outputQ4.push(inputQ4[i])
        }else{
            
        }
    }
    console.log('Q4' ,outputQ4)
    })([1,2,4,5,3,53,54,63,3465,63,465,61,6,53, 59, 61, 67, 71, 73, 79, 83, 89, 97,101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223]);

//____________________________________________________________________
//Return all the palindromes in an array
(function(inputQ5) {
    let OutputQ5 = []
for(let i=0;i<inputQ5.length;i++){
    let X = inputQ5[i].toLowerCase().split('')
    let Y = inputQ5[i].toLowerCase().split('').reverse()
    if(X.join('') == Y.join('')){
        OutputQ5.push(X.join('').toUpperCase())
    }
}
console.log('Q5' ,OutputQ5, 'These are Palindrome')
})(['madam', 'MALAYALAM','Zen','guVI']);

//_____________________________________________________________________
//Return median of two sorted arrays of the same size.
//Q6
(function(Array1,Array2){
    let Array3  = Array1.concat(Array2)
    Array3.sort()
    if(Array3.length %2 == 0){
        let X = Array3.length/2
        console.log(Array3[X-1], Array3[X])
    }else if(Array3.length %2 != 0){
        let Y = Array3.length/2
        let Z = Math.floor(Y)
        console.log('Q6' ,Array3[Z])
    }
    })([1,3,5,7,],[2,4,6,8]);

    //_____________________________________________________________________
//Remove duplicates from an array
(function(inputQ7){
    let Y = new Set(inputQ7)
console.log('Q7 ',[...Y])
})(["A23", "B56", "B56", "C79", "D16","A23", "B56", "B56", "C79", "D16",32,32,43,43,2,2,4,5,6,8,9,'guvi','guvi']);
//_____________________________________________________________________
//Rotate an array by k times
(function(Array,K){
    for(let i=0;i<K;i++){
      Array.push(Array[0])
        Array.shift()
        }
    console.log(Array)
    })([1,2,3,4,5,6],3);