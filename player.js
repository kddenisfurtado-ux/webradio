// Dados das estações e playlists
const stations = {
    'pop-rock': {
        name: 'Pop Rock',
        songs: [
           
            { title: 'Te ver', artist: 'Skank', duration: 431, src: 'musicagaucha/musica23.mp3' },
            { title: 'Sucesso Gun', artist: 'Gusn And Rose', duration: 210, src: 'musicagaucha/musica26.mp3' },
            { title: 'Quando o Sol bater na Janela do seu quarto', artist: 'Legião Urbana', duration: 240, src: 'musicagaucha/musica20.mp3' },
            { title: 'Renato Russo - Scrivimi', artist: 'Renato Russo', duration: 200, src: 'musicagaucha/Renato Russo - Scrivimi.mp3' },
            { title: 'Astronauta de mármore', artist: 'Renato Russo', duration: 220, src: 'musicagaucha/musica24.mp3' },
            { title: 'Te ver', artist: 'Skank', duration: 190, src: 'musicagaucha/musica22.mp3' },
            { title: 'La forza della vita', artist: 'Renato Russo', duration: 240, src: 'musicagaucha/musica34.mp3' },
            { title: 'Dezesseis', artist: 'Legião Urbana', duration: 180, src: 'musicagaucha/Dezesseis.mp3' },
            { title: 'Tempo perdido', artist: 'Legião Urbana', duration: 210, src: 'musicagaucha/musica27.mp3' },
            { title: 'Renato Russo - Strani Amori', artist: 'Renato Russo', duration: 200, src: 'musicagaucha/.mp3' },
            { title: 'La vita é adesso', artist: 'Renato Russo', duration: 220, src: 'musicagaucha/musica34.mp3' },
            { title: 'Vamos Fazer Um Filme', artist: 'Legião Urbana ', duration: 180, src: 'musicagaucha/.mp3' },
            { title: 'Due', artist: 'Legião Urbana', duration: 200, src: 'musicagaucha/.mp3' },
            { title: 'I venti del cuore', artist: 'Legião Urbana', duration: 220, src: 'musicagaucha/.mp3' },
            { title: 'Perfeição', artist: 'Legião Urbana ', duration: 240, src: 'musicagaucha/Legião Urbana - Perfeição.mp3' }
        ]
},
'gauchas': {
        name: 'Gaúchas', // Estação Gaucha//
        songs: [
            { title: 'Cabelão Preto', artist: 'Sorriso Lindo', duration: 244, src:'musicagaucha/musica1.mp3' },
            { title: 'O Bagual Chorou', artist: 'Grupo Matizes', duration: 418, src: 'musicagaucha/musica2.mp3' },
            { title: 'faixa-19', artist: 'Garotos de Ouro', duration: 100, src: 'musicagaucha/garotosdeourooficial-faixa-19.mp3' },
            { title: 'Nas Flores do Jardim', artist: 'Tche Barbaridade', duration: 303, src: 'musicagaucha/musica3.mp3' },
            { title: 'CORAÇÃO NA GOELA', artist: 'Sorriso Lindo', duration: 222, src: 'musicagaucha/musica8.mp3' },
            { title: 'Tava Tudo Bem', artist: 'Grupo Matizes', duration: 339, src: 'musicagaucha/musica14.mp3' },
            { title: 'SÓ FALTA VOCÊ', artist: 'Sorriso Lindo', duration: 314, src: 'musicagaucha/musica17.mp3' },
            { title: 'Me vou pra vaneira', artist: 'João Luiz Correa', duration: 344, src: 'musicagaucha/musica21.mp3' },
            { title: 'Fundo da grota', artist: 'Fundo da grota', duration: 723, src: 'musicagaucha/musica28.mp3' },
            { title: 'faixa-3', artist: 'Garotos de Ouro', duration: 100, src: 'musicagaucha/garotosdeourooficial-faixa.mp3' },
            { title: 'Roda de Chimarrão / Nós', artist: 'Osvaldir  e Carlos Magrão', duration: 701, src: 'musicagaucha/musica25.mp3' },
            { title: 'Paredes Pintadas', artist: 'Portal Gaúcho', duration: 431, src: 'musicagaucha/musica30.mp3' },
            { title: 'Sou Eu / Pra não pensar em você', artist: 'Traia Véia', duration: 539, src: 'musicagaucha/musica31.mp3' },
            { title: 'Equivocada', artist: 'Traia Véia', duration: 100, src: 'musicagaucha/musica32.mp3' },
            { title: 'Nova York / Esperando na Janela', artist: ' Traia Véia', duration: 100, src: 'musicagaucha/musica33.mp3' },
            { title: 'Universitario apaixonado', artist: 'Garotos de Ouro', duration: 100, src: 'musicagaucha/garotosdeourooficial-06-universitario-apaixonado.mp3' },
            { title: 'Por um gole a mais', artist: 'Sorriso Lindo', duration: 100, src: 'musicagaucha/sorrisolindo-03-por-um-gole-a-mais.mp3' },
            { title: 'No mundo do meu cavalo', artist: 'Desconhecido', duration: 100, src: 'musicagaucha/garotosdeourooficial-no-mundo-do-meu-cavalo.mp3' },
			{ title:'Alem da Vida', artist:'Sorriso Lindo', duration: 438, src:  'musicagaucha/musica40.mp3' },
			{ title:'AlmaGemea', artist:'Loubet', duration: 311, src:  'musicagaucha/musica41.mp3' },
			{ title:'Casemo e Separemo', artist:'Che Lokedo', duration: 329, src:  'musicagaucha/musica42.mp3' },
			{ title:'No Clarão da Lua', artist:'Garotos de Ouro', duration: 317, src:  'musicagaucha/musica43.mp3' },
			{ title:'O Bobo te esqueceu', artist:'Sorriso Lindo', duration: 247, src:  'musicagaucha/musica44.mp3' },
			{ title:'O pior que eu gosto', artist:'Candeeiro', duration: 248, src:  'musicagaucha/musica45.mp3' },
			{ title:'Sacanagem', artist:'Garotos de Ouro', duration: 300, src:  'musicagaucha/musica46.mp3' },
			{ title:'Retoço de Gaita', artist:'Sorriso Lindo', duration: 306, src:  'musicagaucha/musica47.mp3' },
			{ title:'Caminhonete Branca', artist:'Paulinho Mocelin', duration: 319, src:  'musicagaucha/musica48.mp3' },
			{ title:'No traquejo da vanera', artist:'Chamamento', duration: 311, src:  'musicagaucha/musica49.mp3' },
			{ title:'Pra que chorar?', artist:'Candeeiro', duration: 305, src:  'musicagaucha/musica50.mp3' },
			{ title:'Nada Mudou', artist:'Garotos de Ouro', duration: 308, src:  'musicagaucha/musica51.mp3' },
			{ title:'Tá pegando pesado', artist:'Portal gaucho', duration: 324, src:  'musicagaucha/musica52.mp3' },
			{ title:'Tá quente', artist:'Michel Teló', duration: 242, src:  'musicagaucha/musica53.mp3' },
			{ title:'Te quero só pra mim', artist:'Garotos de Ouro', duration: 256, src:  'musicagaucha/musica54.mp3' },
			{ title:'SOS Coração', artist:'Portal Gaucho', duration: 322, src:  'musicagaucha/musica55.mp3' },
			{ title:'Vagabundo Chora', artist:'Kauã Furakão', duration: 315, src:  'musicagaucha/musica56.mp3' },
			{ title:'Trancão do Livramento', artist:'Minuano', duration: 328, src:  'musicagaucha/musica57.mp3' },
			{ title:'Te tauei no coração', artist:'Garotos de Ouro', duration: 441, src:  'musicagaucha/musica58.mp3' },
			{ title:'Tome amor', artist:'Sorriso Lindo', duration: 248, src:  'musicagaucha/musica59.mp3' },
			{ title:'Tramela', artist:'Talagaço', duration: 317, src:  'musicagaucha/musica60.mp3' },
			{ title:'Coice de Mula chucra', artist:'Portal gaucho', duration: 304, src:  'musicagaucha/musica61.mp3' },
			{ title:'É de montão', artist:'Candeeiro', duration: 315, src:  'musicagaucha/musica62.mp3' },
			{ title:'Espichando o laço', artist:'João Luiz Correa', duration: 401, src:  'musicagaucha/musica63.mp3' },
			{ title:'Mil vidas', artist:'Kauã Furakão', duration: 248, src:  'musicagaucha/musica64.mp3' },
			{ title:'Fogo na roseira', artist:'Garotos de Ouro', duration: 311, src:  'musicagaucha/musica65.mp3' },
            { title: 'Tu aceita', artist: 'Garotos de Ouro', duration: 100, src: 'musicagaucha/garotosdeourooficial-tu-aceita.mp3' }

        ]
    },
    'gospel': {
        name: 'Gospel', // Estação GOSPEL//
        songs: [
            {title: 'Campeão Vencedor', artist: 'Jamily', duration: 423, src: 'musicagaucha/musica9.mp3' },
            {title: 'Com Muito Louvor', artist: 'RICKY VALLEN ', duration: 525, src: 'musicagaucha/musica10.mp3' },
            {title: 'Fé', artist: 'Roberto Carlos', duration: 347, src: 'musicagaucha/musica11.mp3' },
            {title: 'Coração Valente', artist: 'Davi Lukato', duration: 355, src: 'musicagaucha/musica13.mp3' },
            {title: 'Deixa', artist: 'Maria Marçal', duration: 420, src: 'musicagaucha/musica15.mp3' },
            {title: 'Sobre as Águas', artist: 'Davi Sacer', duration: 912, src: 'musicagaucha/musica16.mp3' },
            { title: 'Sucesso19', artist: 'Rick Vallen', src: 'musicagaucha/musica19.mp3' },
            {title: 'Deserto', artist: 'Maria Marçal', duration: 426, src: 'musicagaucha/musica18.mp3' },
            {title: 'Coração Valente', artist: 'Nassaildes Junior', duration: 431, src: 'musicagaucha/musica30.mp3' },
            {title: 'Deus de Promessas', artist: 'Davi Sacer', duration: 539, src: 'musicagaucha/musica31.mp3' }

        ]
    },
    'samba': {
        name: 'Samba', // Estação SAMBA//
        songs: [
            {title: 'Falta você', artist: 'Thiaguinho', duration: 423, src: 'musicagaucha/musica4.mp3' },
            {title: 'Reinventar / A Carta', artist: 'Thiaguinho', duration: 525, src: 'musicagaucha/musica5.mp3' },
            {title: 'Temporal / Velocidade da luz', artist: 'Thiaguinho', duration: 347, src: 'musicagaucha/musica6.mp3' },
            {title: 'Em busca da minha sorte', artist: 'Thiaguinho', duration: 355, src: 'musicagaucha/musica7.mp3' },
            {title: 'ATÉ QUE DUROU', artist: 'Péricles', duration: 539, src: 'musicagaucha/musica12.mp3' }
        ]
    }
};

// Variáveis do player
let currentStation = 'pop-rock';
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let currentTime = 0;
let duration = 0;
let volume = 50;
let playInterval;

// Elementos DOM
const stationNameEl = document.getElementById('station-name');
const currentSongEl = document.getElementById('current-song');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const progressEl = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const playlistItems = document.getElementById('playlist-items');
const audioPlayer = document.getElementById('audio-player'); // Adicione esta linha

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se há estação na URL
    const urlParams = new URLSearchParams(window.location.search);
    const stationParam = urlParams.get('station');
    if (stationParam && stations[stationParam]) {
        currentStation = stationParam;
    }
    
    loadStation();
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', previousSong);
    nextBtn.addEventListener('click', nextSong);
    shuffleBtn.addEventListener('click', toggleShuffle);
    volumeSlider.addEventListener('input', changeVolume);
}

// Carregar estação
function loadStation() {
    const station = stations[currentStation];
    stationNameEl.textContent = station.name;
    currentSongIndex = 0;
    loadCurrentSong();
    updatePlaylist();
}

// Carregar música atual
function loadCurrentSong() {
    const station = stations[currentStation];
    const song = station.songs[currentSongIndex];

    currentSongEl.textContent = `${song.artist} - ${song.title}`;
    duration = song.duration;
    currentTime = 0;

    // Carrega o áudio se existir src
    if (song.src) {
        audioPlayer.src = song.src;
        audioPlayer.load();

        // Aguarda o áudio estar pronto antes de tocar
        audioPlayer.oncanplay = () => {
            if (isPlaying) {
                audioPlayer.play();
            }
        };
    } else {
        audioPlayer.src = '';
    }

    updateTimeDisplay();
    updateProgress();
    updatePlaylistHighlight();
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

// Play
function play() {
    isPlaying = true;
    playPauseBtn.textContent = '⏸';

    // Só tenta tocar se houver src
    if (audioPlayer.src) {
        audioPlayer.play();
    }

    playInterval = setInterval(() => {
        currentTime = Math.floor(audioPlayer.currentTime);
        if (currentTime >= duration || audioPlayer.ended) {
            nextSong();
        } else {
            updateTimeDisplay();
            updateProgress();
        }
    }, 1000);
}

// Pause
function pause() {
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    audioPlayer.pause();
    clearInterval(playInterval);
}

// Música anterior
function previousSong() {
    const station = stations[currentStation];
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = station.songs.length - 1;
    }
    
    loadCurrentSong();
    if (isPlaying) {
        pause();
        play();
    }
}

// Próxima música
function nextSong() {
    const station = stations[currentStation];
    
    if (isShuffled) {
        currentSongIndex = Math.floor(Math.random() * station.songs.length);
    } else {
        if (currentSongIndex < station.songs.length - 1) {
            currentSongIndex++;
        } else {
            currentSongIndex = 0;
        }
    }
    
    loadCurrentSong();
    if (isPlaying) {
        pause();
        play();
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.style.background = isShuffled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
}

// Mudar volume
function changeVolume() {
    volume = volumeSlider.value;
    volumeValue.textContent = volume + '%';
    audioPlayer.volume = volume / 100;
}

// Atualizar display de tempo
function updateTimeDisplay() {
    currentTimeEl.textContent = formatTime(currentTime);
    totalTimeEl.textContent = formatTime(duration);
}

// Atualizar barra de progresso
function updateProgress() {
    const progressPercent = (currentTime / duration) * 100;
    progressEl.style.width = progressPercent + '%';
}

// Formatar tempo
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Atualizar playlist
function updatePlaylist() {
    const station = stations[currentStation];
    playlistItems.innerHTML = '';
    
    station.songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.artist} - ${song.title}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadCurrentSong();
            if (isPlaying) {
                pause();
                play();
            }
        });
        playlistItems.appendChild(li);
    });
    
    updatePlaylistHighlight();
}

// Destacar música atual na playlist
function updatePlaylistHighlight() {
    const items = playlistItems.children;
    for (let i = 0; i < items.length; i++) {
        if (i === currentSongIndex) {
            items[i].className = 'active';
        } else {
            items[i].className = '';
        }
    }
}

// Mudar estação
function changeStation(stationKey) {
    if (stations[stationKey]) {
        currentStation = stationKey;
        pause();
        loadStation();
    }
}

const station = window.location.hash.split('=')[1];
