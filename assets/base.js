/**
 * Smokey Theme - Base JavaScript
 * Core functionality for the theme
 */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('mobile-menu--open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('mobile-menu--open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu on outside click
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('mobile-menu--open');
        document.body.style.overflow = '';
      }
    });
  }
});

// Debounce helper function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle helper function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Handle header scroll effect
let lastScroll = 0;
const header = document.querySelector('[data-header]');

if (header) {
  const handleScroll = throttle(function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('header--scrolled');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      header.classList.add('header--hidden');
    } else {
      // Scrolling up
      header.classList.remove('header--hidden');
    }

    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  }, 100);

  window.addEventListener('scroll', handleScroll);
}

// Newsletter form handler
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForms = document.querySelectorAll('[data-newsletter-form]');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      const submitButton = form.querySelector('button[type="submit"]');
      const messageEl = form.querySelector('[data-newsletter-message]');

      if (!emailInput || !emailInput.value) {
        showMessage(messageEl, 'Please enter a valid email address.', 'error');
        return;
      }

      // Disable submit button
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
      }

      // Simulate subscription (in production, this would call Shopify's API)
      setTimeout(() => {
        showMessage(messageEl, 'Thanks for subscribing!', 'success');
        emailInput.value = '';
        
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Subscribe';
        }
      }, 1000);
    });
  });

  function showMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.className = `newsletter-message newsletter-message--${type}`;
    element.style.display = 'block';

    setTimeout(() => {
      element.style.display = 'none';
    }, 5000);
  }
});

// Quick add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('[data-product-id]');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const productId = this.getAttribute('data-product-id');
      const originalText = this.textContent;

      // Disable button
      this.disabled = true;
      this.textContent = 'Adding...';

      // In production, this would call Shopify's cart API
      // For now, we'll simulate the action
      setTimeout(() => {
        this.textContent = 'Added!';
        
        // Update cart count (if cart icon exists)
        updateCartCount();

        setTimeout(() => {
          this.disabled = false;
          this.textContent = originalText;
        }, 1500);
      }, 500);
    });
  });
});

// Update cart count helper
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('[data-cart-count]');
  
  // In production, fetch actual cart count from Shopify
  // For demo purposes, increment the displayed count
  cartCountElements.forEach(el => {
    const currentCount = parseInt(el.textContent) || 0;
    el.textContent = currentCount + 1;
    
    // Add animation
    el.classList.add('cart-count--updated');
    setTimeout(() => {
      el.classList.remove('cart-count--updated');
    }, 300);
  });
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = this.classList.contains('accordion__trigger--active');

      if (isOpen) {
        this.classList.remove('accordion__trigger--active');
        content.style.maxHeight = null;
      } else {
        this.classList.add('accordion__trigger--active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});

// Quantity selector
document.addEventListener('DOMContentLoaded', function() {
  const quantityInputs = document.querySelectorAll('[data-quantity-input]');

  quantityInputs.forEach(input => {
    const minusBtn = input.parentElement.querySelector('[data-quantity-minus]');
    const plusBtn = input.parentElement.querySelector('[data-quantity-plus]');

    if (minusBtn) {
      minusBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value) || 1;
        const minValue = parseInt(input.getAttribute('min')) || 1;
        
        if (currentValue > minValue) {
          input.value = currentValue - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', function() {
        const currentValue = parseInt(input.value) || 1;
        const maxValue = parseInt(input.getAttribute('max')) || 999;
        
        if (currentValue < maxValue) {
          input.value = currentValue + 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
  });
});

// Lazy load images (for browsers that don't support native lazy loading)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        
        observer.unobserve(img);
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  });
}

// Export utilities for use in other scripts
window.ThemeUtils = {
  debounce,
  throttle,
  updateCartCount
};
