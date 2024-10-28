const header = document.getElementById('header');
const hero = document.querySelector('.video-container');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      header.style.transform = 'translateY(0)';
    } else {
      header.style.transform = 'translateY(-100%)';
    }
  },
  { threshold: 0.1 }
);

observer.observe(hero);
