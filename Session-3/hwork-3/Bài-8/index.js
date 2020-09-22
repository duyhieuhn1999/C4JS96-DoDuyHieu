// 8.1 :
let size = [5, 7, 300, 90, 24,50,75];
console.log('Hello, my name is Duy Hieu and here is my sheep sizes : \n ' + size);

// 8.2 :
let n =Math.max(...size);
console.log('Now my biggest sheep has size ' + n +', let shave it ');

// 8.3
let x = size.indexOf(n);
if( n !== -1){
    size[n]=8
}
console.log(size)