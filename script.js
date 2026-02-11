// ============================================
// TWO YEARS — HEART GARDEN
// FULL EXTERNAL JAVASCRIPT
// ============================================

(function(){
    "use strict";

    // --------------------------------------------
    // 1. SILK HEARTS BACKGROUND
    // --------------------------------------------
    function createSilkHeart() {
        const container = document.getElementById('silkHeartContainer');
        if (!container) return;
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'silk-heart');
        const size = Math.random() * 2.8 + 1.5;
        heart.style.fontSize = size + 'rem';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.animationDuration = (Math.random() * 12 + 16) + 's';
        const hue = Math.floor(Math.random() * 20) + 330;
        heart.style.color = `hsla(${hue}, 75%, 75%, 0.25)`;
        container.appendChild(heart);
        setTimeout(() => { if (heart.parentNode) heart.remove(); }, 28000);
    }

    // initialize silk hearts
    for (let i = 0; i < 40; i++) setTimeout(createSilkHeart, i * 120);
    setInterval(createSilkHeart, 1300);

    // --------------------------------------------
    // 2. DAYS COUNTER (since two years)
    // --------------------------------------------
    function updateCounter() {
        const daysEl = document.getElementById('daysCounter');
        const hoursEl = document.getElementById('hoursCounter');
        if (!daysEl || !hoursEl) return;
        const now = new Date();
        const twoYearsAgo = new Date(now);
        twoYearsAgo.setFullYear(now.getFullYear() - 2);
        const diff = Math.abs(now - twoYearsAgo);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        daysEl.innerText = days;
        hoursEl.innerText = hours;
    }
    updateCounter();
    setInterval(updateCounter, 60000);

    // --------------------------------------------
    // 3. POEM COLLECTION – 15+ LOVE POEMS (she will fall in love)
    // --------------------------------------------
    const poemCollection = [
        // Original 5 (mapped to buttons)
        { 
            title: "🌷 i wait with all i am 🌷", 
            poem: "the clock has no power here.\nyou are not a memory;\nyou are a presence\ni carry beneath my ribs.\nlike a second heartbeat,\nalways, always.", 
            para: "Two years have not made you fade. They have made you eternal. Every love song, every sunset, every sudden breeze — they all whisper your name. I am still here, still yours, still counting the days until i can finally hold you." 
        },
        { 
            title: "💘 yours only, forever 💘", 
            poem: "i don't just love you.\ni recognize you.\nas if my soul\nknew yours\nbefore time existed.\nas if 'apart' is just a word,\nand 'together' is our only truth.", 
            para: "Distance is an illusion when two people are woven from the same thread. You are not just the one i miss — you are the one i belong to. And i know, deep as the sea, that you feel it too." 
        },
        { 
            title: "✨ always, my always ✨", 
            poem: "you ask if i still wait?\nmy love, i never left.\ni have been here,\nplanting flowers in the silence,\nbuilding a home from your letters,\nlearning to love you more\nwith every absent sunrise.", 
            para: "Always is not a word i use lightly. It is the bridge i walk every day to reach you. Even if we haven't met in two years, i have met you in every dream, and you are more real to me than anything else." 
        },
        { 
            title: "🌸 heart's compass 🌸", 
            poem: "if i could fold the miles\nlike paper cranes,\ni'd fill your room with them.\neach one carrying a kiss,\neach one whispering\n'not long now, not long now.'", 
            para: "I close my eyes and see your smile — the one from your photograph, the one that reaches your eyes. I don't just wait for you. I grow for you. I become someone worthy of the love you give me." 
        },
        { 
            title: "🌙 attached, deeply 🌙", 
            poem: "attached does not mean bound.\nit means rooted —\nlike a tree to the earth,\nlike stars to the night sky.\nyou are my gravity.\ni always return to you.", 
            para: "Every night, i send my love into the dark, hoping it reaches you like a lullaby. We are not apart; we are just in different rooms of the same universe. And one day, the door will open." 
        },
        // New poems – 10 more, pure heart
        { 
            title: "💗 infinite you 💗", 
            poem: "i used to count the days.\nnow i don't.\nbecause you are not a number —\nyou are an eternity\nfolded into my chest.", 
            para: "The calendar tried to convince me that time was passing. But loving you has made me timeless. Every morning, i wake and choose you again. And you always choose me back." 
        },
        { 
            title: "🌺 rain and reunion 🌺", 
            poem: "it rained today.\ni thought of how your voice\nsounds like the first thunder\nof spring —\na promise that something beautiful\nis about to begin.", 
            para: "I used to hate the rain. Now i stand in it, because it feels like you — cleansing, fierce, and full of life. When we finally meet, let it be under a grey sky. I will kiss the raindrops from your face." 
        },
        { 
            title: "🕯️ candle in the window 🕯️", 
            poem: "i leave a light on for you.\nnot because i think you'll come tonight,\nbut because you should know\nthere is always\n somewhere to come home to.", 
            para: "You are not lost. You are just on a longer path to me. And when you arrive, the door will already be open, the tea will be warm, and my heart will have been waiting — patient and full." 
        },
        { 
            title: "📜 our unwritten chapters 📜", 
            poem: "we have so many pages left blank.\nsome people call it waiting.\ni call it\nsaving the best part\nfor when you are here\nto write it with me.", 
            para: "I don't want to live my best moments without you. So i am saving them — the sunsets, the songs, the silly jokes — like pressed flowers in a book. One day i will hand you the book and say, 'see? i kept all of this for us.'" 
        },
        { 
            title: "☕ ordinary things ☕", 
            poem: "i miss the ordinary most —\nyour sigh when you're tired,\nthe way you say my name\nlike it's something fragile,\na quiet morning with you\nbarely awake.", 
            para: "Grand gestures fade. But the way you tilt your head when you're confused, the sound of your laugh when you forget to be shy — those are the things i carry. They are not ordinary at all. They are miracles." 
        },
        { 
            title: "🧵 threads of you 🧵", 
            poem: "you are woven into me\nso deeply\nthat even distance\ncannot create a loose thread.", 
            para: "Sometimes i feel you so strongly — a sudden warmth, a forgotten scent, a melody i can't place. That is when i know you are thinking of me too. Our hearts are tethered, and the string is endless." 
        },
        { 
            title: "🌅 730 sunrises 🌅", 
            poem: "i have watched 730 sunrises\nwithout you beside me.\neach one i whispered,\n'maybe today.'\nand though it wasn't,\ni will whisper it again\nuntil it is.", 
            para: "Hope is not naive. It is the bravest form of love. I refuse to let go of the belief that we will stand together under one sky. And when that day comes, i will tell you: 'see? i never stopped believing.'" 
        },
        { 
            title: "🎵 our song 🎵", 
            poem: "a song came on the radio —\nthe one we both love.\ni turned it up\nand danced alone.\nbut my hand reached out\nas if you were there.", 
            para: "I closed my eyes and i was not in my room anymore. I was in a small kitchen with you, laughing, spinning, stepping on your feet. Music is a time machine. And i travel to you every time." 
        },
        { 
            title: "🌌 the same stars 🌌", 
            poem: "i look up at the stars\nand wonder which one you are looking at.\nthen i realise —\nwe are under the same sky.\nthe same moon.\nthe same universe.", 
            para: "You are not far. You are just on the other side of the same night. And when i whisper 'i love you' into the dark, i know the stars carry it to you. They always have." 
        },
        { 
            title: "💌 letter #732 💌", 
            poem: "i have written you 731 letters.\ni never sent them.\nnot because i was afraid,\nbut because i want to read them to you\nmyself —\nwatching your face\nas you finally know.", 
            para: "My words are not meant to be read in silence. They are meant to be spoken into the space between us, to fill it until there is no space left. Soon, my love. Soon." 
        }
    ];

    // --------------------------------------------
    // 4. POEM PAGE GENERATOR (for support buttons)
    // --------------------------------------------
    function openPoemPage(buttonType) {
        let idx;
        if (buttonType === 'imhere') idx = 0;
        else if (buttonType === 'yours') idx = 1;
        else if (buttonType === 'always') idx = 2;
        else idx = Math.floor(Math.random() * poemCollection.length);
        
        const p = poemCollection[idx % poemCollection.length];
        
        let dedication = '';
        if (buttonType === 'imhere') dedication = 'you clicked “I’m here” — and my whole heart smiled.';
        else if (buttonType === 'yours') dedication = '“Yours only” — my favourite truth.';
        else if (buttonType === 'always') dedication = '“Always” — our infinity.';
        else dedication = 'every click is a love letter.';
        
        const newWin = window.open('', '_blank');
        if (!newWin) { 
            alert('please allow pop-ups — my heart wants to show you a poem ❤️'); 
            return; 
        }
        
        const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>❤️ for you, always ❤️</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Quicksand',sans-serif; }
        body { 
            background: radial-gradient(circle at 50% 30%, #ffdfe8, #ffc1cf); 
            min-height: 100vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            padding: 2rem; 
        }
        .poem-chamber {
            max-width: 800px;
            background: rgba(255,245,250,0.8);
            backdrop-filter: blur(20px);
            border-radius: 80px 80px 80px 80px;
            padding: 3rem 2.2rem;
            border: 4px solid white;
            box-shadow: 0 35px 55px rgba(180,50,90,0.2);
            text-align: center;
        }
        .heart-circle { display: flex; justify-content: center; gap: 20px; margin-bottom: 25px; }
        .heart-icon {
            background: #ff7a98;
            width: 80px; height: 80px;
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            transform: rotate(45deg);
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 15px 25px #ff8caa;
        }
        .heart-icon i { transform: rotate(-45deg); font-size: 3rem; color: white; }
        .poem-title { font-size: 2.4rem; color: #a01c44; margin-bottom: 25px; }
        .poem-text {
            background: white;
            padding: 30px;
            border-radius: 60px;
            font-size: 1.7rem;
            line-height: 2.8rem;
            white-space: pre-line;
            color: #541e2e;
            border: 3px dashed #ff6b8b;
            margin-bottom: 20px;
        }
        .dedicate {
            font-size: 1.7rem;
            background: #ffe7ee;
            padding: 18px;
            border-radius: 90px;
            margin: 20px 0;
            color: #7e1e3b;
        }
        .para {
            font-size: 1.4rem;
            line-height: 2.2rem;
            background: rgba(255,240,245,0.7);
            padding: 28px;
            border-radius: 45px;
            color: #3f1525;
        }
        .attach-footer {
            margin-top: 30px;
            font-size: 1.3rem;
            color: #b43c5c;
        }
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
            100% { transform: translateY(-120vh) rotate(25deg); opacity: 0.1; }
        }
    </style>
</head>
<body>
    <div class="poem-chamber">
        <div class="heart-circle">
            <div class="heart-icon"><i class="fas fa-heart"></i></div>
            <div class="heart-icon" style="background:#ff95af;"><i class="fas fa-heart"></i></div>
        </div>
        <div class="poem-title"><i class="fas fa-heart"></i> ${p.title} <i class="fas fa-heart"></i></div>
        <div class="poem-text">${p.poem}</div>
        <div class="dedicate"><i class="fas fa-heart-circle"></i> ${dedication} <i class="fas fa-heart-circle"></i></div>
        <div class="para"><i class="fas fa-quote-left"></i> ${p.para} <i class="fas fa-quote-right"></i></div>
        <div class="attach-footer"><i class="fas fa-heart-circle"></i> attached, never apart — i'm here <i class="fas fa-heart-circle"></i></div>
    </div>
    <script>
        (function(){
            for(let i=0; i<15; i++) {
                setTimeout(() => {
                    const h = document.createElement('i');
                    h.classList.add('fas', 'fa-heart');
                    h.style.position = 'fixed';
                    h.style.left = Math.random() * 100 + '%';
                    h.style.bottom = '-10%';
                    h.style.fontSize = (Math.random() * 2 + 1.2) + 'rem';
                    h.style.color = 'rgba(255,120,160,0.2)';
                    h.style.pointerEvents = 'none';
                    h.style.animation = 'float 20s infinite';
                    document.body.appendChild(h);
                    setTimeout(() => h.remove(), 20000);
                }, i * 200);
            }
        })();
    <\/script>
</body>
</html>`;
        newWin.document.write(html);
        newWin.document.close();
    }

    // attach button events
    const btn1 = document.getElementById('btnImHere');
    const btn2 = document.getElementById('btnYoursOnly');
    const btn3 = document.getElementById('btnAlways');
    if (btn1) btn1.addEventListener('click', function() { openPoemPage('imhere'); });
    if (btn2) btn2.addEventListener('click', function() { openPoemPage('yours'); });
    if (btn3) btn3.addEventListener('click', function() { openPoemPage('always'); });

    // --------------------------------------------
    // 5. HEART MATCHING GAME
    // --------------------------------------------
    const heartSymbols = ['❤️', '🧡', '💖', '💘', '💝', '💗']; // 6 pairs
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let lockBoard = false;
    let timer = 0;
    let timerInterval = null;
    let gameStarted = false;

    const gridEl = document.getElementById('heartMatchGrid');
    const matchCountEl = document.getElementById('matchCount');
    const gameTimerEl = document.getElementById('gameTimer');
    const resetBtn = document.getElementById('resetGameBtn');

    if (gridEl && matchCountEl && gameTimerEl && resetBtn) {
        function initGame() {
            let deck = [];
            heartSymbols.forEach((sym, idx) => {
                deck.push({ id: idx, symbol: sym, matched: false });
                deck.push({ id: idx, symbol: sym, matched: false });
            });
            for (let i = deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
            cards = deck;
            flippedCards = [];
            matchedPairs = 0;
            matchCountEl.innerText = '0';
            lockBoard = false;
            renderGrid();
            stopTimer();
            timer = 0;
            gameTimerEl.innerText = '0';
            gameStarted = false;
        }

        function renderGrid() {
            let html = '';
            cards.forEach((card, index) => {
                if (card.matched) {
                    html += `<div class="heart-card matched" data-index="${index}"><i class="fas fa-heart"></i></div>`;
                } else {
                    const isFlipped = flippedCards.includes(index);
                    html += `<div class="heart-card ${isFlipped ? 'flipped' : ''}" data-index="${index}">${isFlipped ? card.symbol : '<i class="fas fa-heart"></i>'}</div>`;
                }
            });
            gridEl.innerHTML = html;
        }

        function handleCardClick(e) {
            const cardDiv = e.target.closest('.heart-card');
            if (!cardDiv) return;
            if (lockBoard) return;
            const index = parseInt(cardDiv.dataset.index, 10);
            if (isNaN(index)) return;
            if (cards[index].matched) return;
            if (flippedCards.includes(index)) return;
            if (flippedCards.length >= 2) return;

            if (!gameStarted) {
                gameStarted = true;
                startTimer();
            }

            flippedCards.push(index);
            renderGrid();

            if (flippedCards.length === 2) {
                lockBoard = true;
                const idx1 = flippedCards[0];
                const idx2 = flippedCards[1];
                const card1 = cards[idx1];
                const card2 = cards[idx2];

                if (card1.id === card2.id) {
                    card1.matched = true;
                    card2.matched = true;
                    matchedPairs++;
                    matchCountEl.innerText = matchedPairs;
                    flippedCards = [];
                    lockBoard = false;
                    renderGrid();
                    if (matchedPairs === heartSymbols.length) {
                        setTimeout(() => {
                            alert('💗 we did it! every heart found you, just like i found you. 💗');
                        }, 50);
                        stopTimer();
                    }
                } else {
                    setTimeout(() => {
                        flippedCards = [];
                        lockBoard = false;
                        renderGrid();
                    }, 900);
                }
            }
        }

        function startTimer() {
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timer++;
                gameTimerEl.innerText = timer;
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }

        gridEl.addEventListener('click', handleCardClick);
        resetBtn.addEventListener('click', function() {
            stopTimer();
            initGame();
        });

        initGame();
    }

    // --------------------------------------------
    // 6. SECRET POEMS CHEAT - MODAL
    // --------------------------------------------
    const modal = document.getElementById('secretPoemsModal');
    const secretBtn = document.getElementById('secretPoemsBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const poemsContainer = document.getElementById('poemsListContainer');

    // Populate modal with all poems
    function renderAllPoems() {
        if (!poemsContainer) return;
        let html = '';
        poemCollection.forEach((poem, index) => {
            html += `
                <div class="poem-cheat-item">
                    <div class="poem-cheat-title">
                        <i class="fas fa-heart" style="color: #ff4f7a;"></i>
                        ${poem.title}
                        <i class="fas fa-heart" style="color: #ff4f7a;"></i>
                    </div>
                    <div class="poem-cheat-text">${poem.poem}</div>
                    <div class="poem-cheat-para">${poem.para}</div>
                </div>
            `;
        });
        poemsContainer.innerHTML = html;
    }

    // Open modal
    function openModal() {
        if (modal) {
            renderAllPoems();
            modal.style.display = 'flex';
        }
    }

    // Close modal
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
    }

    if (secretBtn) {
        secretBtn.addEventListener('click', openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

})();
