let button = document.getElementById('button')
let box = document.getElementById('input')
let container = document.getElementById('container')
let num = true

button.addEventListener('click' , function(){
    var para = document.createElement('p')
    para.innerHTML = box.value
    container.appendChild(para)
    para.addEventListener('click' , function(){
        para.style.textDecoration = "line-through"
    })

    para.addEventListener('dblclick' , function(){
        container.removeChild(para)
    })
})