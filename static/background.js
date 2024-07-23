const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const stars = [];
const numStars = 5000; // Number of stars

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        const k = 128.0 / star.z;
        const px = star.x * k + canvas.width / 2;
        const py = star.y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - star.z / canvas.width) * 2;
            ctx.fillRect(px, py, size, size);
        }

        star.z -= 0.02; // Speed of star movement
        if (star.z <= 0) {
            star.z = canvas.width;
        }
    });

    requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
drawStars();
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const stars = [];
const numStars = 5000; // Number of stars

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        const k = 128.0 / star.z;
        const px = star.x * k + canvas.width / 2;
        const py = star.y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - star.z / canvas.width) * 2;
            ctx.fillRect(px, py, size, size);
        }

        star.z -= 0.02; // Speed of star movement
        if (star.z <= 0) {
            star.z = canvas.width;
        }
    });

    requestAnimationFrame(drawStars);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
drawStars();
