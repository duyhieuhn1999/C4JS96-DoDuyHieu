let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
let counts = {};
// for(let i=0; i<list.length; i++){
//     let num = list[i];
//     counts[num] = counts[num] ? counts[num]+1 :1;
// }
// console.log("to:"+counts['to']);
// console.log("be:"+counts['be']);
// console.log("that:"+counts['that']);
// console.log("of:"+counts['of']);
// console.log("elon:"+counts['elon']);
// console.log("this:"+counts['this']);
// console.log("now:"+counts['now']);
// console.log("back:"+counts['back']);
// console.log("cool:"+counts['cool']);
// console.log("hey:"+counts['hey']);
// console.log("love:"+counts['love']);
// console.log("life:"+counts['life']);
// console.log("rain:"+counts['rain']);
// console.log("summer:"+counts['summer']);
// console.log("color:"+counts['color']);
// console.log("hat:"+counts['hat']);
// console.log("late:"+counts['late']);
// console.log("sorry:"+counts['sorry']);
// console.log("my:"+counts['my']);
// console.log("team:"+counts['team']);
// //3.2:
let inventory = [

    {
    
        name: ' HP Envy 13aq ',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: ' Dell XPS 9370 ',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: ' Dell Inspiron 3567 ',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: ' Dell Latitude E5450 ',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: ' Asus Zenbook ',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: ' HP Pavilion ',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },
]
let inventoryByBrand = {
    hp: [
        {
            name: ' HP Envy 13aq ',
    
            price: 21000,
        
            brand: 'HP',
        
            quantity: 5,
        },
        {  
        name: ' HP Pavilion ',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
        },
    ],
    dell: [
        {
            name: ' Dell XPS 9370 ',
    
            price: 30000,
        
            brand: 'Dell',
        
            quantity: 1,
        },
        {
            name: ' Dell Latitude E5450 ',
    
            price: 8600,
        
            brand: 'Dell',
        
            quantity: 2,
        },
        {
            name: ' Dell Inspiron 3567 ',
    
            price: 9300,
        
            brand: 'Dell',
        
            quantity: 12,
        },
    ],
    asus: [
        {
            name: ' Asus Zenbook ',
    
            brand: 'Asus',
        
            price: 20000,
        
            quantity: 4,
        }
    ],
}
console.log(inventoryByBrand);