function ProjectPage() {
  window.location.href = 'project.html';
}

function CVPage() {
  window.location.href = 'CV.html';
}

function PhotoPage() {
  window.location.href = 'photo.html';
}

function PublicationPage() {
  window.location.href = 'publication.html';
}

function scrollToSection(sectionId) {
    // Get the target element by its ID
    var targetElement = document.getElementById(sectionId);

    // Scroll to the target element
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

var scrollButton = document.getElementById("scrollButton");

  // Get the target div element
  var targetDiv = document.getElementById("content"); // Change "content" to the ID of your specific div

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Attach the checkScroll function to the scroll event

  window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById('scrollButton');
    var scrollButton2 = document.getElementById('scrollButton2');
    var scrollButton3 = document.getElementById('scrollButton3');
    var scrollButton4 = document.getElementById('scrollButton4');
    var scrollButton5 = document.getElementById('scrollButton5');

    // Adjust the value (e.g., 200) based on when you want the buttons to appear
    if (window.scrollY > targetDiv.offsetHeight) {
        scrollButton.style.display = 'block';
        scrollButton2.style.display = 'block';
        scrollButton3.style.display = 'block';
        scrollButton4.style.display = 'block';
        scrollButton5.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
        scrollButton2.style.display = 'none';
        scrollButton3.style.display = 'none';
        scrollButton4.style.display = 'none';
        scrollButton5.style.display = 'none';
    }
});

const projects = [
  {
    title: "Simulating Smectic Liquid Crystals in 3 dimensional space",
    description: "From a research internship at the University of Edinburgh's Institute for Condensed Matter and Complex Systems(ICMCS). My work involved further development of code written in C++ to simulate the behaviour of smectic liquid crystals relaxing according to a free energy. Below is a still from the simulation code I was working on which is originally creditted to Dr. Shendruck and Dr. Paget [cite].",
    images: ["img/Screenshot 2023-08-10 at 12.35.38.png"]
  },
  // {
  //   title: "Spot-a-Knot",
  //   description: "An IOS app designed to show the difficulty in identifying knots and to stress the importance of the search for a universal knot invariant.",
  //   images: ["img/Picture 1.png"]
  // },
  // Add more projects as needed
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-btn-proj");
const nextButton = document.getElementById("next-btn-proj");

function showProject(index) {
  const project = projects[index];
  projectTitle.textContent = project.title;
  projectDescription.textContent = project.description;
  showImage(0); // Show the first image when switching projects
}

function showImage(index) {
  currentImage.src = projects[currentProjectIndex].images[index];
  currentImageIndex = index;
}

function showNextImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex + 1) % project.images.length;
  showImage(currentImageIndex);
}

function showPrevImage() {
  const project = projects[currentProjectIndex];
  currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
  showImage(currentImageIndex);
}

function showNextProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  showProject(currentProjectIndex);
}

function showPrevProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  showProject(currentProjectIndex);
}

// Initial project and image
showProject(currentProjectIndex);
// Event listeners
nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextProject);
prevButton.addEventListener("click", showPrevProject);

print("world")

// object -- background sim 1 antiparticle particle annihilation?

function Particle (x, y, color, radius){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.update = () => {
    this.draw();
  };

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

}

function showPersonal() {
  document.getElementById("projectsFigure").style.display = "none";
  document.getElementById("pdfFigure").style.display = "none";
  document.getElementById("personalFigure").style.display = "none";
  document.getElementById("professionalFigure").style.display = "block";
  document.getElementById("photoFigure").style.display = "block";
  document.getElementById("blogFigure").style.display = "block";
}

function showProfessional() {
  document.getElementById("projectsFigure").style.display = "block";
  document.getElementById("pdfFigure").style.display = "block";
  document.getElementById("personalFigure").style.display = "block";
  document.getElementById("professionalFigure").style.display = "none";
  document.getElementById("photoFigure").style.display = "none";
  document.getElementById("blogFigure").style.display = "none";
}

