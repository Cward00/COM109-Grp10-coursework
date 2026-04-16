const whiteBars = document.querySelectorAll('.white-bar');
const boxes = document.querySelectorAll('.box');

whiteBars.forEach((bar, index) => {
    bar.addEventListener('click', function() {
        boxes[index].classList.toggle('visible');
    });
});