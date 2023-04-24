// Get all links
const links = document.querySelectorAll('a');

// Loop through links and add event listener
links.forEach(link => {
  link.addEventListener('click', () => {
    // Get the ID of the corresponding icon
    const iconId = link.getAttribute('href').split('#')[1] + '-icon';

    // Get the corresponding icon element
    const icon = document.getElementById(iconId);

    // Change the icon class based on whether the link has been visited or not
    if (link.visited) {
      icon.classList.remove('far');
      icon.classList.add('fas');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  });
});
