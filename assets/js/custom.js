document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const repoLink = card.getAttribute('data-repo');
        window.open(repoLink, '_blank');
    });
});