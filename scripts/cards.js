const extend = document.querySelector(".extend")
const list = document.querySelector(".list")
const list1 = document.querySelector(".list1")
const list2 = document.querySelector(".list2")
let num = 0

function hover(element) {
    element.setAttribute('src', '../assets/card-designs/card1/bv1c.png');
}
function unhover(element) {
    element.setAttribute('src', '../assets/card-designs/card1/fv1c.png');
}

function hover1(element) {
    element.setAttribute('src', '../assets/card-designs/card1/bv3c.png');
}
function unhover1(element) {
    element.setAttribute('src', '../assets/card-designs/fv3c.png');
}

function hover2(element) {
    element.setAttribute('src', '../assets/card-designs/card1/bv2c.png');
}
function unhover2(element) {
    element.setAttribute('src', '../assets/card-designs/fv2c.png');

}

extend.addEventListener('click',function() {
        list.style.display = "list-item"
        list1.style.display = "list-item"
        list2.style.display = "list-item"
        extend.textContent = "Collapse"
    
})

/*     list.style.display = "list-item"
    list1.style.display = "list-item"
    list2.style.display = "list-item"
    extend.textContent = "Collapse" */