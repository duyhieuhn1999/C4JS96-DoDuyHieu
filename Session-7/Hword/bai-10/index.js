function show(){
    if( wish == null || wish ==''){
        let fixwish = prompt('what is your this year?')
        alert(`${name} \n ${fixwish}`)

    }else{
        alert(`${name} \n ${wish}`)
    }

}
let name = prompt("Your name?")
let wish = prompt("what is your wish for this year?")
show();