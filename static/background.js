const canvas = document.createElement('canvas');
canvas.id = 'background-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth * 2; // Increase the width
let height = canvas.height = window.innerHeight * 2; // Increase the height

const stars = [];
const numStars = 2000; // Increase the number of stars
const speed = 0.02;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        const k = 128.0 / star.z;
        const px = star.x * k + width / 2;
        const py = star.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
            const size = (1 - star.z / width) * 2;
            ctx.fillRect(px, py, size, size);
        }

        star.z -= speed;
        if (star.z <= 0) {
            star.z = width;
        }
    });

    requestAnimationFrame(drawStars);
}

function resizeCanvas() {
    width = canvas.width = window.innerWidth * 2;
    height = canvas.height = window.innerHeight * 2;
}

window.addEventListener('resize', resizeCanvas);

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    stars.forEach(star => {
        star.x += (x - width / 2) * 0.0001;
        star.y += (y - height / 2) * 0.0001;
    });
});

resizeCanvas();
drawStars();
