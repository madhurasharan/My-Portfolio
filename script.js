// Filter Project Cards
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    // Highlight the active filter
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide cards with flex effect
    projectCards.forEach(card => {
      const cardCategories = card.dataset.category.split(' ');
      const isMatch = selectedCategory === 'all' || cardCategories.includes(selectedCategory);

      card.style.display = isMatch ? 'flex' : 'none';
      card.style.opacity = isMatch ? '1' : '0';
    });
  });
});

// Toggle Mobile Menu
function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");

  document.body.classList.toggle("no-scroll");
}
