/* Menu show - hidden */
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  
  this.scrollY >= 20 ? header.classList.add('scroll-header')
  : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL ABOUT ANIMATION ===============*/
window.addEventListener('load', () => {
  if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.text-gradient').forEach((span) => {
      gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: span,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        }
      });
    });
  }
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer;

const initMixitup = () => {
  if (typeof mixitup !== 'undefined') {
    mixer = mixitup('.work-container', {
      selectors: {
        target: '.mix',
      },
      animation: {
        duration: 300,
      },
    });
  }
};

// Wait for mixitup to load
window.addEventListener('load', () => {
  setTimeout(initMixitup, 100);
});

/* Active work */
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove('active-work');
  });

  this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== CERTIFICATION FILTER ===============*/
const certFilterItems = document.querySelectorAll('.cert-filter-item');
const certificationCards = document.querySelectorAll('.certification-card');

function filterCertifications() {
  const filter = this.getAttribute('data-filter');
  
  // Remove active class from all filter items
  certFilterItems.forEach(item => item.classList.remove('active-cert'));
  // Add active class to clicked item
  this.classList.add('active-cert');
  
  // Filter certifications
  certificationCards.forEach(card => {
    const category = card.getAttribute('data-category');
    
    if (filter === 'all' || filter === category) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.5s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

certFilterItems.forEach(item => item.addEventListener('click', filterCertifications));

/*=============== CERTIFICATION MODAL ===============*/
const certModal = document.getElementById('cert-modal');
const certModalClose = document.querySelector('.cert-modal-close');
const certModalBody = document.getElementById('cert-modal-body');

// Certification data
const certificationData = {
  'ai': {
    title: 'Introduction to Generative AI Studio',
    issuer: 'Simplilearn',
    date: 'December 2024',
    description: 'Comprehensive course covering AI fundamentals and generative AI technologies.',
    skills: ['Generative AI', 'Machine Learning', 'AI Ethics', 'Neural Networks'],
    image: 'https://play-lh.googleusercontent.com/uphrWz_e_K_pZrPOmCR34A6grxPtva0kM8bhMSgdycrlxiBC7C_JzGtyJLn1mfrRLrg'
  },
  'programming-java': {
    title: 'JAVA Technology Stack',
    issuer: 'Infosys Springboard',
    date: 'November 2024',
    description: 'Complete Java development course covering core concepts and enterprise applications.',
    skills: ['Java', 'Spring Framework', 'JPA', 'RESTful APIs'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0I7ghcWdkmRXMHpXmW1ygmpKUetAP5KAJ95SEOGJWnWruRa1Q1NCC4bYBZN38xIfDjyI&usqp=CAU'
  },
  'web': {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'October 2024',
    description: 'Modern web design principles and responsive development techniques.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Media Queries'],
    image: 'assets/img/FreeCodeCamp.jpg'
  },
  'programming-python': {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'September 2024',
    description: 'Foundation course in Python programming and core computer science concepts.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Object-Oriented Programming'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yMNy_n0CevcNHSdusd12-bf940f6c758zQ&s'
  },
  'security': {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'August 2024',
    description: 'Comprehensive introduction to cybersecurity principles and best practices.',
    skills: ['Network Security', 'Risk Management', 'Threat Assessment', 'Security Protocols'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yMNy_n0CevcNHSdusd12-bf940f6c758zQ&s'
  }
};

// Add click event to certification cards
certificationCards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');
    const title = card.querySelector('.certification-title').textContent;
    
    let certKey = category;
    if (category === 'programming') {
      if (title.includes('JAVA')) {
        certKey = 'programming-java';
      } else if (title.includes('Python')) {
        certKey = 'programming-python';
      }
    }
    
    const cert = certificationData[certKey];
    if (cert) {
      showCertificationModal(cert);
    }
  });
});

function showCertificationModal(cert) {
  const modalContent = `
    <h2>${cert.title}</h2>
    <div class="cert-modal-badge">
      <img src="${cert.image}" alt="${cert.title}">
    </div>
    <div class="cert-modal-info">
      <p><strong>Issuer:</strong> ${cert.issuer}</p>
      <p><strong>Date:</strong> ${cert.date}</p>
      <p><strong>Description:</strong> ${cert.description}</p>
      <p><strong>Skills Covered:</strong> ${cert.skills.join(', ')}</p>
    </div>
  `;
  
  certModalBody.innerHTML = modalContent;
  certModal.style.display = 'block';
}

// Close modal events
certModalClose.addEventListener('click', () => {
  certModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === certModal) {
    certModal.style.display = 'none';
  }
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactMessage = document.getElementById('contact-message'),
message = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
    message.textContent = 'Please fill in all fields';
    message.style.color = '#ff6b6b';

    setTimeout(() => {
      message.textContent = '';
    }, 3000);
  } else {
    // Simulate email sending
    message.textContent = 'Message sent successfully!';
    message.style.color = '#51cf66';
    
    setTimeout(() => {
      message.textContent = '';
    }, 5000);

    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
  }
};

if (contactForm) {
  contactForm.addEventListener('submit', sendEmail);
}

/*=============== LIGHT/DARK MODE ===============*/
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('#theme-toggle');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      toggleBtn.classList.remove('ri-sun-line');
      toggleBtn.classList.add('ri-moon-line');
    } else {
      document.body.classList.remove('light-theme');
      toggleBtn.classList.add('ri-sun-line');
      toggleBtn.classList.remove('ri-moon-line');
    }

    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
window.addEventListener('load', () => {
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal('.home-data, .section-title');
    sr.reveal('.home-img-wrapper', { delay: 500 });
    sr.reveal('.home-social', { delay: 600});
    sr.reveal('.services-card, .certification-card, .work-card', { interval: 100 });
    sr.reveal('.skills-group, .education-left, .contact-info', { origin: 'left' });
    sr.reveal('.education-right, .contact-form', { origin: 'right' });
  }
});

/*=============== ANIMATION KEYFRAMES ===============*/
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);