const hamburger = document.getElementById('hamburger')
const navItems = document.getElementById('navItems')
const navItem = document.getElementsByClassName('navItem')
const nav = document.getElementById('nav')
const headerRight = document.getElementById('header-right')
const headerLeft = document.getElementById('header-left')

hamburger.addEventListener('click', ()=>{
    if(navItems.style.display == 'none'){
        nav.style.height = '14em'
        navItems.style.display = 'block'
        nav.style.flexDirection = 'column'
        headerRight.style.marginTop = '1em'
        headerRight.style.width = '100%'
        document.getElementById('main').ariaDisabled;
    }
    else{
        navItems.style.display = 'none'
        nav.style.flexDirection = 'row'
        nav.style.height = '3em'
        headerLeft.style.marginTop = '0.6em'
    }
})