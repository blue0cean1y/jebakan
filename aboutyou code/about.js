const button = document.getElementById('animateButton');
const overlay = document.getElementById('overlay');
const image = document.getElementById('image');


button.addEventListener('click', () => {
    overlay.style.display = 'flex'; 
    image.style.transform = 'scale(1)'; 
});


overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    image.style.transform = 'scale(0)'; 
});
