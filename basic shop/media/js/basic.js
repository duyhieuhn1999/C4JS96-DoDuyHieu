let showNike = document.getElementById('nike');
let mainPro= document.getElementById("showList");
let search_Text = document.getElementById("search");
// let search_btn = document.getElementById("search-btn");
// console.log(search_btn);
function soProduct(img, name, description, price)
{
    mainPro.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class="productImg"><img src="${img}" alt="" style = "display :flex"></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${description}</span>
      </div>
      <div class="productPrice">${price}</div>
      <button class="addPro">Add to cart</button>
     </div>
    `
    )
}
// mainPro.innerHTML = '';
// for(let i=0; i< products.length; i++)
// {
    // soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
// }

// console.log(products.length)
// function searchNike(){
//   for(let i = 0 ; i < products.length ; i++){
//     if(products[i].brand == 'Nike'){
//       soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
//     }
//   }
// }

// tìm kiếm theo brand
showNike.addEventListener('click',()=>{
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'Nike'){
      soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
    }
  }
})

// tìm kiếm theo tên
// search_btn.addEventListener('click',()=>{

// })

// function getInputValue(){
//   // Selecting the input element and get its value 
//   var inputVal = search_Text.value;
//   for(let i = 0 ; i < products.length ;i++){
//     let x = products[i].name.split(' ')
//     for(let j = 0 ; j < x.length ; j++){
//       if(x[j] == inputVal){
//         soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
//       }
//     }
//   }
  // Displaying the value
  // alert(inputVal);

// sortby.addEventListener('click',()=>{


// function sortMinToMax (productPrice) {
  // for (let i = 0; i < productPrice.lengh; i++) {
  //   for (let j = i+1; j < productPrice.length; j++) {
  //     if (productPrice[i] > productPrice[j]) {
  //       let temp = productPrice[i];
  //       productPrice[i] = productPrice[j];
  //       productPrice[j] = temp;
  //     }
  //   }
  // }
//sắp xếp theo giá
const sortPro = document.getElementById("sortbyprice");
sortPro.addEventListener('change', (e) => {
  let sortType = sortPro.value;

  if (sortType == "hight_to_low") {
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img[1], products[i].name, products[i].description, products[i].price )
      }
    
  }
  else {
    products.sort(function (a, b) {
      let keyA = a.price;
      let keyB = b.price;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    for(let i=0;i<products.length; i++){
      soProduct(products[i].img[1], products[i].name, products[i].description, products[i].price )
      }

  }
});