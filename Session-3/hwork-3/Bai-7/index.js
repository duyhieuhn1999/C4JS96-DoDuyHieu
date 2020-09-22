const arr = [3, 4,6,-9 ,10, -88 ,2];
let check = prompt('Enter a number you want check in may arry: ');
let x = arr.find(Element => Element == check);
let i = arr.findIndex(Element => Element == check);
if(x){
    alert( check + ' is FOUND is my array at '+ i);
}else{
    alert( check +' Is NOT FOUND is my array');
}