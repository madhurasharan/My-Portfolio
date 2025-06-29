// Project Filter Logic
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    // Highlight the active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide projects based on the selected filter
    projectCards.forEach(card => {
      const cardCategories = card.dataset.category.split(' ');
      const shouldShow = selectedFilter === 'all' || cardCategories.includes(selectedFilter);
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

// Hamburger Menu Toggle Logic
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}
