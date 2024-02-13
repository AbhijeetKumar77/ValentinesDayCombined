let text = "The sweetness of these chocolates is nothing compared to that one smile of yours. Happy Chocolate Day!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        document.getElementById('walking-text2').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

document.getElementById('gotoTeddy').addEventListener('click', function() {
    window.location.href = '../TeddyDay/index.html';
});