const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        let timer;
        box.addEventListener('mouseleave', function(){
            clearTimeout(timer);
            this.style.backgroundColor = 'transparent';
        }, 2000)
    });
});
