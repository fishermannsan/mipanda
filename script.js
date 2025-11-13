document.addEventListener('DOMContentLoaded', function() {
    const clickBox = document.getElementById('clickBox');
    const messageBox = document.getElementById('messageBox');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    let musicStarted = false;
    
    clickBox.addEventListener('click', function() {
        if (!musicStarted) {
            // Primeiro clique: inicia música
            backgroundMusic.volume = 0.7;
            backgroundMusic.play().catch(e => {
                console.log('Autoplay bloqueado:', e);
                alert('Toque "OK" e depois clique novamente para o som');
            });
            
            musicStarted = true;
            return;
        }
        
        // Segundo clique: prossegue
        clickBox.classList.add('hidden');
        messageBox.classList.remove('hidden');
        
        // Configura loop de 10s
        setInterval(() => {
            if (backgroundMusic.currentTime > 10) {
                backgroundMusic.currentTime = 0;
            }
        }, 1000);
    });
    
    messageBox.addEventListener('click', function() {
        backgroundMusic.pause();
        messageBox.classList.add('hidden');
        clickBox.classList.remove('hidden');
        musicStarted = false;
    });
});
