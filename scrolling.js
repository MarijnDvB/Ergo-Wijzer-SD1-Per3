document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element with the id "products"
                document.getElementById('products').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
