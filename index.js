const text = document.getElementById("name");

const animate_text = () => {
    // Splits the text into letters
    const str = text.textContent;
    const letters = str.split("");

    // Remove the origin text
    text.textContent = "";

    // Warp every letter in a span
    for (let le of letters) {
        let newSpan = document.createElement("span");
        newSpan.textContent = le;
        text.appendChild(newSpan);
    }
}