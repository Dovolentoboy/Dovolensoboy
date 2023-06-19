const toggleElement = document.querySelector('#blya');

function changeText() {
    if (toggleElement.textContent === 'тык-тык') {
        toggleElement.textContent = 'Люблю тебя)';
    } else if (toggleElement.textContent === 'тык-тык') {
        toggleElement.textContent = 'Обожаю просто';
    } else {
        toggleElement.textContent = 'тык-тык';
    }
}

toggleElement.addEventListener('click', () => {
    changeText();
});
