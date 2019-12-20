require('fs').readFile('input.txt','utf8', (err, data) =>{

let inputs = data.split(/\r?\n/);

let sum=0;

for(let numbers of inputs){

 sum += (Math.floor(numbers/3)-2);
}
console.log(sum)
})

