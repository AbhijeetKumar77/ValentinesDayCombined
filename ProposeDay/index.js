let text = "Hello, There are many things to express but from the day i saw you in the suggestion of my insta, I have been overwhelmed with feelings that I have never experienced for anyone else. Your eyes, your cuteness, your voice, your nature, your gaali dene wala way and most importantly the cheeks 😂 is like ... (can't find words). Literally just a glimpse of your smile is enough to make an angry person smile. I really like you Palak bht bht bht jada wala and Happy Propose Day 🩷.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

document.getElementById('gotoChocolate').addEventListener('click', function() {
    window.location.href = '../ChocolateDay/index.html';
});