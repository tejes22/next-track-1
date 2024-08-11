document.addEventListener('DOMContentLoaded', () => {
    const songInput = document.getElementById('songInput');
    const searchButton = document.getElementById('searchButton');
    const recommendationsDiv = document.getElementById('recommendations');

    // Create bubbles
    for (let i = 0; i < 20; i++) {
        createBubble();
    }

    searchButton.addEventListener('click', () => {
        const currentSong = songInput.value;
        if (currentSong) {
            getRecommendations(currentSong);
        }
    });

    function getRecommendations(song) {
        // In a real application, you would make an API call to your backend here
        // For this example, we'll use dummy data
        const dummyRecommendations = [
            { title: 'Song 1', artist: 'Artist 1', bpm: 128, key: 'C Major' },
            { title: 'Song 2', artist: 'Artist 2', bpm: 130, key: 'G Minor' },
            { title: 'Song 3', artist: 'Artist 3', bpm: 126, key: 'A Minor' },
            { title: 'Song 4', artist: 'Artist 4', bpm: 132, key: 'D Major' },
            { title: 'Song 5', artist: 'Artist 5', bpm: 124, key: 'F Major' },
            { title: 'Song 6', artist: 'Artist 6', bpm: 128, key: 'B Minor' },
            { title: 'Song 7', artist: 'Artist 7', bpm: 130, key: 'E Major' },
            { title: 'Song 8', artist: 'Artist 8', bpm: 126, key: 'A Major' },
            { title: 'Song 9', artist: 'Artist 9', bpm: 132, key: 'D Minor' },
            { title: 'Song 10', artist: 'Artist 10', bpm: 124, key: 'G Major' },
        ];

        displayRecommendations(dummyRecommendations);
    }

    function displayRecommendations(recommendations) {
        recommendationsDiv.innerHTML = '';
        recommendations.forEach(song => {
            const songElement = document.createElement('div');
            songElement.className = 'recommendation';
            songElement.innerHTML = `
                <div>
                    <strong>${song.title}</strong> by ${song.artist}<br>
                    BPM: ${song.bpm}, Key: ${song.key}
                </div>
                <button class="play-button">Play</button>
            `;
            songElement.querySelector('.play-button').addEventListener('click', () => {
                songInput.value = song.title;
                getRecommendations(song.title);
            });
            recommendationsDiv.appendChild(songElement);
        });
    }

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 50 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        document.body.appendChild(bubble);
    }
});