const arrowScroll = document.querySelector(".smooth-scrolling");

arrowScroll.addEventListener("click", ()=>{
    const navBar = document.getElementById("navbar");
    navBar.scrollIntoView({behavior: "smooth"});
})