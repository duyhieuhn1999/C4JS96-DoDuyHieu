// Cau 1 :
console.log('Cau 1: \n \n');
console.log('1.1 var and const in JS :');
console.log('- Var khai bao biến dữ liệu có phạm vi toàn cục hoặc phạm vi chức năng. \n - Const là phạm vi khai báo khối. ');
console.log('1.2 differences between let and var : ');
console.log('- Var các biến có thể được cập nhật và khai báo lại trong phạm vi của nó. \n - Let các biến có thể được cập nhật nhưng không được khai báo lại. ')
console.log('1.3 differences between let and const :');
console.log('Let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với Var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó .');
console.log('1.4 ')

// Cau 2 : 
console.log('Câu 2 : \n \n');
console.log('2.1 What is Boolean ? ')
console.log('- Boolean JavaScript đại diện cho một trong hai giá trị: true hoặc false. ');
console.log('2.2 What results in Boolean ?');
console.log(' Một biểu thức Boolean dẫn đến 1 giá trị true hoặc false. ');

// Câu 3:
 console.log('Câu 3 : \n ');
 console.log('3.a :');
 for(let i = 0 ; i < 7 ; i++){
     console.log(i);
 }

// console.log('3.b :');
// let n = prompt(' Enter a number? ');
// for( let i = 0 ; i < n ; i++){
//     console.log(i);
// }

// console.log('3.c : \n');
// let n = prompt( ' Enter n : ');
// for(let i = 3 ; i < n ; i++){
//     console.log(i);
// }

// console.log('3.d : ');
// let n = prompt(' Enter n :');
// let c = prompt(' Enter c :');
// for(c ; c < n ; c++){
//     console.log(c);
// }

//  console.log('3.e : ');
//   let n = parseInt(prompt(' Enter n :'));
//   let c = parseInt( prompt(' Enter c :'));
//   for( c ;  c <= n ; c=c+3){  
//           console.log(c);
//   }

// console.log('3.f : ');
//   let n = parseInt(prompt(' Enter n :'));
//   let c = parseInt( prompt(' Enter c :'));
//   let s = parseInt(prompt('Enter s :'));
//   for( c ;  c <= n ; c=c+s){  
//           console.log(c);
//   }

// // Câu 4:
// console.log('Câu 4 :');
// let a  = parseInt(prompt('Enter a number '));
// let tich = 1;
// for(let i = 1 ; i <= a ; i++){
//     tich = tich * i
    
// } alert('The factorial of ' + a +  ' is ' + tich);

// // Câu 5 ;
// console.log('Câu 5 : ');
// let a = prompt('How old are you ?');
// if(a <= 14){
//     alert('You are not old enough to view this content! ');
// } else{ 
//     alert('I like it. ');

// } 

// // Câu 6 :
// console.log('Câu 6 : ');
// let x = prompt('Enter x Number ');
// if( x < 5){
//     alert('Lower half of 9');
// }else{
//     alert('higher half of 9')
// } 
// // Câu 7 :
// console.log('Bai 7 :');
// let x = prompt('x = ');
// let n = prompt('n = ');
// if(x < (n/2) ){
//     alert(x  + ' is in lower half of '  + n);
// }else{
//     alert(x + ' is in higher half of ' + n);
// } 
// // Câu 8 :
// console.log('Câu 8 :');
// let x = prompt('x = ');
// if(x % 2 == 0){
//     alert(x + ' is an oll number. ');
// }else{
//     alert(x + ' is an even number ');
// }
// Câu 9 :
// console.log('Câu 9 :');
// console.log('9.c :');
// for(let i = 0 ; i < 8 ; i++){
//     if(i % 2 ==0){
//         console.log('0')
//     }else{
//         console.log('1')
//     }
// }

// console.log('9.d : ');
// let n = prompt('Enter the total number of 1 and 0 ?  ')
// for(let i = 0 ; i < n ; i++ ){
//     if(i % 2 == 0 ){
//         console.log('1')
//     }else{
//         console.log('0')
//     }
// }

// console.log('9.a');
// let b = parseInt(6/2);
// let countL =0;
// let countH =0;
// for(let i=0; i <=6 ;i++){
//   if(i<b){
//     countL++;
//   }
//   else if(i>b){
//     countH++;
//   }
// }
// console.log(countH+"H");
// console.log(countL+"L");
// console.log('9.b :')
// let n = parseInt(prompt('Enter the number of L and H ?'));
// let b = parseInt(n/2);
// let countH = 0;
// let countL = 0;
// for(let i =0 ; i <= n ; i++){
//     if(i < b){
//         countL++;
//     }else if(i > b ){
//         countH++;
//     }
// }
// console.log(countH + 'H');
// console.log(countL + 'L');
// // Bai 10
// console.log('Bai 10 :');
// let kg = prompt('your weinght in kg ?');
// let cm = prompt('your height in cm ? ');
// let m =  cm/100;
// let BMI = parseInt(kg / (m * m) ) ;
// alert('you BMI is ' + BMI);
// if(BMI < 16 ){
//     alert('you are overweight');
// }else if(BMI < 18.8){
//     alert('you are Underweight ');
// }else if(BMI < 25 ){
//     alert('you are normal')
// }else if(BMI < 30 ){
//     alert('you are overwweight')
// }else  {
//     alert('you are Obese')
// }
// Bai 11 
// Vẽ Hình Vuông :
 console.log("11.a");
 for (var i=1; i <= 4; i++) {
     fd(50)
     lt(90)
   }

 console.log("11.b");
 for (var i=1; i < 4; i++) {
     fd(50)
     rt(120)
   }

 console.log("11.c");
 for (var i=1; i <= 5; i++) {
     fd(50)
     rt(72)

   }
 console.log("11.d")
 for (var i=1; i <= 6; i++) {
     fd(50)
     rt(60)
   }
// Bai 12 :


    