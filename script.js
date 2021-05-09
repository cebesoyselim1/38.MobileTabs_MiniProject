const images = document.querySelectorAll(".mobile-img");
const btns = document.querySelectorAll(".mobile-nav-item");

btns.forEach((btn,index) => {
    btn.addEventListener("click", (e) => {
        reset();
        if(e.target.classList.contains("mobile-nav-text") || e.target.classList.contains("fas")){
            e.target.parentElement.classList.add("active");
        }else{
            e.target.classList.add("active");
        }
        images[index].classList.add("activeImage");
    })
})

function reset(){
    images.forEach((image) => {
        image.classList.remove("activeImage");
    })

    btns.forEach((btn) => {
        btn.classList.remove("active");
    })
}