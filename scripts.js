var bars = document.getElementById('bars')
var content = document.getElementById('content')

bars.addEventListener('click', () => {
    if (content.style.display === 'block') {
        content.style.display = 'none'
    } else {
        content.style.display = 'block'
    }
})