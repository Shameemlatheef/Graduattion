

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

prevBtn.addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
});

showSlide(currentSlide);


function verify(){
    let par=document.getElementById("unp");
    par.innerHTML=`<h2>
    "This is only a beginning"<br>
    "congratulations" <br>
    Venue : GOVT AYURVEDA COLLEGE TVM
    <br>date: 25/09/2023
</h2>`
}