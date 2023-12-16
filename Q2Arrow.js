Console.log('ARROW FUNCTION')

//Print odd numbers in an array

let Q1 = (inputQ1)=>{
    let output = []
for(let i=0; i<inputQ1.length;i++){
    if(inputQ1[i]%2 != 0){
        output.push(inputQ1[i])
    }    
}
console.log('Q1 Output: ', output)
}
/*Function call*/
Q1([5,6,7,8,9,1,2,4,6,7])
console.log('______________________________________________')
//____________________________________________________________________

//Convert all the strings to title caps in a string array
// let input =

let Q2 = (inputQ2)=>{
    for(let i=0;i<inputQ2.length;i++){
        let Output = inputQ2[i].split('')
        let X = Output[0].toUpperCase()
         Output.splice(0,1,X)
        console.log('Q2' ,Output.join(''))
        }
}
//Function Call
Q2(['raja','ramanathan','rrr'])
console.log('______________________________________________')

//_____________________________________________________________________
//Sum of all numbers in an array
let Q3 = (inputQ3)=>{
    let output = 0
for(let i=0; i<inputQ3.length;i++){
    output = output + inputQ3[i]
}
console.log('Q3' ,output)
}

//function call
Q3([5,6,7,8,9,1,2,4,6,7])
console.log('______________________________________________')
//____________________________________________________________________
//Return all the prime numbers in an array
let Q4 = (inputQ4)=>{
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
}
Q4([1,2,4,5,3,53,54,63,3465,63,465,61,6,53, 59, 61, 67, 71, 73, 79, 83, 89, 97,101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223])
console.log('______________________________________________')
//____________________________________________________________________
//Return all the palindromes in an array
let ArrayQ5 = ['madam', 'MALAYALAM','Zen','guVI']
let OutputQ5 = []
let Q5 = (inputQ5) => {
for(let i=0;i<inputQ5.length;i++){
    let X = inputQ5[i].toLowerCase().split('')
    let Y = inputQ5[i].toLowerCase().split('').reverse()
    if(X.join('') == Y.join('')){
        OutputQ5.push(X.join('').toUpperCase())
    }
}
console.log('Q5' ,OutputQ5, 'These are Palindrome')
}
// function call
Q5(ArrayQ5)
console.log('______________________________________________')