
const appViewer = document.querySelector('.app-viewer')
const appiFrame = document.querySelector('.app-viewer iframe')
const cross = document.querySelector('.cross')
const imageArea = document.querySelector('.image-area')
const foodCart = document.getElementById('food-cart')
console.log(appViewer, appiFrame)

cross.addEventListener('click', (e)=>{
    // alert(e);
    appViewer.style.display = "none"

})

foodCart.addEventListener('click', (e)=>{
    // alert(JSON.stringify(e));    
    appiFrame.setAttribute('src', foodCart.getAttribute('url'))
    appViewer.style.display = "flex"
})






