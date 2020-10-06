document.addEventListener("DOMCountentLoaded",function(){
    const bt =document.getElementsByClassName("button1")
    addEventListener(`click`,(e) =>{
        console.log(e.target.bt.tagName)
    })
})