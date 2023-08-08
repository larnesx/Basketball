const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-content]');
const navButtons = document.querySelectorAll('.navbut');

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



