window.addEventListener('load', function() {
    // Remove the loader after the page is loaded
    const loaderContainer = document.querySelector('.loader-container');
    const pageContent = document.querySelector('.page-content');
    
    // Hide loader and show page content
    loaderContainer.classList.add('hidden');
    pageContent.classList.add('visible');
  });
  