let text = "Happy Teddy Day, meri cutie pie! ❤️ I hope we will be with each other just like the two teddies are 🤭";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

document.getElementById('gotoPromise').addEventListener('click', function() {
    window.location.href = '../PromiseDay/index.html';
});