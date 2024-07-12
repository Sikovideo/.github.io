document.addEventListener("DOMContentLoaded", function () {
    const images = [
        document.getElementById('image1'),
        document.getElementById('image2'),
        document.getElementById('image3')
    ];
    const endImage = document.getElementById('endImage');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer'); // 残り時間を表示する要素
    let currentScore = 0;
    let currentIndex = 0;
    let gameStarted = false;
    let gameEnded = false;
    let timeLeft = 20; // 初期の残り時間（秒）

    // 最初の画像を表示
    images[0].style.display = 'block';

    images[0].addEventListener('click', function () {
        images[0].style.display = 'none';
        currentIndex++;
        images[currentIndex].style.display = 'block';
        setTimeout(startGame, 1000); // 1秒後に次の画像へ
    });

    images.forEach(img => {
        img.addEventListener('click', function () {
            if (gameStarted && !gameEnded) {
                currentScore += 4545;
                scoreElement.textContent = `スコア: ${currentScore}`;
            }
        });
    });

    function startGame() {
        if (currentIndex < images.length - 1) {
            images[currentIndex].style.display = 'none';
            currentIndex++;
            images[currentIndex].style.display = 'block';
            setTimeout(startGame, 1000); // 1秒後に次の画像へ
        } else {
            gameStarted = true;
            updateTimer(); // 残り時間のカウントダウンを開始
            setTimeout(endGame, timeLeft * 1000); // 20秒後にゲーム終了
        }
    }

    function updateTimer() {
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `残り時間: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    function endGame() {
        gameEnded = true;
        images[currentIndex].style.display = 'none';
        endImage.style.display = 'block';

        setTimeout(() => {
            endImage.style.display = 'none';
            alert(`スコア: ${currentScore}`);
        }, 3000); // 3秒後に最終スコアを表示
    }
});
