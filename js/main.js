let div_box = document.querySelector('.box')
let div_1 = document.querySelector('.box_1')
let numbers = Array(10).fill().map((_, i) => i + 1);

div_1.textContent = numbers.slice(0, 7).join(' ');

div_box.addEventListener('click', function () {
    numbers.push(numbers.shift());
    div_1.textContent = numbers.slice(0, 7).join(' ');
});