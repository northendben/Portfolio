const targets = document.querySelectorAll('.intro-text')
const messages = ['Hi there...', 'My name is...', 'Benjamin Persitz', 'And this is my portfolio...']
const milliseconds= 125
const allContentContainers = document.querySelectorAll('.content-container')

//mutation observer to hide the intro tetx container when done fading out
const callback = (mutationList) => {
    for(const change of mutationList){
        console.log(mutation)
        if (change.target.classList.contains('done')){
            hideIntro()
            mutation.disconnect()
        }
    }
}
const mutation = new MutationObserver(callback)
mutation.observe(targets[0], {attributes: true})

//type writer functionality
function type(char,milliseconds, node) {
    return new Promise(resolve => {
        setTimeout(()=>{
            if(char === '.'){
                node.innerHTML += `<span>${char}</span>`
            } else {
                node.innerHTML += char;
            }
            resolve()
        }, milliseconds)
    })
}

//typewriter driver function
async function typeWriter(text, milliseconds, node){
    const messageChars = text.split('')
    for(let i = 0; i < messageChars.length; i++){
        await type(messageChars[i], milliseconds, node)
        }
}

async function animatePeriods (node){
    const animationTargets = node.querySelectorAll('span')
    for(let i = 1; i <= animationTargets.length; i++){
        animationTargets[i-1].classList.add('pulse')
        await pause(i)
    }
    await fadeText(node)
}

async function pause (multiplier){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve()
        }, 50*multiplier);
    })
}
async function longPause (node){
    return new Promise(resolve =>{
        setTimeout(() => {
            node.classList.add('hide')
            resolve()
        }, 1400);
    })
}
async function fadeText (node) {
    return new Promise(resolve => {
        setTimeout(() => {
            // node.classList.add('big-to-small')
            // node.classList.add('fade-color')
            // node.classList.remove('large')
            // node.classList.remove('text-light')
            node.classList.add('fade-out')
            resolve()
        }, 2000);
    })
}

async function fadeOut (){
    return new Promise(resolve => {
        targets[0].parentElement.classList.add('fade-out')
        setTimeout(()=>{
            resolve()
        }, 1)
    })
}

async function displayText(){
    for(let i = 0; i < targets.length; i++){
            await typeWriter(messages[i],milliseconds,targets[i])
            animatePeriods(targets[i])
            await fadeText(targets[i])
            await pause()
            await longPause(targets[i])
    }
    await fadeOut()
    for(let node of targets){
        node.classList.add('done')
    }
}

async function showCarousel () {
    setTimeout(() =>{
        const projectCarousel = document.querySelector('#projectCarousel')
        const projectContainer = document.querySelector('#projectsContainer')
        let screenSize = window.innerWidth
        let isMobile = false
        screenSize < 648 ? isMobile = true: isMobile=false
        // if(isMobile) {
        //     projectContainer.style.position = 'absolute'
        //     projectContainer.style.top = '51px'
        // }
        if(projectCarousel.classList.contains('hide')){
            projectCarousel.classList.add('fade-in')
            projectCarousel.classList.remove('hide')
            projectContainer.classList.remove('fade-out')
        }
    },1000)
}

async function hideIntro () {
    setTimeout(() => {
        for(let node of targets)
        node.classList.add('hide')
    }, 1000);
    await showCarousel()
}
    
displayText() 

const navItems = document.querySelector('.links').querySelectorAll('span')

for(let item of navItems){
    item.addEventListener('click', changePage)
}

function changePage(evt){
    for(let node of targets){
        node.classList.add('done')
    }
    const targetShowContainer = evt.target.textContent.toLowerCase() + 'Container'
    let showContainerIndex = null
    let hideContainerIndex = null
    for(let i = 0; i < allContentContainers.length; i++){
        // console.log(allContentContainers[i].id)
        // console.log(targetShowContainer)

        if(!allContentContainers[i].classList.contains('hide')){
            hideContainerIndex = i
            allContentContainers[hideContainerIndex].classList.add('hide')
        }
        if(targetShowContainer == allContentContainers[i].id){
            showContainerIndex = i
            allContentContainers[showContainerIndex].classList.remove('hide')
        }
    }
}