let x = prompt('Enter a sequence of names ');
let arr = x.split(',');
const r = arr.map(x => '<'+x+'>'  );
alert( x +'=>'+r);