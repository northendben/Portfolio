const toggler = document.querySelector('.toggler')

toggler.addEventListener('click', toggleNav)

function toggleNav () {
    console.log('click')
    toggler.addEventListener('click', toggleNav)
    const mobileNavLinks = document.querySelector('.links')
    const mobileNavLinkDisplayStyle = window.getComputedStyle(mobileNavLinks).display
    const projectContainer = document.querySelector('#projectContainer')
    if(mobileNavLinkDisplayStyle === 'none') {
        showNav(mobileNavLinks, projectContainer)
    } else { 
        hideNav(mobileNavLinks, projectContainer)
    }
}

function showNav (navContainer, projectContainer) {
    console.log('show')
    navContainer.style.display ='inline-flex'
    const linksHeight = navContainer.offsetHeight
    // projectContainer.style.position = 'relative'
    // projectContainer.style.top = `${linksHeight}px`
}
function hideNav (navContainer, projectContainer) {
    console.log('hide')
    // projectContainer.style.position = null
    // projectContainer.style.top = null
    navContainer.style.display ='none'
}

window.addEventListener('resize', handleHiddenNav)

function handleHiddenNav() {
    const currentSize = window.innerWidth 
    const mobileNavLinks = document.querySelector('.links')
    const projectContainer = document.querySelector('#projectContainer')
    const linksHeight = mobileNavLinks.offsetHeight
    if(currentSize > 800){
        if(window.getComputedStyle(mobileNavLinks).display === 'none'){
            mobileNavLinks.style.display ='inline-flex'
        }
    } else {
        mobileNavLinks.style.display = 'none'
        }
}
