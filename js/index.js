const lookbookSlides = document.getElementById('lookbook-slider').children;
const partySlides = document.getElementById('party-slider').children;
const pbteenSlides = document.getElementById('pbteen-slider').children;
const allSlides = [lookbookSlides, partySlides, pbteenSlides];

let slideIndex = 1;
allSlides.forEach( slides => {
  displaySlide(slideIndex, slides);
});

function displaySlide(n, slides) {

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function nextSlide(slides) {
  displaySlide(slideIndex += 1, slides);
}

function prevSlide(slides) {
  displaySlide(slideIndex -= 1, slides);
}

const nextButtons = Array.from(document.getElementsByClassName("next"));
const prevButtons = Array.from(document.getElementsByClassName("prev"));

nextButtons.forEach( (next, i) => {
  let idx = i;
  next.addEventListener('click', function() {
    nextSlide(allSlides[idx]);
  });
});

prevButtons.forEach( (prev, i) => {
  let idx = i;
  prev.addEventListener('click', function() {
    prevSlide(allSlides[idx]);
  });
});
