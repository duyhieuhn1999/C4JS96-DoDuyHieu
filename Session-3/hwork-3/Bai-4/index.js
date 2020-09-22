let menu = ['Jeans','T-Shrit','Socks'];


 while(true){
   var x= prompt("hi there, welcome to admin penal, what do you want( C , R , U , D )");
   if( x == ''|| x === null ){
     break;
   }
   switch(x){
       case "R":{
         for(let i = 0; i < menu.length ; i++){
               console.log((i+1)+ '. '+menu[i]);
          }
           break;
       }
       case "C":{
          let newItem = prompt('enter the name of new items')
          menu.push(newItem);
           console.log(menu)
          break;      }
       case "U":{
        let nameTitle = prompt("enter name of newItems ");
        let i = prompt('enter a id you want change');
         menu[i] = nameTitle;
        alert('done')
        console.log(menu);
        break;
       }
       case "D":{
        let i = prompt('enter a id you want start delete');
         let n = prompt('enter a count you want delete');
         menu.splice(i,n);
         console.log(menu);
         break;
       }
   }
 }