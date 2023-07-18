"use strict";
const text = document.getElementById("name");
const animate_text = (text) => {
    if (text) {
        // Splits the text into letters
        const str = text.textContent !== null ? text.textContent : "";
        const letters = str.split("");
        // Remove the origin text
        text.textContent = "";
        // Warp every letter in a span
        for (let le of letters) {
            let newSpan = document.createElement("span");
            newSpan.textContent = le;
            text.appendChild(newSpan);
        }
        let char = 0;
        let timer = setInterval(onTick, 130);
        function onTick() {
            const span = text.getElementsByTagName("span")[char];
            span.classList.add("animate-text");
            char++;
            if (char === letters.length) {
                complete();
                return;
            }
        }
        function complete() {
            clearInterval(timer);
            // timer = null;
        }
    }
};
animate_text(text);
