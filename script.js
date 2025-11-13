document.addEventListener('DOMContentLoaded', function() {
    const clickBox = document.getElementById('clickBox');
    const messageBox = document.getElementById('messageBox');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    console.log('Elementos carregados:', { clickBox, messageBox, backgroundMusic });
    
    // Configurar música
    backgroundMusic.volume = 0.5; // Aumentei o volume para teste
    
    // Clique na caixa "click"
    clickBox.addEventListener('click', function() {
        console.log('Botão clicado! Tentando tocar música...');
        
        // Tentar tocar música
        backgroundMusic.play().then(() => {
            console.log('Música tocando com sucesso!');
        }).catch(error => {
            console.log('Erro ao tocar música:', error);
            alert('Clique novamente para ativar o som!');
        });
        
        // Iniciar loop dos 10s
        startMusicLoop();
        
        // Esconde a caixa do click
        clickBox.classList.add('hidden');
        
        // Mostra a caixa da mensagem
        messageBox.classList.remove('hidden');
    });
    
    // Função do loop de 10 segundos
    function startMusicLoop() {
        backgroundMusic.currentTime = 0;
        
        // Evento para reiniciar nos 10s
        backgroundMusic.addEventListener('timeupdate', function() {
            if (backgroundMusic.currentTime >= 10) {
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }
        });
    }
    
    // Clique na mensagem para voltar
    messageBox.addEventListener('click', function() {
        console.log('Parando música...');
        
        // Parar música
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        
        // Esconde a mensagem
        messageBox.classList.add('hidden');
        
        // Mostra o click novamente
        clickBox.classList.remove('hidden');
    });
    
    // Debug: Verificar se o áudio está carregando
    backgroundMusic.addEventListener('loadeddata', function() {
        console.log('Áudio carregado! Duração:', backgroundMusic.duration);
    });
    
    backgroundMusic.addEventListener('error', function(e) {
        console.log('Erro no áudio:', e);
        alert('Erro no arquivo de áudio. Verifique o nome e formato.');
    });
});