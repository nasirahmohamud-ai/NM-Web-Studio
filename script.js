// Scroll Reveal Animation

const reveals = document.querySelectorAll(
".hero, .about, .why, .packages, .process, .portfolio, .testimonial, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section => {

    observer.observe(section);

});