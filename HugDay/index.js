let text = "Agr paas rhti to pkka jor se hug kr leta 🥺 lekin ... but fir bhi Happy Hug Day 💖";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

document.getElementById('gotoKiss').addEventListener('click', function() {
    window.location.href = '../KissDay/index.html';
});