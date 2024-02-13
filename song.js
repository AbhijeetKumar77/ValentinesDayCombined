var audio=new Audio("unconditionally.mp3");
audio.addEventListener('canplay', function() {
    audio.play();
});
audio.play();