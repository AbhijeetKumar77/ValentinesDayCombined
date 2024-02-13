let text = "Don't want to say many things 🤭 but Happy Kiss Day 💖";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

document.getElementById('gotoValentine').addEventListener('click', function() {
    window.location.href = '../ValentineDay/index.html';
});