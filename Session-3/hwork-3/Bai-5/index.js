let x = prompt(' Enter a squence of Number, separed by commass (,)');
let arr = x.split(',');
let sum = 0;
for( let i = 0 ; i < arr.length ; i++){
    sum +=Number(arr[i]);
} 
alert('The sum of them is ' + sum);