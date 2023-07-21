let root = document.querySelector(":root");
let button = document.querySelector("#themeToggle");

button.addEventListener('click',() => {
    event.preventDefault();
    root.classList.toggle('dark');
    // Изменение текста кнопки
    if (button.textContent === 'Сделай светло') {
        button.textContent = 'Сделай темно';
    } else {
        button.textContent = 'Сделай светло';
    }   
});
