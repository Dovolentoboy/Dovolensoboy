const toggleElement = document.querySelector('#theme-change');

function changeText() {
    if (toggleElement.textContent === 'Кликни') {
        toggleElement.textContent = 'Люблю тебя)';
    } else if (toggleElement.textContent === 'Люблю тебя') {
        toggleElement.textContent = 'Обожаю просто';
    } else {
        toggleElement.textContent = 'Кликни';
    }
}

toggleElement.addEventListener('click', () => {
    changeText();
});
