// smooth move to anchor
// get all anchor elements
const navlinks = document.querySelectorAll('.navlink');

// add process function for each anchor
navlinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});