// Sample JavaScript code (script.js)
let poemLines = [];

// Load existing poem data from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const storedPoem = localStorage.getItem('collaborativePoem');
    if (storedPoem) {
        poemLines = JSON.parse(storedPoem);
        updatePoem();
    }
});

function submitContribution() {
    const contributionInput = document.getElementById('contribution-input');
    const contribution = contributionInput.value.trim();

    if (contribution !== '') {
        poemLines.push(contribution);
        updatePoem();
        savePoemToLocalStorage();
        contributionInput.value = '';
    }
}

function updatePoem() {
    const poemContainer = document.getElementById('poem-container');
    poemContainer.innerHTML = '';

    poemLines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.textContent = line;
        poemContainer.appendChild(lineElement);
    });
}

function savePoemToLocalStorage() {
    // Save the poem data to local storage
    localStorage.setItem('collaborativePoem', JSON.stringify(poemLines));
}
