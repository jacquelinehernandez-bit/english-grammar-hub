// ===================================
// English Grammar Hub
// Main JavaScript File
// ===================================


// Welcome message

console.log("Welcome to English Grammar Hub!");


// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
