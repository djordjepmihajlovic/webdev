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