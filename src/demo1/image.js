function showPicture(which){
    var source = which.getAttribute('href')
    var img = document.getElementById('placeholder')
    img.setAttribute('src', source)
}

var ul = document.getElementById('link')
if (ul) {
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            showPicture(e.target)
        }
        e.preventDefault();
    })
}