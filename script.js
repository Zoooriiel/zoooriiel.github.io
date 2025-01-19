document.addEventListener('DOMContentLoaded', function () {

  // Define the IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const targetId = entry.target.id;
      const targetLink = document.querySelector(`a[href="#${targetId}"]`);

      // Add 'active' class when section is visible, remove when not
      if (entry.isIntersecting) {
        targetLink.classList.add('active');
      } else {
        targetLink.classList.remove('active');
      }
    });
  }, { threshold: 0.5 }); // 50% of the section should be visible

  // Target the sections to observe
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });

  // Function to handle overlay toggle
  const toggleOverlay = (videoClass, overlayClass) => {
    // Toggle overlay on video click
    document.querySelectorAll(videoClass).forEach((video) => {
      video.addEventListener('click', function () {
        document.querySelector(overlayClass).classList.toggle('active');
      });
    });

    // Close overlay on close button click
    document.querySelectorAll(`.close${overlayClass.charAt(0).toUpperCase() + overlayClass.slice(1)}`).forEach((closeButton) => {
      closeButton.addEventListener('click', function () {
        document.querySelector(overlayClass).classList.toggle('active');
      });
    });
  };

  // Activate overlays for all videos
  toggleOverlay('.videoOne', '.overlayOne');
  toggleOverlay('.videoTwo', '.overlayTwo');
  toggleOverlay('.videoThree', '.overlayThree');
  toggleOverlay('.videoFour', '.overlayFour');

});
