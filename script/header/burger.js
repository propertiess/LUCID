const burgerbtn = document.querySelector('.header__burger')
const burgermenu = document.querySelector('.burger-menu')
const burgerlink = document.querySelectorAll('.burger-menu__link')
const wrapper = document.querySelector('.wrapper')
burgermenu.style = 'transition: .4s;'
burgerbtn.addEventListener(('click'), () => {
    burgermenu.classList.toggle('hidden-menu')
    wrapper.classList.toggle('gone')
})
for(let i = 0; i < burgerlink.length; i++){
    burgerlink[i].addEventListener('click',() => {
        burgermenu.classList.toggle('hidden-menu')
        wrapper.classList.toggle('gone')

    })
}