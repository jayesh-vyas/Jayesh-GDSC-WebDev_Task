function filterEvents(category) {
    var eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(function(card) {
        card.style.display = 'none';
        if (category === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(category)) {
            card.style.display = 'block';
        }
    });

    var tablinks = document.querySelectorAll('.tablinks');
    tablinks.forEach(function(button) {
        button.classList.remove('active');
    });

    document.querySelector('.' + category).classList.add('active');
}
filterEvents('all');