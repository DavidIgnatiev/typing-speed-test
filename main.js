
let text = {
    "easy": [
        "The sun was setting behind the hills when Tom decided to go for a walk. He put on his jacket, grabbed his keys, and stepped outside. The air was cool and fresh after the rain. Leaves on the trees had turned golden and red. He walked slowly down the quiet street, listening to the birds. A dog barked somewhere in the distance. Children were playing in the park near the corner. Tom smiled and kept walking. He loved evenings like this, when the whole world felt calm and still. After an hour he turned back home, feeling relaxed and happy.",
        "Sarah always woke up early on weekends. She liked to make a big breakfast before anyone else got up. First she made coffee, then eggs and toast. She set the table nicely with plates and orange juice. The kitchen smelled warm and good. Soon her family came down the stairs one by one. Her little brother was still sleepy and his hair was a mess. Her dad laughed when he saw the full table. They all sat down together and talked about their plans for the day. It was one of her favorite things about weekends.",
        "Learning to ride a bike is something most people remember for the rest of their lives. At first it feels impossible. You wobble, you fall, and you wonder if you will ever get it right. But then something clicks. Suddenly your body finds its balance and you are moving forward without thinking about it. The wind is in your face and you feel free. That moment stays with you forever. It teaches you that hard things become easy with practice. All you need is patience and the courage to keep trying even when it seems too difficult.",
        "The old library on the corner of Main Street was a special place for everyone in town. It had tall wooden shelves that reached the ceiling, filled with thousands of books. The floor creaked when you walked on it. There was always a smell of old paper in the air. A kind woman named Mrs. Hill worked at the front desk. She knew every book in the building and could always help you find what you were looking for. Children came after school to read and do homework. On rainy days the library was always full. It was the heart of the community."
    ],
    "medium": [
        "The history of the internet is one of the most remarkable stories of the twentieth century. What began as a small military research network in the late 1960s gradually grew into a global system connecting billions of people. Early pioneers had no idea what they were building would change every aspect of modern life — from how we communicate and shop, to how we learn and work. The invention of the World Wide Web in 1989 by Tim Berners-Lee opened the internet to the general public. Within a decade, it had transformed commerce, journalism, and entertainment beyond recognition. Today, being offline feels genuinely strange to most people in developed countries.",
        "Climate change is no longer a distant threat discussed only in scientific journals — it is a present reality reshaping the lives of millions of people around the world. Rising sea levels are threatening coastal cities from Miami to Jakarta. Wildfires are burning larger areas than at any point in recorded history. Droughts are becoming longer and more severe, straining agricultural systems that feed entire continents. Scientists are nearly unanimous: human activity, particularly the burning of fossil fuels, is the primary driver of these changes. The window for meaningful action is narrowing, and the decisions made by governments, businesses, and individuals in the next decade will determine the planet's trajectory for centuries.",
        "Sleep is one of the most underrated pillars of good health, yet millions of people around the world are chronically sleep-deprived. Modern culture often treats the need for rest as a weakness, celebrating those who work long hours with minimal sleep. But the science tells a very different story. During sleep, the brain consolidates memories, clears out toxic waste products, and repairs neural connections. The immune system strengthens, muscles recover, and hormones are regulated. Adults typically need between seven and nine hours per night. Consistently getting less than six hours increases the risk of heart disease, diabetes, obesity, and cognitive decline. Prioritizing sleep is not laziness — it is one of the smartest things you can do for your long-term performance.",
        "Photography has undergone a complete transformation since the invention of digital cameras in the 1990s. What was once an expensive and technical hobby — requiring knowledge of exposure, film development, and darkroom techniques — is now accessible to virtually everyone with a smartphone. This democratization has had enormous consequences. More photographs are taken every two minutes today than were taken in the entire nineteenth century. Social media platforms have made visual communication a dominant form of human expression. Yet this abundance has also diminished the perceived value of individual images. Professional photographers have had to adapt, finding niches in commercial work, fine art, and documentary storytelling where craft and vision still command respect and payment.",
    ],
    "hard": [
        "In Q3 2024, the company reported net revenue of $4,872,391.50 — a 17.6% increase year-over-year (YoY). Operating costs rose to $2,104,780.00, resulting in an EBITDA margin of 34.2%. The board approved a share buyback of up to $500M at a P/E ratio of 22.4x. Diluted EPS came in at $3.87, beating analyst consensus of $3.61 by ~7.2%. Key risk factors include: (1) FX headwinds (~$80M impact), (2) supply-chain disruptions in APAC, and (3) rising interest rates — currently at 5.25%–5.50%. The next earnings call is scheduled for 2024-11-14 @ 9:00 AM EST.",
        "To configure a secure web server on Ubuntu 22.04, run the following commands: sudo apt update && sudo apt install nginx certbot python3-certbot-nginx -y. Then open the firewall: sudo ufw allow 'Nginx Full' && sudo ufw reload. Edit the config at /etc/nginx/sites-available/mysite.conf and set server_name example.com www.example.com. Obtain an SSL certificate: sudo certbot --nginx -d example.com -d www.example.com. Verify the setup with curl -I https://example.com — you should see HTTP/2 200. Finally, enable auto-renewal: sudo systemctl enable certbot.timer. Check logs at /var/log/nginx/error.log if anything goes wrong.",
        "The RSA encryption algorithm relies on the mathematical difficulty of factoring large integers. Given two primes p = 61 and q = 53, compute n = p × q = 3,233. The totient φ(n) = (p−1)(q−1) = 3,120. Choose e = 17, where gcd(17, 3120) = 1. The private key d satisfies d × e ≡ 1 (mod φ(n)), giving d = 2,753. To encrypt message M = 65: C = M^e mod n = 65^17 mod 3,233 = 2,790. To decrypt: M = C^d mod n = 2,790^2,753 mod 3,233 = 65. Real-world RSA uses key sizes ≥ 2,048 bits, making brute-force attacks computationally infeasible even with today's fastest supercomputers running at ~10^18 FLOPS/s.",
    ]
};

let modes = document.querySelector(".modes");
let textarea = document.querySelector(".text-area");
let preparationBlock = document.querySelector(".preparation-block");
let timer = document.querySelector(".timer-data");
let seconds = 60;
let timerId = null;

let nonstopMode = false;

let focusedOnTyping = false;
let accuracy = document.querySelector(".accuracy-data");
let accuracyCongrat = document.querySelector(".accuracy-data-congrat");
let accuracyNewCongrat = document.querySelector(".accuracy-data-congratNew");
let currentLetterPosition = 0;

let wpm = document.querySelector(".wpm-data");
let wpmCongrat = document.querySelector(".wpm-data-congrat");
let wmpCongratNew = document.querySelector(".wpm-data-congratNew")

let mode = document.querySelector(".mode");
let typingArea = document.querySelector(".typing-area");

let smallScreen = window.matchMedia("(width < 720px)");
let needsLetteresToScroll = 0;
let bestWPM = document.querySelector(".best-wpm");
let wmpSmashed = false;
let hideEls = document.querySelector(".wrapper");
let firstCongrat = document.querySelector(".first-congrat");

let again = document.querySelector(".restart");
let totalTypedCharacters = 0;
let correct = 0;
let errors = 0;

let typedCharactersOnCurrentText = 0;
let currentText = null;
let currentTextIndex = 0;
let canAddText = true;
let allTexts = [];

let infoAndModesBlock = document.querySelector(".info-and-modes");

let rightCharacters = document.querySelector(".correct-characters");
let wrongCharacters = document.querySelector(".wrong-characters");
let rightCongrat = document.querySelector(".congrat-correct");
let wrongCongrat = document.querySelector(".congrat-wrong");
let newRecordCongrat = document.querySelector(".new-record-congrat");

let difficultyBlock = document.querySelector(".difficulty");
let modeBlock = document.querySelector(".mode");

let selectionDiff = document.createElement("select");
let selectionMode = document.createElement("select");

let logoImage = document.querySelector(".logo img");
let personalBestSmall = document.querySelector(".best-result p");

let mobileInput = document.querySelector(".mobile-hidden-input");

textarea.addEventListener("click", () => {
    if (focusedOnTyping) {
        mobileInput.focus();
    }
});



function difficultyIsChosen(event) {
    restart();
    let pressedBtn = null;


    if (smallScreen.matches) {


        if (event.type === "click") return;

        pressedBtn = event.target.options[event.target.selectedIndex];
        if (!pressedBtn.classList.contains("difficulty-button")) return;
    } else {

        pressedBtn = event.target.closest(".difficulty-button");
        if (!pressedBtn) return;
    }

    if (!pressedBtn.classList.contains("chosen")) {
        let selected = modes.querySelectorAll(".chosen");
        for (let elem of selected) {
            elem.classList.remove('chosen');
        }
        pressedBtn.classList.add("chosen");
    }

    nonstopMode = false;

    clearTime(timerId);
    changeTime();
    changeTimeColor();
    accuracy.textContent = "100%";
    changeAccuracyColor(accuracy);
    wpm.textContent = 0;

    let difficulty = null;
    if (!smallScreen.matches) {
        difficulty = event.target.value;
    } else {
        difficulty = pressedBtn.value;
    }
    console.log(difficulty);

    let chosenText = text[difficulty][Math.floor(Math.random() * text[difficulty].length)];

    preparationBlock.style.display = "none";
    splitAndSpan(textarea, chosenText);
    focusedOnTyping = true;

    currentLetterPosition = 0;
    addBackground(textarea, currentLetterPosition);


    if (event.target && typeof event.target.blur === 'function') {
        event.target.blur();
    }
}

modes.addEventListener("click", difficultyIsChosen);


function addBackground(area, index) {

    for (let item of area.childNodes) {
        if (item.classList.contains("current-letter")) {
            item.classList.remove("current-letter");
        }
    }
    area.childNodes[index].classList.add("current-letter");
}






for (let texts of Object.values(text)) {
    allTexts.push(...texts);
}



document.addEventListener("keydown", (event) => {

    if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
    }
    if (event.key === "CapsLock") return;

    if (!focusedOnTyping) return;

    startTimer();
    changeAccuracyColor(accuracy);
    totalTypedCharacters++;
    needsLetteresToScroll++;
    let currentSpanWithLetter = textarea.childNodes[currentLetterPosition];
    if (event.key == currentSpanWithLetter.textContent) {
        addBackground(textarea, currentLetterPosition + 1);
        currentLetterPosition++;
        currentSpanWithLetter.classList.add("letter-right");
        correct++;
    } else {
        addBackground(textarea, currentLetterPosition + 1);
        currentLetterPosition++;
        currentSpanWithLetter.classList.add("letter-wrong");
        errors++;
    }
    showWPM();
    showAccuracy();


    let typedPart = Math.floor((typedCharactersOnCurrentText / currentText.length) * 100);

    if (nonstopMode) {
        typedCharactersOnCurrentText++;

        if (currentTextIndex >= allTexts.length) {
            currentTextIndex = 0;
        }

        if (typedPart >= 100) {
            typedCharactersOnCurrentText = 0;
            currentTextIndex++;
            currentText = allTexts[currentTextIndex];
            typedPart = 0;
            canAddText = true;
        }

        if (needsLetteresToScroll >= 350) {
            textarea.scrollBy(0, 300);
            needsLetteresToScroll = 0;
        }


        if (typedCharactersOnCurrentText >= 350 && canAddText) {
            splitAndSpan(textarea, allTexts[currentTextIndex + 1]);
            canAddText = false;
        }
    }


});



bestWPM.textContent = localStorage.getItem("best-score");


function showWPM() {
    let result = Math.floor((totalTypedCharacters - errors) / 5);
    wpm.textContent = result;
    wpmCongrat.textContent = result;
    wmpCongratNew.textContent = result;
    if (result > Number(bestWPM.textContent)) {
        bestWPM.textContent = result;
        localStorage.setItem("best-score", result);
        wmpSmashed = true;
    }
}


function showAccuracy() {
    let result = Math.floor((correct / totalTypedCharacters) * 100);
    accuracy.textContent = result + "%";
    accuracyCongrat.textContent = result + "%";
    accuracyNewCongrat.textContent = result + "%";
}





function splitAndSpan(area, text) {
    if (!nonstopMode) {
        area.innerHTML = "";
    }

    let fragment = new DocumentFragment();
    for (let item of text.split("")) {
        let span = document.createElement("span");
        span.textContent = item;
        fragment.append(span);
    }
    area.append(fragment);
}


function startTimer() {
    if (!focusedOnTyping || nonstopMode) {
        return;
    }
    if (timerId !== null) return;
    timerId = setInterval(() => {
        if (!focusedOnTyping) clearTime(timerId);
        if (seconds <= 1) {
            if (wmpSmashed) {
                showNewRecord();
                wmpSmashed = false;
            } else {
                showFirstCongrat();
            }
            clearTime();
            changeTime();
        }
        changeTimeColor(seconds);
        seconds--;
        changeTime();
    }, 1000)
}


function changeTime() {
    timer.textContent = seconds;
}

function clearTime(timer) {
    clearInterval(timerId);
    timerId = null;
    seconds = 60;
}

function changeTimeColor(seconds) {
    if (seconds <= 40 && seconds > 20) {
        timer.style.color = "hsl(49, 85%, 70%)";
    } else if (seconds <= 20) {
        timer.style.color = "hsl(354, 63%, 57%)";
    } else {
        timer.style.color = "hsl(140, 63%, 57%)";
    }
}

function changeAccuracyColor(accuracy) {
    let accuracyNumber = accuracy.textContent;
    let accuracyData = Number(accuracyNumber.slice(0, accuracyNumber.length - 1));
    if (accuracyData < 75 && accuracyData > 50) {
        accuracy.style.color = "hsl(49, 85%, 70%)";
        accuracyCongrat.style.color = "hsl(49, 85%, 70%)";
        accuracyNewCongrat.style.color = "hsl(49, 85%, 70%)";
    } else if (accuracyData <= 50) {
        accuracy.style.color = "hsl(354, 63%, 57%)";
        accuracyCongrat.style.color = "hsl(354, 63%, 57%)";
        accuracyNewCongrat.style.color = "hsl(354, 63%, 57%)";
    } else {
        accuracy.style.color = "hsl(140, 63%, 57%)";
        accuracyCongrat.style.color = "hsl(140, 63%, 57%)";
        accuracyNewCongrat.style.color = "hsl(140, 63%, 57%)";
    }
}


hideEls.addEventListener("click", (event) => {
    if (!event.target.closest(".restart")) return;
    restart();
})


function restart() {
    textarea.innerHTML = "";
    preparationBlock.style = "block";
    clearTime(timerId);
    changeTime();
    changeTimeColor();
    accuracy.textContent = "100%";
    changeAccuracyColor(accuracy);
    wpm.textContent = 0;
    totalTypedCharacters = 0;
    correct = 0;
    errors = 0;
    typedCharactersOnCurrentText = 0;
    currentText = null;
    currentTextIndex = 0;
    canAddText = true;
    needsLetteresToScroll = 0;
    infoAndModesBlock.style.display = "flex";
    typingArea.style.display = "block";
    again.style.display = "flex";
    firstCongrat.style.display = "none";
    newRecordCongrat.style.display = "none";
}


function modeChoose(event) {
    if (!smallScreen.matches) {
        if (!event.target.closest(".mode-choice")) return;
    }


    let chosenMode = null;
    if (!smallScreen.matches) {
        chosenMode = event.target.closest(".mode-choice");
    } else {
        chosenMode = event.target.options[event.target.selectedIndex];
    }


    if (!chosenMode.classList.contains("chosen")) {
        let selected = mode.querySelectorAll(".chosen");
        for (let elem of selected) {
            elem.classList.remove('chosen');
        }
        chosenMode.classList.add("chosen");
    }

    if (chosenMode.dataset.mode == "nonstop") {
        restart();
        turnNonStopMode();
    }

    if (chosenMode.dataset.mode == "timed") {
        restart();
    }
}

mode.addEventListener("click", modeChoose);


function turnNonStopMode() {
    textarea.innerHTML = "";
    nonstopMode = true;
    focusedOnTyping = true;
    accuracy.textContent = "100%";
    changeAccuracyColor(accuracy);
    wpm.textContent = 0;
    typedCharactersOnCurrentText = 0;
    currentText = allTexts[0];
    splitAndSpan(textarea, allTexts[0]);
    splitAndSpan(textarea, allTexts[1]);
    currentTextIndex = 0;
    preparationBlock.style.display = "none";

    currentLetterPosition = 0;
    addBackground(textarea, currentLetterPosition);

    clearTime(timerId);
    changeTime();
    timer.textContent = "NonStop Mode Active";


}








function showFirstCongrat() {
    for (let i = 1; i < hideEls.children.length; i++) {
        hideEls.children[i].style.display = "none";
    }
    firstCongrat.style.display = "flex";
    rightCharacters.textContent = correct;
    wrongCharacters.textContent = errors;
    focusedOnTyping = false;
}




function showNewRecord() {
    for (let i = 1; i < hideEls.children.length; i++) {
        hideEls.children[i].style.display = "none";
    }
    newRecordCongrat.style.display = "flex";
    rightCongrat.textContent = correct;
    wrongCongrat.textContent = errors;
    focusedOnTyping = false;
}







function responsiveMode() {
    for (let i = 0; i < 3; i++) {
        let option = document.createElement("option");
        option.textContent = difficultyBlock.children[i + 1].textContent;
        option.classList.add("difficulty-button");
        option.setAttribute("value", (difficultyBlock.children[i + 1].textContent).toLocaleLowerCase())
        selectionDiff.append(option);
    }
    difficultyBlock.style.display = "none";
    modes.prepend(selectionDiff);


    for (let i = 0; i < 2; i++) {
        let option = document.createElement("option");
        option.textContent = mode.children[i + 1].textContent;
        option.classList.add(".mode-choice");
        if (i == 0) {
            option.setAttribute("data-mode", "timed");
        } else {
            option.setAttribute("data-mode", "nonstop");
        }
        selectionMode.append(option);
    }

    modeBlock.style.display = "none";
    modes.append(selectionMode);


    logoImage.src = "./images/logo-small.svg";
    personalBestSmall.childNodes[0].remove();

}

if (smallScreen.matches) {
    responsiveMode();
    selectionDiff.addEventListener("change", difficultyIsChosen);
    selectionMode.addEventListener("change", modeChoose);
}


