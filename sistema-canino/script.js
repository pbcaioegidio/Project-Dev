// Inicializa particles.js com configuração personalizada
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "https://cdn-icons-png.flaticon.com/512/616/616408.png",
        "width": 32,
        "height": 32
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 15,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 8,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 80,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});

// Pequena interação visual ao clicar no card
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.dog-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
});
