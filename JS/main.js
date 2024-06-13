let navber = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = ()=> {
    navber.classList.toggle("active");
};
window.onscroll = ()=> {
    navber.classList.remove("active");
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

document.querySelectorAll(".contact .row .faq .box h3").forEach(a => {
    a.onclick =() => {
        a.parentElement.classList.toggle("active")
    }
});
var swiper = new Swiper(".home-slider", {
    loop :true,
    effect: "coverflow",
    spaceBetween:30,
    gracCursor: true,
    coverflowEffect: {
        rotate:50,
        stretch:0,
        depth: 100,
        modifier:1,
        sliderShadows: false,
    },
    navigation: {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    },
});

var swiper = new Swiper(".gallary-sallider", {
    loop :true,
    effect: "coverflow",
    gracCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:0,
        stretch:0,
        depth: 100,
        modifier:2,
        sliderShadows: true,
    },
    pagination: {
        el: ".swiper-pagination"
    }
});

var swiper = new Swiper(".reviews-slider", {
    loop :true,
    slidesPerView: "auto",
    gracCursor: true,
    spaceBetween: 30,
    pagination: {
        el:".swiper-pagination"
    },
    breakpoints : {
        780: {
            slidesPerView:1,
        },
        1200: {
            slidesPerView:2,
        },
    }
})
