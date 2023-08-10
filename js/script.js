const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-content]');
const navButtons = document.querySelectorAll('.navbut');

const typeWriterText = document.querySelector('.text-writer');
const textArr = ['never\nstops', "is incredible", "made me strong","is my life"];

let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
    if(charIndex <= textArr[textArrayIndex].length - 1) {
        typeWriterText.textContent += textArr[textArrayIndex].charAt(charIndex);
        charIndex++
        setTimeout(type, 120);
    } else {
        setTimeout(erase, 800);
    }
}
const erase = () => {
    if(charIndex > 0) {
        typeWriterText.textContent = textArr[textArrayIndex].slice(0, charIndex - 1);
        charIndex--
        setTimeout(erase, 60);
    } else {
        textArrayIndex++;
        if(textArrayIndex >= textArr.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, 800);
    }
}

//Starts animation on page load
document.addEventListener('DOMContentLoaded', () => {
    type()
})






tabs.forEach(function(item) {
    item.addEventListener('click', function() {

        contents.forEach(function(item) {
            item.classList.add('hidden');
        })

        const currentBtn = document.querySelector('#' + this.dataset.tab);
        currentBtn.classList.remove('hidden');

        navButtons.forEach(function(item) {
            item.classList.remove('navbutadd');
        })        
    })
})

navButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        navButtons.forEach(function() {
            item.classList.remove('navbutadd');
        })
        item.classList.add('navbutadd');
    })
})

