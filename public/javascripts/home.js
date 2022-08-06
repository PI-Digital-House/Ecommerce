let count= 1
document.getElementById('radio1').checked = true

setInterval(function(){
    nextImage()
}, 4000)
function nextImage(){
    count++
    if(count>4){
        count=1
    } document.getElementById('radio'+count).checked = true
}

const chck = document.getElementById('btn')
console.log('pegueo o btn')

chck.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
})