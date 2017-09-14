function showPicture(which){
    var source = which.getAttribute('href')
    var img = document.getElementById('placeholder')
    img.setAttribute('src', source)
}

function init(){
    var ul = document.getElementById('link')
    if (ul) {
        ul.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                showPicture(e.target)
            }
            e.preventDefault();
        })
    }
}

function addLoadEvent(func){
    var old = window.onload
    if(typeof window.onload != 'function'){
        window.onload = func
    }else{
        window.onload = function(){
            old()
            func()
        }
    }
}
//DOM ready 
// window.onload = function(){
//     init()
// }
addLoadEvent(init())