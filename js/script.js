document.addEventListener('DOMContentLoaded', () => {
    // Generate floating hearts
    const heartsContainer = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '✨'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Randomize position, size, and animation duration
        const startX = Math.random() * 100;
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 5 + 5;
        
        heart.style.left = `${startX}vw`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${duration}s`;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Create new heart every 400ms
    setInterval(createHeart, 400);
    
    // Initial hearts
    for(let i=0; i<15; i++) {
        setTimeout(createHeart, i * 100);
    }

    // Interactive button
    const discoverBtn = document.getElementById('discover-btn');
    const storySection = document.getElementById('story');
    
    discoverBtn.addEventListener('click', () => {
        storySection.style.display = 'flex';
        // Small timeout to allow display:flex to apply before changing opacity for transition
        setTimeout(() => {
            storySection.classList.remove('hidden');
            storySection.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    });
});
