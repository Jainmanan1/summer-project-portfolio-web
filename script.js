document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    
    const header = document.querySelector('header');
    if (header) {
        document.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    } else {
        console.error('Header not found');
    }

  
    const openFormButton = document.getElementById('openFormButton');
    const formPopup = document.getElementById('formPopup');
    const closeButton = document.querySelector('.close');

    console.log('openFormButton:', openFormButton);
    console.log('formPopup:', formPopup);
    console.log('closeButton:', closeButton);

    if (openFormButton) {
        openFormButton.addEventListener('click', function() {
            formPopup.style.display = 'flex';
        });
    } else {
        console.error('Open Form Button not found');
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            formPopup.style.display = 'none';
        });
    } else {
        console.error('Close Button not found');
    }

    if (formPopup) {
        window.addEventListener('click', function(event) {
            if (event.target == formPopup) {
                formPopup.style.display = 'none';
            }
        });
    } else {
        console.error('Form Popup not found');
    }

 
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
               });
           });
         });
      });


      document.addEventListener('DOMContentLoaded', () => {
        const aboutLink = document.getElementById('aboutLink');
        const aboutSection = document.getElementById('about');
    
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault();
            
           
            aboutSection.scrollIntoView({ behavior: 'smooth' });
    
          
            aboutSection.classList.add('transition');
    
          
            setTimeout(() => {
                aboutSection.classList.add('transition-active');
                aboutSection.classList.remove('transition');
            }, 500); 
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const aboutSection = document.getElementById('about');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('transition-active');
                     observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.5 
        });
    
        observer.observe(aboutSection); 
    });
    
    
    
    

