let hhwrapper = document.querySelector('.header-hero-wrapper');
console.log("Element", hhwrapper);

let projectSection = document.querySelector(".project-section")
let projectLink = document.querySelector('#project-link')

projectLink.addEventListener("click", (e)=>{
    e.preventDefault();
    // alert(projectSection)
    // document.body.scrollTo(projectSection);
    document.body.scrollIntoView();
})
