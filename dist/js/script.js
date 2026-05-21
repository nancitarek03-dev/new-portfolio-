const mobileBtn = document.querySelector("#mobile-btn")
const mobileMenu = document.querySelector("#mobile-menu")

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

})


 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});