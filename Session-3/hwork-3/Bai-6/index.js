let n = prompt('Enter a squence of number, separated by (,) ')
let arr = n.split(',');
let min = arr[0];
for(let i = 0; i < arr.length ; i++){
    if(Number(arr[i])<Number(min)){
        min = arr[i];
    }
} 
alert('The smallest number is' + min);