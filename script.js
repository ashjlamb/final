// Example: A simple flip-card effect 
const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped'); 
    });
});
