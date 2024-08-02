document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const openFormButton = document.getElementById('openFormButton');
    const formPopup = document.getElementById('formPopup');
    const closeButton = document.querySelector('.close');
    const mainContent = document.getElementById('main-content');
   

    console.log('openFormButton:', openFormButton);
    console.log('formPopup:', formPopup);
    console.log('closeButton:', closeButton);

    if (openFormButton) {
        openFormButton.addEventListener('click', function () {
            formPopup.style.display = 'flex';
            mainContent.classList.add('blur');
        });
    } else {
        console.error('Open Form Button not found');
    }

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            formPopup.style.display = 'none';
            mainContent.classList.remove('blur');
        });
    } else {
        console.error('Close Button not found');
    }

    if (formPopup) {
        window.addEventListener('click', function (event) {
            if (event.target == formPopup) {
                formPopup.style.display = 'none';
                mainContent.classList.remove('blur');
            }
        });
    } else {
        console.error('Form Popup not found');
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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

    // const sectionsToObserve = document.querySelectorAll('#about, #work1');
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('transition-active');
    //             entry.target.classList.remove('transition');
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, {
    //     threshold: 0.5
    // });

    const aboutSection1 = document.querySelector('.about-section');
    const menuIcon1 = document.getElementById('menu-icon');
    const navbar1 = document.querySelector('.navbar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-transition');
            } else {
                entry.target.classList.remove('animation-transition');
            }
        });
    });

    observer.observe(aboutSection1);

    menuIcon1.addEventListener('click', () => {
        menuIcon1.classList.toggle('open');
        navbar1.classList.toggle('open');
    });





    // sectionsToObserve.forEach(section => {
    //     section.classList.add('transition');
    //     observer.observe(section);
    // });

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navBg = document.querySelector(".nav-bg");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
        navBg.classList.toggle("active");
        mainContent.classList.toggle("blur");
    });

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: "smooth" });
        navbar.classList.remove("active");
        navBg.classList.remove("active");
        mainContent.classList.remove("blur");
    });

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        successMessage.classList.remove("hidden");
        setTimeout(() => {
            successMessage.classList.add("hidden");
            formPopup.style.display = "none";
            mainContent.classList.remove("blur");
        }, 2000);
    });

    const html_1 = document.getElementById('html1');
    const css_1 = document.getElementById('css1');
    const js_1 = document.getElementById('js1');
    const sql_1= document.getElementById('sql1');

    if (html_1) {
        html_1.addEventListener('dblclick', function () {
            window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank');
        });
    } else {
        console.error('HTML skill element not found');
    }

    if (css_1) {
        css_1.addEventListener('dblclick', function () {
            window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank');
        });
    } else {
        console.error('CSS skill element not found');
    }

    if (js_1) {
        js_1.addEventListener('dblclick', function () {
            window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank');
        });
    } else {
        console.error('JavaScript skill element not found');
    }

    if (sql_1) {
        sql_1.addEventListener('dblclick', function () {
            window.open('https://dev.mysql.com/doc/', '_blank');
        });
    } else {
        console.error('sql skill element not found');
    }

   
});
