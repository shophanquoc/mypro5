var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 3,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

swiper.slideTo(3);

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.querySelector(".navbar").style.backgroundColor = "black";
    } else {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
}
function showAbout() {
    // document.querySelector("#heroes").classList.add("hidden");
    document.querySelector("#about").classList.add("show");
    document.querySelector("#art").classList.add("show");
    document.querySelector("#resume").classList.remove("show");
    document.querySelector("#projects").classList.remove("show");
    document.querySelector("#contact").classList.remove("show");

}

function showResume() {
    // document.querySelector("#heroes").classList.add("hidden");

    document.querySelector("#about").classList.remove("show");
    document.querySelector("#art").classList.remove("show");

    document.querySelector("#resume").classList.add("show");
    document.querySelector("#projects").classList.remove("show");
    document.querySelector("#contact").classList.remove("show");
}

function showProjects() {
    // document.querySelector("#heroes").classList.add("hidden");

    document.querySelector("#about").classList.remove("show");
    document.querySelector("#art").classList.remove("show");

    document.querySelector("#resume").classList.remove("show");
    document.querySelector("#projects").classList.add("show");
    document.querySelector("#contact").classList.remove("show");
}

function showContact() {
    // document.querySelector("#heroes").classList.add("hidden");

    document.querySelector("#about").classList.remove("show");
    document.querySelector("#art").classList.remove("show");

    document.querySelector("#resume").classList.remove("show");
    document.querySelector("#projects").classList.remove("show");
    document.querySelector("#contact").classList.add("show");
}
function showHeroes() {
    document.querySelector("#about").classList.remove("show");
    document.querySelector("#art").classList.remove("show");
    document.querySelector("#contact").classList.remove("show");
    document.querySelector("#resume").classList.remove("show");
    document.querySelector("#projects").classList.remove("show");
    // document.querySelector("#heroes").classList.remove("hidden");
}
