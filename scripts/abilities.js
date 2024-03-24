document.addEventListener('DOMContentLoaded', function() {
    const abilityButtons = document.querySelectorAll('.ability-btn');
    const videoElement = document.getElementById('abilityVideo');
    const descriptionElement = document.getElementById('abilityDescription');

    abilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoSource = this.getAttribute('data-video');
            const abilityDescription = this.getAttribute('data-description');
            
            
            videoElement.src = videoSource;
            videoElement.play();
            
            
            descriptionElement.textContent = abilityDescription;
        });
    });
});

