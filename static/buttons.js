function invite() {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1262930991597621343';
}

function supportServer() {
    window.location.href = 'https://discord.gg/aCqcxRBJ;
}

background.js:

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
