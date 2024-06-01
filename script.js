// Slideshow functionality for the new portrait section
let portraitSlideIndex = 1;
showPortraitSlides(portraitSlideIndex);

function plusSlides(n) {
  showPortraitSlides(portraitSlideIndex += n);
}

function showPortraitSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portraitSlides");
  if (n > slides.length) {portraitSlideIndex = 1}
  if (n < 1) {portraitSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[portraitSlideIndex-1].style.display = "block";
}

// Modal functionality
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Intersection Observer for fade-in effect
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        let img = entry.target.querySelector('img');
        if (img) img.style.opacity = 1; // Fade in image
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.info-section').forEach(section => {
    observer.observe(section);
  });
});

// Slideshow functionality for the main slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Add AJAX code here to submit form data or validate input fields
  alert('Form submitted!'); // Placeholder alert
});
