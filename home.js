// Initialize Map
const map = L.map('campusMap').setView([6.8241, 80.7670], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Campus Canteen Markers
const canteens = [
    {
        name: 'Hela Bojun Hala',
        desc: 'Traditional Sri Lankan Food',
        lat: 6.8245,
        lng: 80.7675,
        icon: '🍲'
    },
    {
        name: 'Main Canteen (Matta)',
        desc: 'University Main Canteen',
        lat: 6.8238,
        lng: 80.7668,
        icon: '🍽️'
    },
    {
        name: 'Juice Bar',
        desc: 'Fresh Beverages',
        lat: 6.8235,
        lng: 80.7680,
        icon: '🧃'
    }
];

canteens.forEach(canteen => {
    const customIcon = L.divIcon({
        html: `<div style="
            background: linear-gradient(135deg, #ff6b35, #d63031);
            color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            border: 3px solid white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        ">${canteen.icon}</div>`,
        iconSize: [50, 50],
        className: 'custom-marker'
    });

    L.marker([canteen.lat, canteen.lng], { icon: customIcon })
        .bindPopup(`<strong>${canteen.name}</strong><br>${canteen.desc}`)
        .addTo(map);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = getComputedStyle(entry.target).animation;
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.how-card, .feature-item, .testimonial-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Smooth hover effect for feature icons
document.querySelectorAll('.feature-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
        this.style.transition = 'all 0.3s ease';
    });
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.cta-btn, .how-card, .feature-item').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if(hero) {
        hero.style.backgroundPosition = `0% ${scrolled * 0.5}px`;
    }
});
