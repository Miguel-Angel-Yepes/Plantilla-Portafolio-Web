document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleMenu = document.getElementById('toggle-menu');
const navList = document.getElementById('mobile-menu');

toggleMenu.addEventListener('change', () => {
  navList.classList.toggle('active', toggleMenu.checked);
});

const redireccionar = (parametro) => {
    let url = parametro;
    window.open(url);
}