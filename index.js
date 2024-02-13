let text = "Touch the entity that begins to pulsate more rapidly and passionately upon catching a glimpse of you.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('myDiv').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

document.getElementById('gotoRose').addEventListener('click', function() {
    window.location.href = 'RoseDay/index.html';
});