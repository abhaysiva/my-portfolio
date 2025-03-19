// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Adjust Skills section height based on image aspect ratio
    const skillsSection = document.getElementById('skills');
    const skillsImage = document.querySelector('.skills-image img');
  
    skillsImage.onload = function () {
      console.log("Image loaded, adjusting height...");
      const aspectRatio = skillsImage.naturalWidth / skillsImage.naturalHeight;
      const newHeight = skillsSection.offsetWidth / aspectRatio;
      skillsSection.style.height = `${newHeight}px`;
    };
  
    // Trigger onload in case the image is already cached
    if (skillsImage.complete) {
      skillsImage.onload();
    }
  });
  