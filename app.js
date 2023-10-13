function alertButton() {
    alert("hello world!");
}

// document.getElementById('pdfButton').addEventListener('click', function() {
//     // Replace 'path-to-your-file.pdf' with the actual path to your PDF file
//     var pdfPath = 'pdf/CV-MIHAJLOVIC Djordje-2 copy.pdf';

//     // Open the PDF file in a new tab or window
//     window.open(pdfPath, '_blank');
// });

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

  // Function to check scroll position and toggle button visibility
//   function checkScroll() {
//     if (window.scrollY > targetDiv.offsetHeight) {
//       scrollButton.style.display = "block";
//     } else {
//       scrollButton.style.display = "none";
//     }
//   }

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