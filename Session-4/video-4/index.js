//  ex Init :
// let movie = {
//      title: 'The dark night rises',
//      year: 2012,
//      rate: 8.4,
//  };
//  console.log(movie);

// ex read :
// ex 1 :
// console.log(movie['year']);
// console.log(movie.rate);

// console.log(movie.director);

// ex 2 ;
// let list =['sport', 'music', 'game'];
// for ( let i = 0 ; i <list.length ; i++){
//     console.log(list[i].toUpperCase());
// }
// ex 3 :

//  let movie ={
//      title: 'Attack on titans',
//      year : 2013,
//      rate : 8.5,
//  }
//  let a = prompt('What you want to know?');
// if( a == null || a == undefined){
//     alert('does not exist in our data ');

// }else{
//     switch(a){
//         case 'title':
//             alert(movie.title);
//             break;
//          case 'year ':
//          alert(movie.year);
//          break;
//          case 'rate':
//              alert(movie.rate);

//     }
// }
// ex : update :

// ex 1: 
// let movie = {
//     title : 'The dark ninght rises',
//     year : 2012,
//     rate: 8.4,
    
// }
// console.log(movie);
// movie.rate=8.7;
// console.log(movie.rate);
// movie.rate += 0.5;
// console.log(movie); 

// ex 2 :
// let movie = {
//     title :'The dark ninght rises ',
//     year : 2013 ,
//     rate : 8.4,
// }

// let x = prompt(' What you do want to update?');

//  let y = prompt('What is the update ?');
//  if(x != null || x != undefined ){
//      switch(x){
//         case 'title' :
//          movie.title = y;
//          console.log(movie)
//          break; 

//          case 'year':
//         movie.year = y;
//         console.log(movie);
//         break;

//         case 'rate':
//             movie.rate = y;
//             console.log(movie);

//      }
//      }

// EX: CREATE :
// let movie = {
//     title: 'The dark night rises',
//     year: 2012,
//     rate: 8.4,
// }
// let x = prompt('What you want to update?');
// if(x!='title' || x!='year' || x!='rate'){
//     alert(x+' does  not exist in our data, we will add new');
//     let y = prompt('Enter the new data');
//     movie[x]=y;
// }
// console.log(movie);
 
// ex : object array :

// let movie = {
//     title: 'Người nhện',
//     year: 2015 ,
//     rate : 9.5,
// }
// let movie2 = {
//     title: 'Người sắt',
//     year : 2018,
//     rate: 9.2,
// }
// let movie3 = {
//     title : 'Người kiến',
//     year : 2019 ,
//     rate : 8.9,
// }

// let arrMovie = [];
// arrMovie.push(movie);
// arrMovie.push(movie2);
// arrMovie.push(movie3);

// console.log(arrMovie);
// console.log(arrMovie[0]);
// console.log(arrMovie[2].title);
    
// for(let i = 0 ; i < arrMovie.length ; i++){
    // console.log(arrMovie[i]);
// }

// for(let i =0 ; i < arrMovie.length ; i++){
//     console.log(arrMovie[i].title);
//     console.log(arrMovie[i].year);
//     console.log(arrMovie[i].rate);
// }

// arrMovie[2].rate +=0.7;
// console.log(arrMovie[2]); 

//  object containing arry 


// let moive = {
//     title: 'The dark ninght rises ',
//     year : 2012,
//     rate: 8.8,
//     Casts :[' batman ', ' supperman ', ' wonderwoman ']
// } 

//  console.log(moive.title);
//  console.log('year:  '+ moive.year);
//  console.log('rate:  '+ moive.rate)

// let string ="";
// for( let i = 0 ;  i < moive.Casts.length ; i++ ){
//     string += moive.Casts[i];
// }
// console.log('Casts:  ' + string );


// moive.Casts.push(' Ironman ');

// console.log(moive.title);
// console.log('year:  '+ moive.year);
// console.log('rate:  '+ moive.rate)

// let string ="";
// for( let i = 0 ;  i < moive.Casts.length ; i++ ){
//    string += moive.Casts[i];
// }
// console.log('Casts:  ' + string );


{
    let movie1 = {
     title: 'Mind Hunter',
     year: 2012,
     rate: 8.4,
     character: [' X ', ' Y ', ' Z ']
 }
 let movie2 = {
     title: 'Batman',
     year: 2014,
     rate: 7.0,
     character: [' A ', ' B ', ' C ']
 }
 let movie3 = {
     title: 'Endgame',
     year: 2018,
     rate: 8.5,
     character: [' Captain America ', ' Iron Man ', ' Thor '],
 }
 let movieArr = [];
 movieArr.push(movie1);
 movieArr.push(movie2); 
 movieArr.push(movie3);
 let string = "";
 for(let i=0; i<movieArr.length; i++){
     console.log(movieArr[i].title);
     console.log('year: '+movieArr[i].year);
     console.log('rate: '+movieArr[i].rate);
 let string = "";
     for(let j=0; j<movieArr[i].character.length; j++){
         string +=movieArr[i].character[j];
 }
 console.log('character: '+string);
 console.log('-----------------------------------------------------------')
 } 
}