// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de aparición para los posts
const posts = document.querySelectorAll('.post');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

posts.forEach(post => {
    post.style.opacity = 0;
    post.style.transform = 'translateY(20px)';
    post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(post);
}); 