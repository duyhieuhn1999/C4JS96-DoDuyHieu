// 8.1 :
let size = [5, 7, 300, 90, 24,50,75];
console.log('Hello, my name is Duy Hieu and here is my sheep sizes : \n ' + size);

// 8.2 :
let n =Math.max(...size);
console.log('Now my biggest sheep has size ' + n +', let shave it ');

// 8.3
let x = size.splice(size.indexOf(Math.max.apply(Math,size)),1);
console.log('After shearing, here is my flock \n '+ size);

// 8.4 .5 
// có tham khảo 
for( let i=1 ; i<= 3 ;i++){
    console.log('MONTH '+ i);
    console.log('One month hs , passed, my sheeps have grown, here are their sizes ');
    console.log(size.map(Element => Element+50));   
    size = size.map(Element => Element+50);
    console.log('Now my biggest sheel has size '+ Math.max.apply(Math,size)+', let shave it');
}

// 8.6
let s=0;
for(let i = 0; i < size.length ;i++){
    s+=Number(size[i]);
}
console.log('My Flock has size in total: ' + s );
console.log('I would got '+ s + ' *2$ = ' + s*2);