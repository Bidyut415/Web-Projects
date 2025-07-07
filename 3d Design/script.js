const cube = document.querySelector('.cube');
let rotateX = 0;
let rotateY = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') rotateX -= 45;
    if (e.key === 'ArrowDown') rotateX += 45;
    if (e.key === 'ArrowLeft') rotateY -= 45;
    if (e.key === 'ArrowRight') rotateY += 45;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
