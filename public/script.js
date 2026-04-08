// ============================================
// Mobile Menu Toggle
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// Load Projects from JSON
// ============================================

async function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) throw new Error('Failed to load projects');
    
    const projects = await response.json();
    
    // Clear loading message
    projectsGrid.innerHTML = '';
    
    // Render each project
    projects.forEach((project, index) => {
      const projectCard = createProjectCard(project);
      projectsGrid.appendChild(projectCard);
      
      // Trigger reveal animation with delay
      setTimeout(() => {
        projectCard.classList.add('reveal');
      }, index * 100);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    projectsGrid.innerHTML = '<p class="loading">Failed to load projects. Please refresh the page.</p>';
  }
}

// Helper function to create a project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  
  const techTags = project.tech
    .map(tech => `<span class="project-tech-tag">${tech}</span>`)
    .join('');
  
  // Conditionally render Live Demo button only if liveUrl exists
  const liveButton = project.liveUrl 
    ? `<a href="${project.liveUrl}" target="_blank" class="project-button">Live Demo</a>`
    : '';
  
  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-tech">${techTags}</div>
    <div class="project-buttons ${project.liveUrl ? '' : 'single-button'}">
      ${liveButton}
      <a href="${project.codeUrl}" target="_blank" class="project-button">View Code</a>
    </div>
  `;
  
  return card;
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);

// ============================================
// Scroll Reveal Effect (IntersectionObserver)
// ============================================

const revealElements = document.querySelectorAll('section');

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
      entry.target.classList.add('revealed');
    }
  });
}, revealOptions);

revealElements.forEach(element => {
  revealOnScroll.observe(element);
});

// Add animation class to sections for fade-in effect
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  section.revealed {
    opacity: 1;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Contact Form Validation & Submission
// ============================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const spinner = document.getElementById('spinner');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
nameInput.addEventListener('blur', () => validateField(nameInput, 'nameError', 'Name is required'));
emailInput.addEventListener('blur', () => {
  if (!emailInput.value.trim()) {
    showError(emailInput, 'emailError', 'Email is required');
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'emailError', 'Please enter a valid email');
  } else {
    clearError(emailInput, 'emailError');
  }
});
messageInput.addEventListener('blur', () => validateField(messageInput, 'messageError', 'Message is required'));

function validateField(field, errorId, errorMessage) {
  if (!field.value.trim()) {
    showError(field, errorId, errorMessage);
    return false;
  } else {
    clearError(field, errorId);
    return true;
  }
}

function showError(field, errorId, message) {
  field.style.borderColor = '#dc2626';
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = message;
  errorElement.classList.add('show');
}

function clearError(field, errorId) {
  field.style.borderColor = '';
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = '';
  errorElement.classList.remove('show');
}

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Validate all fields
  const isNameValid = validateField(nameInput, 'nameError', 'Name is required');
  const isMessageValid = validateField(messageInput, 'messageError', 'Message is required');
  
  let isEmailValid = true;
  if (!emailInput.value.trim()) {
    showError(emailInput, 'emailError', 'Email is required');
    isEmailValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'emailError', 'Please enter a valid email');
    isEmailValid = false;
  } else {
    clearError(emailInput, 'emailError');
  }
  
  if (!isNameValid || !isEmailValid || !isMessageValid) {
    return;
  }
  
  // Disable button and show spinner
  submitBtn.disabled = true;
  submitBtn.classList.add('loading');
  spinner.classList.add('show');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // Success
      formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
      formMessage.classList.add('show', 'success');
      formMessage.classList.remove('error');
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('show');
      }, 5000);
    } else {
      // Error
      formMessage.textContent = data.error || 'Failed to send message. Please try again.';
      formMessage.classList.add('show', 'error');
      formMessage.classList.remove('success');
    }
  } catch (error) {
    console.error('Error:', error);
    formMessage.textContent = 'An error occurred. Please try again later.';
    formMessage.classList.add('show', 'error');
    formMessage.classList.remove('success');
  } finally {
    // Re-enable button and hide spinner
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
    spinner.classList.remove('show');
  }
});
