const toggler = document.querySelector('.toggler')

toggler.addEventListener('click', toggleNav)

function toggleNav () {
    toggler.addEventListener('click', toggleNav)
    const mobileNavLinks = document.querySelector('.links')
    const mobileNavLinkDisplayStyle = window.getComputedStyle(mobileNavLinks).display
    const aboutContainer = document.querySelector('#aboutContainer')
    if(mobileNavLinkDisplayStyle === 'none') {
        showNav(mobileNavLinks, aboutContainer)
    } else { 
        hideNav(mobileNavLinks, aboutContainer)
    }
}

function showNav (navContainer, aboutContainer) {
    navContainer.style.display ='inline-flex'
    const fullNavHeight = document.querySelector('.mainNav').offsetHeight
    aboutContainer.style.top = `${fullNavHeight}px`
}
function hideNav (navContainer, aboutContainer) {
    aboutContainer.style.top = '51px'
    navContainer.style.display ='none'
}

window.addEventListener('resize', handleSizeSwitch)

function handleSizeSwitch() {
    const currentSize = window.innerWidth 
    const mobileNavLinks = document.querySelector('.links')
    const aboutContainer = document.querySelector('#aboutContainer')
    const linksHeight = mobileNavLinks.offsetHeight
    if(currentSize > 800){
        if(parseInt(window.getComputedStyle(aboutContainer).top) > 0){
            aboutContainer.style.top = '0px'
        }
        if(window.getComputedStyle(mobileNavLinks).display === 'none'){
            mobileNavLinks.style.display ='inline-flex'
        }
    } else {
        if(parseInt(window.getComputedStyle(aboutContainer).top) < 51){
            aboutContainer.style.top ='51px'
        }
        mobileNavLinks.style.display = 'none'
        }
}
