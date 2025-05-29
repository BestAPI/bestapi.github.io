// Theme toggle and mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme') || 'auto';

  if (savedTheme === 'auto') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  } else {
    setTheme(savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Mobile menu toggle with improved reliability
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const html = document.documentElement;

  if (menuToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      html.style.overflow = ''; // Reset overflow
    };

    const openMenu = () => {
      navMenu.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      html.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    };

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate document click handler
      if (navMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking on a menu item
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-nav') && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  }
});